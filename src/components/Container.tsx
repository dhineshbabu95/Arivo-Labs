import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto box-border w-full max-w-[1280px] min-w-0 px-[var(--site-padding-x)] ${className}`}
    >
      {children}
    </div>
  );
}
