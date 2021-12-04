import { useState, useEffect } from "react";
import Head from "next/head";
import Table from "../../../components/Table";
import Link from "next/link";
function Posts() {

  return (
    <div className="flex flex-col items-center min-h-screen">
        <Head>
          <title>Doctor main</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <Link href="/doctor/groups/chat">
              <a classNameName="text-blue-500">Chat</a>
            </Link>
            <div className="py-4">
              <div className="text-2xl my-4">Tags:</div>
              <div></div>
            </div>
            <div className="py-4">
              <div className="text-2xl my-4">Groups:</div>
              <Table/>
            </div>
        </main>
    </div>
  );
}

export default Posts;
