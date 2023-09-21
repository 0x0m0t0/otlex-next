import * as React from "react"
import Link from "next/link"

import { Button, buttonVariants } from "./button"

export const Login = () => {
  return (
    <form className="flex flex-col items-center">
      <div className="flex flex-col justify-center items-center">
        <label>Username</label>
        <input className="rounded" type="text" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <label>Password</label>
        <input className="rounded" type="text" />
      </div>

      <Button className="mt-4" asChild>
        <Link href="/pages/books">Login</Link>
      </Button>
    </form>
  )
}
