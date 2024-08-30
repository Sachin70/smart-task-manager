"use client";

import React, { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { Header } from "@/components/Header";
import { NavigationBar } from "@/components/Navigation";
import { FAB } from "@/components/FAB";
import { Inter } from "next/font/google";
import { tasks as initialTasks } from "@/utils/constants";
import { setTasks } from "@/slices/taskSlices";
import { AppDispatch, RootState, store } from "@/store";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

function RootLayoutContent({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredTasks } = useSelector((state: RootState) => state.tasks);

  useEffect(() => {
    dispatch(setTasks(initialTasks));
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className="mt-10 py-16">
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child as React.ReactElement, {
                tasks: filteredTasks,
              })
            : child
        )}
      </main>
      <FAB />
      <NavigationBar />
    </>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body
          className={`${inter.className} pb-16 max-w-[1440px] w-full mx-auto bg-gray-100`}
        >
          <RootLayoutContent>{children}</RootLayoutContent>
        </body>
      </html>
    </Provider>
  );
}
