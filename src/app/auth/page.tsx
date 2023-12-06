import React from 'react'
import * as actions from '@/actions'
import { auth } from '@/auth'
import { ISession } from '@/interfaces'
import { redirect } from 'next/navigation'
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

const Auth = async () => {
    const session = await auth() as ISession
    if(session?.user) {
      redirect('/')
    }
  return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" action={actions.signIn}>
        <div className="form-control mt-6 gap-2">
          <button className="btn bg-black text-white hover:bg-[#2e1616]" type='submit'>
            <GitHubIcon /> Login with GitHub
            </button>
            <button className="btn bg-[#e73939] text-white hover:bg-[#c85656]" type='submit'>
            <GoogleIcon /> Login with Google
            </button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default Auth