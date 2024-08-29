"use client";

import Link from "next/link";
import { HomeIcon, ViewListIcon, CogIcon } from "@heroicons/react/solid";
import { usePathname, useRouter } from "next/navigation";

const NavItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive: boolean;
}> = ({ icon, label, href, isActive }) => {
  return (
    <Link
      href={href}
      className={`flex flex-col items-center transition-colors duration-300 ${
        isActive ? "text-blue-600" : "text-gray-600"
      }`}
    >
      <div
        className={`flex items-center justify-center p-2 rounded-full transition-colors duration-300 ${
          isActive ? "bg-blue-100" : "hover:bg-gray-100"
        }`}
      >
        {icon}
      </div>
      <span
        className={`text-xs font-medium mt-1 ${isActive ? "font-bold" : ""}`}
      >
        {label}
      </span>
    </Link>
  );
};

export const NavigationBar = () => {
  const router = useRouter();
  const currentPath = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-around bg-white py-3 shadow-md border-t border-gray-200">
      <NavItem
        icon={<HomeIcon className="h-6 w-6" />}
        label="Home"
        href="/"
        isActive={currentPath === "/"}
      />
      <NavItem
        icon={<ViewListIcon className="h-6 w-6" />}
        label="Dashboard"
        href="/dashboard"
        isActive={currentPath === "/dashboard"}
      />
      <NavItem
        icon={<CogIcon className="h-6 w-6" />}
        label="Settings"
        href="/settings"
        isActive={currentPath === "/settings"}
      />
    </nav>
  );
};
