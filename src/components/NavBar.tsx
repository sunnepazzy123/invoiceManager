import { paths } from "@/helpers/path";
import Link from "next/link";
import React from "react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import { ISession } from "@/interfaces";
import AvatarMat from "./AvatarMat";



const NavBar = async () => {
  const session = (await auth()) as ISession;

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={paths.homePage()}>Home</Link>
            </li>
            {session?.user && (
              <>
                <li>
                  <Link href={paths.profilePage()}>Profile</Link>
                </li>
                <li>
                  <Link href={paths.agreementPage()}>Agreement</Link>
                </li>
                <li>
                  <Link href={paths.contractPage()}>Contracts</Link>
                </li>
                <li>
                  <Link href={paths.companyPage()}>Company</Link>
                </li>
                <li>
                  <Link href={paths.printInvoicePage()}>Print Invoice</Link>
                </li>
              </>
            )}

            <li>
              <Link href={paths.aboutPage()}>About</Link>
            </li>
            {!session?.user && (
              <li>
                <Link href={paths.loginPage()}>Login</Link>
              </li>
            )}

            {session?.user && (
              <li>
                <form action={actions.signOut} className="">
                  <button type="submit" className="">Sign Out</button>
                </form>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="navbar-end">
        {session?.user && (
          <>
          <AvatarMat src={session.user.image} />
          <form action={actions.signOut}>
            <button className="btn btn-ghost">Sign Out</button>
          </form>
          </>

        )}

        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
