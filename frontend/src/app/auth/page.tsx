
import React from 'react'
import Login from './Login'
import { getSessionUser } from '@/middleware'
import { redirect } from 'next/navigation'


const Auth = async () => {
  const session  = await getSessionUser()

  if(session.isAuthenticated) {
    redirect('/')
  }

  return (
    <Login />
  )
}

export default Auth