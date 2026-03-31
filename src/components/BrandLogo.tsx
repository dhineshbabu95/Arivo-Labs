import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoVariant = "icon" | "horizontal";
type BrandLogoTheme = "light" | "dark" | "auto";
type BrandLogoSize = "sm" | "md" | "lg";

type BrandLogoProps = {
  variant?: BrandLogoVariant;
  theme?: BrandLogoTheme;
  size?: BrandLogoSize;
  priority?: boolean;
  className?: string;
};

const ICON_SRC = {
  light: "/brand/arivo-labs-icon-light.svg",
  dark: "/brand/arivo-labs-icon-dark.svg",
} as const;

/** Light UI → dark logo asset; dark UI → light logo asset (matches favicon metadata). */
function logoSrcForUiTheme(
  source: typeof ICON_SRC | typeof HORIZONTAL_SRC,
  uiTheme: "light" | "dark"
) {
  return uiTheme === "light" ? source.dark : source.light;
}

const HORIZONTAL_SRC = {
  light: "/brand/arivo-labs-horizontal-light.svg",
  dark: "/brand/arivo-labs-horizontal-dark.svg",
} as const;

const SIZE = {
  icon: {
    sm: { width: 24, height: 24 },
    md: { width: 28, height: 28 },
    lg: { width: 34, height: 34 },
  },
  horizontal: {
    sm: { width: 128, height: 28 },
    md: { width: 154, height: 34 },
    lg: { width: 176, height: 39 },
  },
} as const;

export function BrandLogo({
  variant = "horizontal",
  theme = "auto",
  size = "md",
  priority = false,
  className,
}: BrandLogoProps) {
  const dims = SIZE[variant][size];
  const source = variant === "icon" ? ICON_SRC : HORIZONTAL_SRC;

  if (theme !== "auto") {
    return (
      <Image
        src={logoSrcForUiTheme(source, theme)}
        alt="Arivo Labs"
        width={dims.width}
        height={dims.height}
        priority={priority}
        className={cn("h-auto w-auto", className)}
      />
    );
  }

  return (
    <span className={cn("inline-flex items-center", className)}>
      <Image
        src={logoSrcForUiTheme(source, "light")}
        alt="Arivo Labs"
        width={dims.width}
        height={dims.height}
        priority={priority}
        className="h-auto w-auto dark:hidden"
      />
      <Image
        src={logoSrcForUiTheme(source, "dark")}
        alt="Arivo Labs"
        width={dims.width}
        height={dims.height}
        priority={priority}
        className="hidden h-auto w-auto dark:block"
      />
    </span>
  );
}
