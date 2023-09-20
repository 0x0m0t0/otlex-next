"use client"

import React, { useEffect, useState } from "react"

async function getBooks() {
  const res = await fetch(process.env.apiURI as string)
  const data = await res.json()
  return data?.data as any[]
}

const Book = () => {
  const [books, setBooks] = useState<any[]>([])

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const fetchedBooks = await getBooks()
        setBooks(fetchedBooks)
      } catch (error) {
        console.error("Error fetching books:", error)
      }
    }

    fetchBooks()
  }, [])

  return (
    <section>
      <h1>0x0s catalog</h1>

      {books?.map((book: any) => {
        const title = book?.attributes?.Title || ""
        const imageUrl =
          book?.attributes?.images?.data?.attributes?.formats?.medium?.url || ""

        return (
          <div key={book?.id + title}>
            <h2>{title}</h2>

            <div>
              <div key={book?.attributes?.images?.data?.attributes?.name}>
                <img className="p-8" src={imageUrl} alt={title} />
              </div>
            </div>

            <div>
              {book?.attributes?.categories?.data.map(
                (cat: any, index: number) => {
                  const tags = cat?.attributes?.tags || ""
                  return (
                    <p key={index} className="pl-8">
                      {tags}
                    </p>
                  )
                }
              )}
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Book
