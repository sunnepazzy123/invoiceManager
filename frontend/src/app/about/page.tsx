import React from 'react'

const Page = () => {
  return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src="https://avatars.githubusercontent.com/u/39708757?v=4" className="max-w-sm rounded-[50%] h-[200px] shadow-2xl"  alt="Description of the image" />
    <div>
      <h1 className="text-5xl font-bold">About Us</h1>
      <p className="py-6">
      We are the team behind the Business Invoice Manager, a group of
       dedicated professionals passionate about simplifying financial operations for businesses. 
      Our diverse skills and backgrounds converge to create a
       powerful tool designed to streamline invoicing and financial management.
      </p>

    </div>
  </div>
</div>
  )
}

export default Page