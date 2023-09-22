"use client"

import React, { useState } from "react"
import Link from "next/link"

import { Button, buttonVariants } from "./button"

const strapiForm = {
  username: "",
  email: "",
  password: "",
}

export const Login = () => {
  const [login, setLogin] = useState(strapiForm)

  const handler = (e: any) => {
    e.preventDefault()

    if (login.username === "" || login.email === "" || login.password === "") {
      alert("Please fill in all fields")
    } else {
      alert(`Welcome ${login.username}`)
      setLogin(strapiForm)
      createUser()
    }
  }

  const inputChange = (e: any) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    })
  }

  const createUser = async () => {
    console.log(login)
    const response = await fetch(process.env.apiEndpoint as string, {
      method: "POST",
      body: JSON.stringify(login),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })

    // Handle response if necessary
    const data = await response.json()
    console.log(data)
  }

  return (
    <form
      className="flex flex-col items-center border  rounded p-4 w-80 place-self-center bg-opacity-25"
      onSubmit={handler}
    >
      <h2 className="text-2xl text-earth-600">Login</h2>
      <div className="flex flex-col justify-center items-center">
        <label>Username</label>
        <input
          className="rounded  bg-earth-200 text-earth-900 p-1  border"
          type="text"
          placeholder="Username"
          name="username"
          required
          onChange={inputChange}
          value={login.username}
        />
      </div>
      <div className="flex flex-col p-2 justify-center items-center">
        <label>Email</label>
        <input
          className="rounded bg-earth-200 p-1 border text-earth-900"
          type="email"
          placeholder="Email address"
          name="email"
          required
          onChange={inputChange}
          value={login.email}
        />
      </div>
      <div className="flex flex-col p-2 justify-center items-center">
        <label>Password</label>
        <input
          className="rounded bg-earth-200 p-1 text-earth-900 border "
          type="password"
          placeholder="Password"
          name="password"
          required
          onChange={inputChange}
          value={login.password}
        />
      </div>

      <Button
        type="submit"
        value="Register"
        className="mt-4 hover:bg-earth-200 hover:text-earth-900 hover:border "
        // asChild
        // onClick={() => alert("hllo")}
      >
        <p>click</p>
        {/* <Link href="/pages/books">Login</Link> */}
      </Button>
    </form>
  )
}
