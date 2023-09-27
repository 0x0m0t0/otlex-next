import React from "react"

import { Login } from "@/components/ui/login"

const pageLogin = () => {
  // it's actually register – needs more refinement
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <Login />
    </section>
  )
}

export default pageLogin
