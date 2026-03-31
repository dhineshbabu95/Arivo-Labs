import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Card({ children, className = "", id }: CardProps) {
  return (
    <div
      id={id}
      className={`rounded-lg border border-border/80 bg-card p-6 shadow-[var(--card-shadow)] transition-all duration-300 ease-out hover:border-border hover:shadow-[var(--elevated-shadow)] hover:shadow-primary/5 dark:border-border/70 dark:bg-card/95 dark:hover:shadow-primary/[0.06] ${className}`}
    >
      {children}
    </div>
  );
}
