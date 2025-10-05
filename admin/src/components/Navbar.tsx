"use client";

import Link from "next/link";
import React from "react";

import ThemeToggleMenu from "./ThemeToggleMenu";
import UserMenu from "./UserMenu";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  return (
    <nav className="p-4 flex items-center justify-between">
      {/* LEFT */}
      <SidebarTrigger />
      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>
        <ThemeToggleMenu />
        <UserMenu />
      </div>
    </nav>
  );
};

export default Navbar;
