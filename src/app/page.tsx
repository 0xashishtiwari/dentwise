import { Button } from '@/components/ui/button'
import { SignedIn, SignedOut, SignIn, SignInButton, SignOutButton, SignUpButton } from '@clerk/nextjs'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <SignedOut>
        <SignUpButton mode="modal">Sign up</SignUpButton>
      </SignedOut>
      
      <SignedIn>
        <SignOutButton>Sign out</SignOutButton>
      </SignedIn>

    </div>
  )
}

export default page