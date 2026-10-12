"use client";

import React from 'react'
import { Button } from '@/components/ui/button';
import { Hint } from '@/components/ui/hint';
// ✅ FIX 1: lucide-react ko hata kar react-icons/hi2 ka use kiya hai
import { HiUserPlus } from 'react-icons/hi2'; 

const InviteMember = () => {
  return (
    <Hint label='Invite Member'>
      <Button
        aria-label="Invite Member"
        disabled
        variant="outline"
        // ✅ FIX 2: Modern responsive active states aur emerald light/dark color tokens use kiye hain
        className='h-9 w-9 rounded-lg border border-emerald-200 bg-emerald-50/50 p-0 text-emerald-600 shadow-sm transition-all hover:bg-emerald-100/70 hover:text-emerald-700 active:scale-95 dark:border-emerald-900/50 dark:bg-emerald-950/20 dark:text-emerald-400 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-300'
      >
        <HiUserPlus className='h-4 w-4 shrink-0' />
      </Button>
    </Hint>
  )
}

export default InviteMember
