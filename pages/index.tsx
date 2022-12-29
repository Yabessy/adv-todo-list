import type { NextPage } from "next"
import Head from "next/head"
import { useState } from "react"
import Motivation from "../components/dashboard/Motivation"
import News from "../components/dashboard/News"
import Overview from "../components/dashboard/Overview"
import Sidebar from "../components/Sidebar"

import Todo from "../models/todoModel"
import connMongoDB from "../utils/mongoDB"

const Home: NextPage = ({ quote,newsResults }: any) => {
  // const todos = JSON.parse(todosProps)
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const sendReq = async (e: any) => {
    e.preventDefault()
    const res = await fetch("/api/todoAPI", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        desc,
      }),
    })
    const data = await res.json()
    console.log(data)
    setTitle("")
    setDesc("")
  }
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full h-screen bg-white">
        <Sidebar />
        <div className="flex-[10] flex flex-col">
          <Overview />
          <Motivation quote={quote}/>
        </div>
        <News newsResults={newsResults}/>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const url = "https://quotes15.p.rapidapi.com/quotes/random/?language_code=en"
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "14d0848f86msh16287bbc1ea9b64p1b2babjsn49650ff65d7c",
      "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
    },
  }
  const res = await fetch(url, options)
  const data = await res.json()

  const newsResults = await fetch(
    `https://saurav.tech/NewsAPI/everything/cnn.json`
  ).then((res) => res.json())

  return {
    props: {
      quote: data,
      newsResults,
    },
  }
}

// export async function getServerSideProps() {
//   try {
//     await connMongoDB()
//     const res = await Todo.find()
//     const todos = JSON.stringify(res)
//     return {
//       props: {
//         todosProps: todos,
//       },
//     }
//   } catch (error: any) {
//     return {
//       props: {
//         todosProps: [],
//       },
//     }
//   }
// }

export default Home
