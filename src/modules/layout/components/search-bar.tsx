"use client"

import React, { useState, useEffect } from 'react'
// ✅ FIX 1: lucide-react ko hata kar react-icons/io5 use kiya hai
import { IoSearchOutline } from 'react-icons/io5'
import {
    CommandDialog,
    CommandEmpty,
    CommandInput,
    CommandList,
} from "@/components/ui/command"

const SearchBar = () => {
    const [open, setOpen] = useState(false)

    // Handle keyboard shortcut
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    return (
        <>
            {/* ✅ FIX 2: Search Button ki layout, heights aur border colors ko optimize kiya hai */}
            <button
                onClick={() => setOpen(true)}
                className="group flex w-full max-w-sm cursor-text items-center justify-between rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-zinc-500 transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200 outline-none select-none"
            >
                <span className="inline-flex items-center gap-2">
                    <IoSearchOutline className="h-4 w-4 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors" />
                    <span className="text-sm font-medium tracking-tight">Search settings...</span>
                </span>
                <span className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border border-zinc-200 bg-white px-1.5 font-mono text-[10px] font-medium text-zinc-400 shadow-sm sm:flex dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-500">
                    <span className="text-xs">⌘</span>K
                </span>
            </button>

            {/* ✅ FIX 3: CommandDialog layout aur custom panels ko clean structure diya hai */}
            <CommandDialog open={open} onOpenChange={setOpen}>
                <div className="flex flex-col overflow-hidden bg-white dark:bg-zinc-950">
                    <CommandInput
                        placeholder="Type a command or search..."
                        className="h-11 border-none focus:ring-0 text-sm placeholder:text-zinc-400 text-zinc-900 dark:text-zinc-50"
                    />
                    <CommandList className="border-t border-zinc-100 dark:border-zinc-900 max-h-[300px]">
                        <CommandEmpty className="text-sm text-zinc-500 py-6 text-center select-none">
                            No results found.
                        </CommandEmpty>
                    </CommandList>

                    {/* Bottom navigation hints panel */}
                    <div className="flex items-center justify-between px-4 py-2.5 border-t border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/30 select-none">
                        <div className="flex items-center space-x-4 text-[11px] text-zinc-400">
                            <div className="flex items-center space-x-1.5">
                                <kbd className="px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded border border-zinc-200 dark:border-zinc-700 font-sans shadow-sm">↑</kbd>
                                <kbd className="px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded border border-zinc-200 dark:border-zinc-700 font-sans shadow-sm">↓</kbd>
                                <span>to navigate</span>
                            </div>
                            <div className="flex items-center space-x-1.5">
                                <kbd className="px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded border border-zinc-200 dark:border-zinc-700 font-sans shadow-sm">↵</kbd>
                                <span>to select</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-1.5 text-[11px] text-zinc-400">
                            <kbd className="px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 rounded border border-zinc-200 dark:border-zinc-700 font-sans shadow-sm">ESC</kbd>
                            <span>to close</span>
                        </div>
                    </div>
                </div>
            </CommandDialog>
        </>
    )
}

export default SearchBar
