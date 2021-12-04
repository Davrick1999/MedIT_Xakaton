import React from "react";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { currentUser, logout } = useAuth();

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
        <Link href="/posts">
          <a classNameName="text-blue-500">Список вопросов</a>
        </Link>
        <Link href={currentUser ? "/" : "/auth/login"}>
          <a
            className="text-md no-underline text-blue-500 border-2 border-blue-500 transition ease-linear font-bold py-2 px-4 rounded"
            onClick={() => {
              currentUser ? logout() : "";
            }}
          >
            {currentUser ? currentUser?.email : "Войти"}
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
