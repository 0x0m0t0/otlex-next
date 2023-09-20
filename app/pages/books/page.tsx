"use client"

async function getBooks() {
  try {
    const res = await fetch(process.env.apiURI as string)
    const data = await res.json()
    return data?.data || [] // Return an empty array if data is undefined
  } catch (error) {
    console.error("Error fetching books:", error)
    return [] // Return an empty array in case of an error
  }
}

export default async function Book() {
  const books = await getBooks()

  return (
    <section>
      <h1>0x0s catalog</h1>

      {books.map((book) => (
        <div key={book.id + (book.attributes?.Title || "")}>
          <h2>{book.attributes?.Title || "Unknown Title"}</h2>

          <div>
            <div
              key={
                book.attributes?.images?.data?.attributes?.name || "default-key"
              }
            >
              <img
                className="p-8"
                src={
                  book.attributes?.images?.data?.attributes?.formats?.medium
                    ?.url || "other image"
                }
                alt="Book Image"
              />
            </div>
          </div>

          <div>
            {book.attributes?.categories?.data?.map((cat: any) => (
              <p key={cat?.attributes?.tags || "default-tag"} className="pl-8">
                {cat?.attributes?.tags || "Unknown Category"}
              </p>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
