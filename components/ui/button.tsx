import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "outline" | "ghost" | "secondary";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  default: "bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-300",
  outline: "border border-slate-200 bg-white hover:bg-slate-50 disabled:bg-slate-100",
  ghost: "hover:bg-slate-100 disabled:hover:bg-transparent",
  secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 disabled:bg-slate-100",
};

function Button({ className, variant = "default", type = "button", ...props }: ButtonProps) {
  return (
    <button
      data-slot="button"
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-60",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}

export { Button };
