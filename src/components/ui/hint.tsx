"use client";

import * as React from "react";
// ✅ Base UI framework standard setup components
import { Tooltip } from "@base-ui/react";

export interface HintProps {
  label: string;
  children: React.ReactNode;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
  sideOffset?: number;
  alignOffset?: number;
}

export const Hint = ({
  label,
  children,
  side = "top",
  align = "center",
  sideOffset = 4,
  alignOffset = 0,
}: HintProps) => {
  return (
    <Tooltip.Provider delay={100}>
      <Tooltip.Root>
        
        {/* ✅ FIX: Base UI direct composition architecture standard apply kiya hai */}
        <Tooltip.Trigger render={React.isValidElement(children) ? children : <span>{children}</span>} />

        {/* Base UI requires Positioner to be inside a Portal */}
        <Tooltip.Portal>
          <Tooltip.Positioner
            side={side}
            align={align}
            sideOffset={sideOffset}
            alignOffset={alignOffset}
          >
            <Tooltip.Popup
              className="bg-zinc-950 text-zinc-50 border border-zinc-800 text-xs px-2.5 py-1.5 rounded-lg shadow-md select-none z-50 font-medium tracking-tight animate-in fade-in-50"
            >
              <p className="capitalize">{label}</p>
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>

      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default Hint;
