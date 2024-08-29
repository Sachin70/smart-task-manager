"use client";

import { Inter } from "next/font/google";
import React, { useState, useCallback } from "react";

import { Header } from "@/components/Header";
import { NavigationBar } from "@/components/Navigation";
import { FAB } from "@/components/FAB";

import { tasks } from "@/utils/constants";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    const lowercasedQuery = query.toLowerCase();
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredTasks(filtered);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${inter.className} pb-16 max-w-[1440px] w-full mx-auto bg-gray-100`}
      >
        <Header onSearch={handleSearch} />
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
      </body>
    </html>
  );
}
