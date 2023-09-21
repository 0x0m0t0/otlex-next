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

      {/* <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div> */}
    </section>
  )
}
