"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type TabsContextValue = {
  value: string;
  setValue: (value: string) => void;
};

const TabsContext = React.createContext<TabsContextValue | null>(null);

function useTabs() {
  const context = React.useContext(TabsContext);

  if (!context) {
    throw new Error("Tabs components must be used within <Tabs>.");
  }

  return context;
}

type TabsProps = React.HTMLAttributes<HTMLDivElement> & {
  defaultValue: string;
};

function Tabs({ className, defaultValue, ...props }: TabsProps) {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div data-slot="tabs" className={className} {...props} />
    </TabsContext.Provider>
  );
}

function TabsList({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div data-slot="tabs-list" className={cn("items-center p-1", className)} {...props} />;
}

type TabsTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
};

function TabsTrigger({ className, value, type = "button", ...props }: TabsTriggerProps) {
  const tabs = useTabs();
  const active = tabs.value === value;

  return (
    <button
      data-slot="tabs-trigger"
      type={type}
      className={cn(
        "inline-flex items-center justify-center px-3 py-2 text-sm font-medium transition-colors",
        active ? "bg-slate-900 text-white shadow-sm" : "text-slate-600 hover:bg-slate-100",
        className,
      )}
      onClick={() => tabs.setValue(value)}
      {...props}
    />
  );
}

type TabsContentProps = React.HTMLAttributes<HTMLDivElement> & {
  value: string;
};

function TabsContent({ className, value, ...props }: TabsContentProps) {
  const tabs = useTabs();

  if (tabs.value !== value) {
    return null;
  }

  return <div data-slot="tabs-content" className={cn(className)} {...props} />;
}

export { Tabs, TabsContent, TabsList, TabsTrigger };
