import { privateLinks } from "@/helpers/path";
import Link from "next/link";
import React from "react";
import * as actions from "@/actions";
import AvatarMat from "./AvatarMat";
import { getSessionUser } from "@/middleware";



const NavBar = async () => {
  const session = await getSessionUser();


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
              <Link href={'/'}>Home</Link>
            </li>
            {session.user && (
              <>
                {privateLinks.map((link) => (
                  <li key={link.name}>
                  <Link href={link.path} className="capitalize">{link.name}</Link>
                </li>
                ))}
              </>
            )}

            <li>
              <Link href={'/about'}>About</Link>
            </li>
            {!session.user && (
              <li>
                <Link href={'/auth'}>Login</Link>
              </li>
            )}

            {session.user && (
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
        {session.user && (
          <>
          <AvatarMat src={session.user.avatar as string} />
          <form action={actions.signOut}>
            <button className="btn btn-ghost">Sign Out</button>
          </form>
          </>

        )}

   
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
