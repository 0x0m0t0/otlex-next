import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex w-full gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        {/* <Icons.logo className="h-6 w-6" /> */}
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>

      <div className="flex flex-col items-center w-full h-16 justify-center">
        {items?.length ? (
          <nav className="flex fixed  rounded justify-center items-center gap-2 p-0.5 rounded bg-opacity-60 bg-earth-100 backdrop-blur-7 border border-opacity-25 border-white">
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center text-sm font-medium rounded text-muted-foreground p-1.5",
                      "transition ease-in-out duration-300 delay-150 hover:bg-earth-400 hover:text-earth-900",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                  >
                    {item.title}
                  </Link>
                )
            )}
          </nav>
        ) : null}
      </div>
    </div>
  )
}
