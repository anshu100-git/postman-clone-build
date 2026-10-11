"use client"

import React from 'react'
import { Button } from '@base-ui/react'
import { signIn } from '@/lib/auth-client'
import Link from 'next/link'

// Installing react-icons ensures you have valid official brand logos
import { FaGithub, FaGoogle } from 'react-icons/fa' 

const SignInPage = () => {
  return (
    <section className='flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4 py-16 md:py-32'>
      <div className='w-full max-w-sm rounded-xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900'>
        
        {/* Header Section */}
        <div className='text-center md:text-left mb-6'>
          <Link href="/">
            <h1 className='text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50'>
              Postman
            </h1>
          </Link>
          <h2 className='mb-1 mt-4 text-xl font-semibold text-zinc-900 dark:text-zinc-50'>
            Sign in to PostMan
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Welcome back! Sign in to continue
          </p>
        </div>

        {/* Buttons Action Container */}
        <div className='flex flex-col gap-3 mt-6'>
          
          {/* GitHub Action Button */}
          <Button 
            className='flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700'
            onClick={() => signIn.social({
              provider: 'github',
              callbackURL: "/"
            })}
          >
            <FaGithub className='h-4 w-4 shrink-0' />
            <span>Sign in with GitHub</span>
          </Button>

          {/* Google Action Button */}
          <Button 
            className='flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-500/20 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700'
            onClick={() => signIn.social({
              provider: 'google',
              callbackURL: "/"
            })}
          >
            <FaGoogle className='h-4 w-4 shrink-0 text-red-500 dark:text-red-400' />
            <span>Sign in with Google</span>
          </Button>

        </div>
      </div>
    </section>
  )
}

export default SignInPage
