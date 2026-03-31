import { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-28 lg:py-36 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
