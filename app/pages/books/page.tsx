async function getBooks() {
  const res = await fetch(process.env.apiURI as string, {
    headers: {
      "Content-Type": "application/json",
    },
  })
  const data = await res.json()
  return data?.data as any[]
}

export default async function Book() {
  const books = await getBooks()

  return (
    <section>
      <h1>0x0s catalog</h1>

      {books?.map((book: any) => {
        return (
          <div key={book?.id + book?.attributes?.Title}>
            <h2>{book?.attributes?.Title}</h2>

            <div>
              <div key={book?.attributes?.images?.data?.attributes?.name}>
                <img
                  className="p-8"
                  src={
                    book?.attributes?.images?.data?.attributes?.formats?.medium
                      ?.url
                  }
                />
              </div>
            </div>

            <div>
              {book?.attributes?.categories?.data.map((cat: any) => {
                return (
                  <p key={cat?.attributes?.tags} className="pl-8">
                    {cat?.attributes?.tags}
                  </p>
                )
              })}
            </div>
          </div>
        )
      })}
    </section>
  )
}
