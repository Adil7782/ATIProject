
import Guest from '@/components/guest'
import { useRouter } from 'next/router'
import { currentUser } from '@clerk/nextjs/server'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const HomePage = async () => {

  const user = await currentUser()
  if(!user)
  {
    return <Guest/>
  }
  // Show guest UI if the user is not authenticated
  if (!user) {
    return <Guest />
  }

  // Fallback UI (rarely shown since redirect happens immediately)
  return (
    <div className="flex flex-col items-center pt-16 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">Welcome</h1>
      <h1 className="text-lg">{user.firstName}</h1>
      <Link href="/dashboard">
        <h1 className="text-blue-500">Go to Dashboard</h1>
      </Link>
    </div>
  )
}

export default HomePage
