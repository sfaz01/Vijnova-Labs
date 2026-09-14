"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.ComponentProps<"div"> {
  glowColor?: string;
}

export function SpotlightCard({
  className,
  glowColor = "rgba(59,130,246,0.15)",
  onMouseMove,
  children,
  ...props
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (el) {
          const rect = el.getBoundingClientRect();
          el.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
          el.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
        }
        onMouseMove?.(e);
      }}
      className={cn(
        "group/spotlight relative isolate overflow-hidden",
        className
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover/spotlight:opacity-100"
        style={{
          background: `radial-gradient(400px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), ${glowColor}, transparent 70%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
