import { useState, useEffect } from "react";
import Head from "next/head";
import Table from "../../components/Table";
import Navbar from "../../components/Navbar";
import { database } from "../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import Select from "react-select"


function Posts() {

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <div className="flex flex-col items-center min-h-screen">
        <Head>
          <title>Doctor main</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <div className="py-4">
              <div className="text-2xl my-4">Your tags:</div>
              <Select options={options} isMulti/>
            </div>
            <div className="py-4">
              <div className="text-2xl my-4">Groups:</div>
              <Table/>
            </div>
            <div className="py-4">
              <div className="text-2xl my-4">Questions:</div>
              <Table/>
            </div>
        </main>
    </div>
  );
}

export default Posts;
