"use client"

import React, { useState } from "react"

const AccordionItem = ({
  title,
  content,
}: {
  title: string
  content: string
}) => {
  const [isActive, setIsActive] = useState(false)

  const toggleAccordion = () => {
    setIsActive((prevIsActive) => !prevIsActive)
  }

  return (
    <div className="cursor-pointer group bg-primary-background text-foreground">
      <button
        onClick={toggleAccordion}
        className="flex items-center justify-between w-full p-4 text-left select-none group-hover:underline"
      >
        <span>{title}</span>
        <svg
          className={`w-4 h-4 duration-200 ease-out ${
            isActive ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      {isActive && <div className="p-4 pt-0 opacity-70">{content}</div>}
    </div>
  )
}

const Accordion = () => {
  return (
    <div className="relative w-full mx-auto overflow-hidden text-sm font-normal bg-white border border-gray-200 divide-y divide-gray-200 rounded-md">
      <AccordionItem
        title="What is Pines?"
        content="Pines is a UI library built for AlpineJS and TailwindCSS."
      />
      <AccordionItem
        title="How do I install Pines?"
        content="Add AlpineJS and TailwindCSS to your page and then copy and paste any of these elements into your project."
      />
      <AccordionItem
        title="Can I use Pines with other libraries or frameworks?"
        content="Absolutely! Pines works with any other library or framework. Pines works especially well with the TALL stack."
      />
    </div>
  )
}

export default Accordion
