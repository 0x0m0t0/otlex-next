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

  const toggle = () => {
    console.log("this is the toggle")
    setView((prevIsClicked) => !prevIsClicked)
    localStorage.setItem("view", (!view).toString())
  }
  //   sort(books).asc()
  console.log(books)

  useEffect(() => {
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

  const sorted = sort(books).asc((book) => book?.Name)

  return (
    <>
      <button onClick={toggle}>List</button>

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
