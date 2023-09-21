import * as React from "react"
import Link from "next/link"

import { Button, buttonVariants } from "./button"

export const Login = () => {
  return (
    <form className="flex flex-col items-center border  rounded p-4 w-80 place-self-center bg-opacity-25">
      <h2 className="text-2xl">Login</h2>
      <div className="flex flex-col justify-center items-center">
        <label>Username</label>
        <input className="rounded  bg-earth-200   border" type="text" />
      </div>
      <div className="flex flex-col p-2 justify-center items-center">
        <label>Password</label>
        <input className="rounded bg-earth-200  border " type="text" />
      </div>

      <Button
        className="mt-4 hover:bg-earth-200 hover:text-earth-900 hover:border "
        asChild
      >
        <Link href="/pages/books">Login</Link>
      </Button>
    </form>
  )
}
