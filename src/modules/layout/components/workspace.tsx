"use client";

import React from 'react'
import { Button } from '@/components/ui/button'
import { Hint } from '@/components/ui/hint'
// ✅ FIX 1: lucide-react ko hata kar react-icons/hi2 use kiya hai
import { HiBriefcase } from 'react-icons/hi2' 

/** Header button for switching the active workspace, shown with a tooltip hint. */
const WorkSpace = () => {
  return (
   <Hint label='Change Workspace'>
      <Button
        variant="outline"
        // ✅ FIX 2: Dynamic theme styling handles aur compact padded text flex lagaya hai
        className='h-9 rounded-lg border border-indigo-200 bg-indigo-50/50 px-3 py-1.5 text-indigo-600 shadow-sm transition-all hover:bg-indigo-100/70 hover:text-indigo-700 active:scale-95 dark:border-indigo-900/50 dark:bg-indigo-950/20 dark:text-indigo-400 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-300 flex items-center gap-1.5 font-medium select-none'
      >
          <HiBriefcase className='h-4 w-4 shrink-0' />
          <span className='text-sm tracking-tight'>Personal Workspace</span>
      </Button>
   </Hint>
  )
}

export default WorkSpace
