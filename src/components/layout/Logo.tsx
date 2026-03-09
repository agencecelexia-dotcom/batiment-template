import Link from "next/link";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

interface LogoProps {
  light?: boolean;
  className?: string;
}

export default function Logo({ light = false, className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2.5 group", className)}>
      <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* House / building icon with chimney */}
          <rect x="4" y="4" width="28" height="28" rx="8" fill={light ? "oklch(0.22 0.06 30)" : "oklch(0.22 0.06 30)"} opacity="0.12" />
          {/* Roof */}
          <path
            d="M18 8L8 17h3v9h14v-9h3L18 8z"
            fill={light ? "oklch(0.64 0.14 30)" : "oklch(0.22 0.06 30)"}
          />
          {/* Door */}
          <rect
            x="15.5"
            y="20"
            width="5"
            height="6"
            rx="0.5"
            fill={light ? "white" : "oklch(0.64 0.14 30)"}
          />
          {/* Window */}
          <rect
            x="12"
            y="17"
            width="3"
            height="3"
            rx="0.5"
            fill={light ? "white" : "oklch(0.64 0.14 30)"}
          />
          {/* Chimney */}
          <rect
            x="22"
            y="10"
            width="3"
            height="5"
            rx="0.5"
            fill={light ? "oklch(0.50 0.10 30)" : "oklch(0.40 0.08 30)"}
          />
        </svg>
      </div>
      <div>
        <p
          className={cn(
            "font-heading text-lg font-bold leading-none",
            light ? "text-white" : "text-primary-900"
          )}
        >
          {siteConfig.name.split(" ")[0]}
        </p>
        <p
          className={cn(
            "text-xs font-semibold tracking-widest uppercase",
            light ? "text-accent-300" : "text-accent-600"
          )}
        >
          {siteConfig.name.split(" ").slice(1).join(" ")}
        </p>
      </div>
    </Link>
  );
}
