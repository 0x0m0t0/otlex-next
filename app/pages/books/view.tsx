"use client"

import React, { useEffect, useState } from "react"

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
  const local = () => {
    console.log("this the local")
    setView(!view)
    localStorage.setItem("view", (!view).toString())
  }

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

  return (
    <>
      <button onClick={toggle}>List</button>

      {books?.map((book, i) =>
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
