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

const Header = ({ user }: UserProps) => {
  return (
    // ✅ FIX 2: Modern utility wrappers used instead of raw forced row grids
    
<header className="flex  h-[50px]    items-center justify-between gap-5 border-b border-zinc-200 bg-white px-6 shadow-sm select-none dark:border-zinc-800 dark:bg-zinc-950">

  {/* Logo */}
  <div className="flex shrink-0 cursor-pointer items-center gap-3 transition-opacity hover:opacity-85">
    <div className="flex size-8 items-center justify-center rounded-xl bg-indigo-50 dark:bg-indigo-950/40">
      <FaPlug className="size-4 rotate-45 text-indigo-500 dark:text-indigo-400" />
    </div>

    <span className="hidden text-xl font-bold tracking-tight text-zinc-900 sm:block dark:text-zinc-50">
      Postman
    </span>
  </div>

  {/* Search */}
  <div className="mx-auto flex min-w-0 flex-1 justify-center">
    <div className="w-full max-width: 400px">
      <SearchBar />
    </div>
  </div>

  {/* Actions */}
  <div className="flex shrink-0 items-center gap-4">
    <div className="flex items-center gap-3 border-r border-zinc-200 pr-4 dark:border-zinc-800">
      <InviteMember />
      <WorkSpace />
    </div>

    <div className="flex shrink-0 items-center justify-center">
      <UserButton user={user} />
    </div>
  </div>

</header>


  )
}

export default Header
