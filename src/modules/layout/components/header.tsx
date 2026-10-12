import React from 'react'
// ✅ FIX 1: lucide-react ko hata kar react-icons se pull kiya hai
import { FaPlug } from 'react-icons/fa6' 
import SearchBar from './search-bar'
import UserButton from '@/modules/authentication/components/user-button'
import InviteMember from './invite-members'
import WorkSpace from './workspace'

interface UserProps {
  user: {
    id: string;
    name: string;
    image: string | null;
    email: string;
    createdAt: Date;
    updatedAt: Date;
  } | null; // Added support for null if user session takes time to load
} 

/** Top application header with branding, search, workspace controls, and the user menu. */
const Header = ({ user }: UserProps) => {
  return (
    // ✅ FIX 2: Modern utility wrappers used instead of raw forced row grids
    <header className='flex items-center justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 py-2.5 shadow-sm select-none'>
        
        {/* Left Section: Logo Branding */}
        <div className='flex items-center gap-2 hover:opacity-85 transition-opacity cursor-pointer'>
          <div className='p-1.5 bg-indigo-50 dark:bg-indigo-950/40 rounded-lg flex items-center justify-center'>
            <FaPlug className='h-5 w-5 text-indigo-500 dark:text-indigo-400 rotate-45' />
          </div>
          <span className='font-bold text-lg tracking-tight text-zinc-900 dark:text-zinc-50 hidden sm:block'>
            Postman
          </span>
        </div>

        {/* Center Section: Flexible Search Container */}
        <div className='flex-1 max-w-xl mx-auto'>
          <div className="relative rounded-lg overflow-hidden flex items-center justify-center w-full">
            <SearchBar />
          </div>
        </div>

        {/* Right Section: Action Controls & User Identity */}
        <div className='flex items-center gap-3.5'>
          <div className='flex items-center gap-2 border-r border-zinc-200 dark:border-zinc-800 pr-3.5'>
            <InviteMember />
            <WorkSpace />
          </div>
          <div className='flex items-center justify-center shrink-0'>
            <UserButton user={user} />
          </div>
        </div>

    </header>
  )
}

export default Header
