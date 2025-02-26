"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

// Simple implementation of Tabs for styling purposes only
const Tabs = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { defaultValue: string }
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("", className)}
    {...props}
  />
));
Tabs.displayName = "Tabs";

const TabsList = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "inline-flex h-9.5 items-center justify-center rounded-lg bg-[#d8d8d5] p-1 text-gray-600",
      className
    )}
    {...props}
  />
));
TabsList.displayName = "TabsList";

const TabsTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    style={
      {
        "--tab-color": "#e0492e",
      } as React.CSSProperties
    }
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-[1rem] font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-white hover:bg-[#687382] hover:opacity-40 hover:text-white",
      props.value === "faucet" ? "bg-[#e0492e] text-white" : "",
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = "TabsTrigger";

export { Tabs, TabsList, TabsTrigger };