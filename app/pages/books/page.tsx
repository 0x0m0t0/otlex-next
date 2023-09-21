import Image from "next/image"

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
      <h1 className="text-2xl text-center p-6">0x0s catalog</h1>

      {books?.map((book: any) => {
        return (
          <div
            className="flex flex-col items-center"
            key={book?.id + book?.attributes?.Title}
          >
            <h2 className="text-sm">{book?.attributes?.Title}</h2>

            <div>
              <div key={book?.attributes?.images?.data?.attributes?.name}>
                <Image
                  className="px-8 pb-6"
                  src={
                    book?.attributes?.images?.data?.attributes?.formats?.medium
                      ?.url
                  }
                  alt={book?.attributes?.images?.data?.attributes?.name}
                  width={500}
                  height={500}
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
