"use client"

import React, { useEffect, useState } from "react"
import { inPlaceSort, sort } from "fast-sort"

import ImageView from "./imageView"
import ListView from "./listView"
import { BookPicture, Books, Pictures } from "./page"

interface Props {
  books: Books[]
}

const View: React.FC<Props> = ({ books }) => {
  const [view, setView] = useState<boolean>()
  const [sorted, setSorted] = useState<Books[]>([])
  const [clicked, setClicked] = useState<boolean>()

  const toggle = () => {
    console.log("this is the toggle")
    setView((prevIsClicked) => !prevIsClicked)
    localStorage.setItem("view", (!view).toString())
  }

  const sorting = (sorterClick: any, clicked) => {
    if (clicked === true) {
      const sorted = sort(books).asc((book) => book[sorterClick])
      setSorted(sorted)
    } else {
      const sorted = sort(books).desc((book) => book[sorterClick])
      setSorted(sorted)
    }
  }

  const handleClick = (e: any) => {
    const clickedValue = e.target.getAttribute("data-value")
    setClicked(!clicked)
    console.log("Clicked value:", clickedValue)

    sorting(clickedValue, clicked)
  }

  console.log(books)

  useEffect(() => {
    setClicked(false)
    setSorted(sort(books).asc((book) => book?.Name))
    if (localStorage.getItem("view") === undefined) {
      setView(false)
    } else {
      if (localStorage.getItem("view") === "true") {
        setView(true)
      } else {
        setView(false)
      }
    }
  }, [])

  return (
    <>
      <button onClick={toggle}>List</button>
      <div className="flex p-2 items-center justify-between border m-1">
        <p>i</p>
        <p data-value="Name" onClick={handleClick} className="text-sm w-1/4">
          Title
        </p>
        <p data-value="Authors" onClick={handleClick} className="text-sm w-1/4">
          Author
        </p>
        <p data-value="Year" onClick={handleClick} className="text-sm w-1/4">
          Year
        </p>
      </div>
      {sorted?.map((book, i) =>
        view != undefined ? (
          view === true ? (
            <ListView key={book?.id + book?.date_created} book={book} i={i} />
          ) : (
            <ImageView key={book?.id + book?.date_created} book={book} i={i} />
          )
        ) : (
          <></>
        )
      )}
    </>
  )
}

export default View
