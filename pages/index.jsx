import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import { seperateTags } from "../functions/seperateTags";
import { database } from "../utils/firebase";
import { collection, getDoc, addDoc, updateDoc, doc } from "firebase/firestore";

export const drugs = [
  {
    name: "Амброксол",
    production: "Phfizer",
  },
  {
    name: "Аспирин",
    production: "Phfizer",
  },
  {
    name: "Бронхипрет",
    production: "Phfizer",
  },
  {
    name: "Доктор Мом",
    production: "Phfizer",
  },
  {
    name: "АЦЦ",
    production: "Phfizer",
  },
  {
    name: "Мукальтин",
    production: "Phfizer",
  },
];

export const topDrugs = [
  {
    name: "Метаболики",
  },
  {
    name: "Иммунотропные препараты",
  },
  {
    name: "Нейротропные средства",
  },
  {
    name: "Сердечно-сосудистные средства",
  },
  {
    name: "Антибиотики",
  },
  {
    name: "Вегетотропные средства",
  },
  {
    name: "Интермедианты",
  },
];

export default function Home() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const postsCollection = collection(database, "posts");

  const handleTitle = (input) => setTitle(input);
  const handleBody = (input) => setBody(input);
  const handleTags = (input) => {
    let tagsArray = seperateTags(input);
    setTags(tagsArray);
  };

  const handleSubmit = async () => {
    await addDoc(postsCollection, { title, body, tags });
    router.push("/posts");
  };
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid grid-cols-4 w-full px-4 space-x-2">
        <div className="col-span-3 w-full space-y-4">
          {/* <div className="flex space-x-1">
            <div
              style={{ height: "200px", width: "160px", position: "relative" }}
            >
              <Image
                className="flex justify-center items-center border-4 border-light-blue-500"
                layout="fill"
                objectFit="cover"
                src="/images/me.jpg"
              />
            </div>

            <div className="text-sm border-gray-300 rounded-md flex flex-col justify-between w-1/3 px-4">
              <div className="flex space-x-2">
                <p className="font-medium w-1/2">И.Ф.О.:</p>
                <p className="">Даврон Сатторов</p>
              </div>
              <div className="flex space-x-2">
                <p className="font-medium w-1/2">Специальность:</p>
                <p>Онколог</p>
              </div>
              <div className="flex space-x-2">
                <p className="font-medium w-1/2">Стаж работы:</p>
                <p>10 лет</p>
              </div>
              <div className="flex space-x-2">
                <p className="font-medium w-1/2">Место работы:</p>
                <p>Юнусабад</p>
              </div>
              <div className="flex space-x-2">
                <p className="font-medium w-1/2">Количество баллов:</p>
                <p>152</p>
              </div>
            </div>
          </div> */}
          <h5 className="text-2xl py-6">Задайте публичный вопрос</h5>
          <Input
            value={title}
            onChange={(e) => handleTitle(e.target.value)}
            label="Заголовок"
            subLabel="Будьте конкретны и представьте, что задаете вопрос другому человеку."
            placeholder="н.п. У меня болит голова каждый раз, когда я поворачиваю голову из стороны в сторону"
          />
          <Textarea
            value={body}
            onChange={(e) => handleBody(e.target.value)}
            label="Основная часть"
            subLabel="Включите всю информацию, которая может понадобиться кому-то, чтобы ответить на ваш вопрос."
            style={{ height: "100px" }}
          />
          <Input
            // value={tags.join(", ")}
            onChange={(e) => handleTags(e.target.value)}
            label="Теги"
            subLabel="Добавьте до 3 тегов, чтобы описать, о чем ваш вопрос."
            placeholder="н.п. (головная боль, боль)"
          />
          <button
            onClick={() => handleSubmit()}
            className="bg-blue-500 hover:bg-blue-600 transition ease-linear text-white font-medium py-2 px-4 rounded"
          >
            Разместить вопрос
          </button>
        </div>
        <div>
          <div
            className="border rounded-md space-y-4 divide-y-2 p-2"
            // style={{ background: "#F7F7F7" }}
          >
            <div>
              <p className="text-xl font-medium m-1">Список препаратов</p>
              <div className="flex flex-wrap">
                {drugs.map(({ name, production }, index) => (
                  <div
                    key={index}
                    className="flex text-white bg-gray-700 rounded transition duration-150 ease-linear hover:text-gray-700 border hover:border-gray-700 hover:bg-transparent cursor-pointer py-1.5 px-4 m-1"
                  >
                    {name}
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
        </div>
      </main>

      {/* <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer> */}
    </div>
  );
}
