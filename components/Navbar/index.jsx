import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 mb-2 px-6 border-b shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0 inner">
        <Link href="/">
          <a className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">
            MedIT
          </a>
        </Link>
        <br />
        <span className="text-xs text-grey-dark">Online Medical Care</span>
      </div>

      <div className="sm:mb-0 self-center space-x-4">
        <Link href="/clinics">
          <a classNameName="text-blue-500">Clinics</a>
        </Link>
        <Link href="/doctor/groups">
          <a classNameName="text-blue-500">Groups</a>
        </Link>
        <Link href="/doctor">
          <a classNameName="text-blue-500">Doctor</a>
        </Link>
        <Link href="/posts">
          <a classNameName="text-blue-500">Список вопросов</a>
        </Link>
        <Link href="/">
          <a className="text-md no-underline text-blue-500 border-2 border-blue-500 transition ease-linear font-bold py-2 px-4 rounded">
            Войти
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
