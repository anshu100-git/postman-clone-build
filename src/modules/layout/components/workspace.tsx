"use client";

import React from 'react'
// ✅ FIX 1: lucide-react ko hata kar react-icons/hi2 use kiya hai
import { HiBriefcase } from 'react-icons/hi2' 

const WorkSpace = () => {
  return (
      <span
        // ✅ FIX 2: Dynamic theme styling handles aur compact padded text flex lagaya hai
        className='h-9 rounded-lg border border-indigo-200 bg-indigo-50/50 px-3 py-1.5 text-indigo-600 shadow-sm dark:border-indigo-900/50 dark:bg-indigo-950/20 dark:text-indigo-400 flex items-center gap-1.5 font-medium select-none'
      >
          <HiBriefcase className='h-4 w-4 shrink-0' />
          <span className='text-sm tracking-tight'>Personal Workspace</span>
      </span>
  )
}

export default WorkSpace
