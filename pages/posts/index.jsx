import React, { useState, useEffect } from "react";
import Head from "next/head";
import { database } from "../../utils/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import Post from "../../components/Post";
import { topDrugs, drugs } from "../index";

function Posts() {
  const [posts, setPosts] = useState([]);
  const postsCollection = collection(database, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollection);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      //   const snapshot = await firestoreDB.collection("posts").get();
      //   setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [postsCollection]);

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Head>
        <title>Posts list</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid lg:grid-cols-4 sm:grid-cols-1 w-full px-4 lg:space-x-2">
        <div className="col-span-3 w-full space-y-4">
          <h5 className="text-2xl py-6">Топ вопросы {`(${posts.length})`}</h5>
          {posts?.map(({ id, title, body, tags }) => (
            <>
              <Post id={id} title={title} body={body} tags={tags} />
            </>
          ))}
        </div>
        <div
          className="border rounded-md space-y-4 divide-y-2 p-2"
          // style={{ background: "#F7F7F7" }}
        >
          <div>
            <p className="text-xl font-medium m-1">Список препаратов</p>
            <div className="flex flex-wrap">
              {drugs.map(({ label, production }, index) => (
                <div
                  key={index}
                  className="flex text-white bg-gray-700 rounded transition duration-150 ease-linear hover:text-gray-700 border hover:border-gray-700 hover:bg-transparent cursor-pointer py-1.5 px-4 m-1"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xl font-medium m-1">Топ препараты</p>
            <div className="flex flex-col flex-wrap m-1">
              {topDrugs.map(({ name, production }, index) => (
                <div
                  key={index}
                  className="flex text-blue-600 cursor-pointer underline my-1"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Posts;
