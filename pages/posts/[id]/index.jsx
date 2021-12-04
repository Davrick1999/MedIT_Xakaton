import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { collection, getDoc, addDoc, updateDoc, doc } from "firebase/firestore";
import { database } from "../../../utils/firebase";
import Textarea from "../../../components/Textarea";
import dateTimeConvert from "../../../functions/dateTimeConvert";

function App() {
  const router = useRouter();
  const { id } = router.query;

  const [isGettingData, setIsGettingData] = useState(false);
  const [postData, setPostData] = useState({
    title: "",
    body: "",
    tags: [],
    date: "",
  });

  useEffect(() => {
    if (id) {
      getProperty(id);
      console.log(dateTimeConvert(postData.date.seconds), "date");
    }
  }, []);

  const getProperty = (id) => {
    setIsGettingData(true);
    const docRef = doc(database, "posts", id);

    getDoc(docRef)
      .then((doc) => {
        const { title, body, tags, date } = doc.data();
        setPostData({
          title,
          body,
          tags,
          date,
        });
      })
      .then(() => setIsGettingData(false));
  };

  return !isGettingData ? (
    <div className="flex flex-col items-center min-h-screen">
      <Head>
        <title>Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid grid-cols-4 w-full px-6 space-x-2">
        <div className="col-span-3 w-full space-y-4">
          <h5 className="text-2xl pt-6">{postData.title}</h5>
          <div className="flex justify-between w-full border-b pb-4">
            <div className="flex space-x-2 ">
              {postData.tags?.map((tag, index) => (
                <div
                  key={index}
                  className={`flex 
               text-sm text-blue-600 
               bg-blue-100 rounded 
               transition duration-150 ease-linear 
               hover:text-blue-700 border 
               border-blue-400 hover:bg-transparent 
               cursor-pointer py-1 px-2`}
                >
                  {tag}
                </div>
              ))}
            </div>
            <div className="text-sm font-light text-blue-600">
              {dateTimeConvert(postData.date.seconds)}
            </div>
          </div>
          <div className="font-light w-4/5">{postData.body}</div>
          <Textarea
            label="Ответить на вопрос"
            hasSubLabel={false}
            style={{ height: "200px" }}
          />
          <button
            // onClick={() => handleSubmit()}
            className="bg-blue-500 hover:bg-blue-600 transition ease-linear text-white font-medium py-2 px-4 rounded"
          >
            Разместить ответ
          </button>
        </div>
      </main>
    </div>
  ) : (
    ""
  );
}

export default App;
