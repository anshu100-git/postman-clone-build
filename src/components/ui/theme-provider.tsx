"use client"

import * as React from "react"
// ✅ Import ThemeProviderProps from next-themes directly
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes"

/**
 * Provides theme settings to child components through next-themes.
 *
 * @param props - Children and theme configuration forwarded to next-themes.
 * @returns The configured theme provider wrapping its children.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
