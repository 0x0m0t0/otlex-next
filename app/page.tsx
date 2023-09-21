import Link from "next/link"

import { siteConfig } from "@/config/site"
import Accordion from "@/components/ui/accordion"
import { buttonVariants } from "@/components/ui/button"
import { Login } from "@/components/ui/login"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <Login />

      <Accordion />
    </section>
  )
}
