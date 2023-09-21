import Link from "next/link"

import { siteConfig } from "@/config/site"
import Accordion from "@/components/ui/accordion"
import { buttonVariants } from "@/components/ui/button"
import { Login } from "@/components/ui/login"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-center gap-2">
        <h1 className="flex flex-col text-4xl text-center font-extrabold leading-tight tracking-tight md:text-4xl">
          Personal library management
          <br />
          <span className="text-xl ">
            with Strapi CMS for complex relations
          </span>
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground text-center">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>

      <Login />

      <Accordion />
    </section>
  )
}
