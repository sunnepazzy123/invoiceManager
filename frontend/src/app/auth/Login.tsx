"use client"
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import Okta from './Okta'


const Login = () => {

  const handleLogin = (provider: string) => {
    window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/${provider}`;
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control mt-6 gap-2">
              <button className="btn bg-black text-white hover:bg-[#2e1616]" onClick={() => handleLogin('github')}>
                <GitHubIcon /> Login with GitHub
              </button>
              <button className="btn bg-[#e73939] text-white hover:bg-[#c85656]" onClick={() => handleLogin('google')}>
                <GoogleIcon /> Login with Google
              </button>
            </div>
          </div>
          <Okta />
        </div>
      </div>
    </div>
  )
}

export default Login