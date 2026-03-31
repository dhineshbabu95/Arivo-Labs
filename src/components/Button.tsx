import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit";
  className?: string;
  external?: boolean;
  disabled?: boolean;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
  external = false,
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-all duration-200 active:scale-[0.98] sm:min-h-0 sm:text-sm";

  const variants = {
    primary:
      "bg-primary text-primary-foreground shadow-md shadow-primary/18 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/12 dark:shadow-primary/22",
    secondary:
      "border border-border/80 bg-background/60 text-foreground hover:border-border hover:bg-muted/50 dark:bg-transparent dark:hover:bg-card/70",
    ghost:
      "bg-transparent text-muted-foreground hover:bg-card/80 hover:text-foreground",
  };

  const disabledStyles = disabled
    ? "cursor-not-allowed opacity-70 pointer-events-none"
    : "";
  const combinedClassName = `${baseStyles} ${variants[variant]} ${disabledStyles} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  );
}
