import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-none px-[var(--site-padding-x)] ${className}`}
    >
      {children}
    </div>
  );
}
