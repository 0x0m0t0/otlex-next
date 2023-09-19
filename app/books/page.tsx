async function getBooks() {
  //   const res = await fetch("http://localhost:1337/api/books?populate=*")
  //   const data = await res.json()
  //   return data?.data as any[]
}

export default async function Book() {
  const books = await getBooks()

  return (
    <section>
      <h1>0x0s catalog</h1>
      {/* 
      {books?.map((book) => {
        return (
          <div key={book?.id + book?.attributes.Title}>
            <h2>{book?.attributes.Title}</h2>
            <div>
              {book?.attributes?.categories?.data.map((cat: any) => {
                return (
                  <p key={cat?.attributes.tags} className="pl-8">
                    {cat?.attributes?.tags}
                  </p>
                )
              })}
            </div>
          </div>
        )
      })} */}
    </section>
  )
}
