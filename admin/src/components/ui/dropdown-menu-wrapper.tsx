"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import React from "react";

type DropdownMenuWrapperProps = {
  trigger: React.ReactNode;
  content: React.ReactNode;
  align?: "start" | "center" | "end";
  sideOffset?: number;
};

export function DropdownMenuWrapper({
  trigger,
  content,
  align = "end",
  sideOffset = 4,
}: DropdownMenuWrapperProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent align={align} sideOffset={sideOffset}>
        {content}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
