"use client"

import React, { useState } from "react"

import ImageView from "./imageView"
import ListView from "./listView"
import { BookPicture, Books, Pictures } from "./page"

interface Props {
  books: Books[]
}

const View: React.FC<Props> = ({ books }) => {
  const [view, setView] = useState<boolean>(false)
  console.log(view)
  console.log(books)
  return (
    <>
      <button onClick={() => setView(true)}>List</button>
      <p>hello {view.toString()}</p>

      {books?.map((book, i) =>
        view ? (
          <ListView key={book?.id + book?.date_created} book={book} i={i} />
        ) : (
          <ImageView key={book?.id + book?.date_created} book={book} i={i} />
        )
      )}
    </>
  )
}

export default View
