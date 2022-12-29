import type { NextPage } from "next"
import Head from "next/head"
import { useState } from "react"

import Todo from "../models/todoModel"
import connMongoDB from "../utils/mongoDB"

const Home: NextPage = ({ todosProps }: any) => {
  const todos = JSON.parse(todosProps)
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
      <form onSubmit={(e) => sendReq(e)}>
        <input
          type="text"
          placeholder="todo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button type="submit">send</button>
      </form>
      <div>
        {todos &&
          todos.map((todo: any) => (
            <div key={todo._id} className='flex flex-col m-2 p-2'>
              <h1 className="font-bold">title {todo.title}</h1>
              <p className="underline">desc {todo.desc}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    await connMongoDB()
    const res = await Todo.find()
    const todos = JSON.stringify(res)
    return {
      props: {
        todosProps: todos,
      },
    }
  } catch (error: any) {
    return {
      props: {
        todosProps: [],
      },
    }
  }
}

export default Home
