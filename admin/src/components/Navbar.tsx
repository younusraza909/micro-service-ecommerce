"use client";

import { LogOut, Moon, Settings, Sun, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import ThemeToggleMenu from "./ThemeToggleMenu";
import UserMenu from "./UserMenu";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="p-4 flex items-center justify-between">
      {/* LEFT */}
      Collapsed Button
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
