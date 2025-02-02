import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Business Invoice Manager</h1>
          <p className="py-6">
          The Business Invoice Manager app is a comprehensive solution designed to 
          streamline and simplify the invoicing process for businesses 
          of all sizes. This user-friendly application 
          offers a range of features to help users efficiently 
          manage their invoicing needs, from creating and customizing 
          invoices to tracking payments and generating financial reports
          </p>
          <button className="btn btn-primary">Get Started</button>
          <p className="text-gray-400 py-2">Powered by WireDevTeam</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
