import Image from "next/image"

async function getBooks() {
  const res = await fetch(process.env.apiURI as string, {
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.apiKEY as string,
    },
  })
  const data = await res.json()

  return data?.data as any[]
}

export default async function Book() {
  const books = await getBooks()

  return (
    <>
      <h1 className="text-2xl text-center p-6">0x0s catalog</h1>

      {books?.map((book: any) => {
        return (
          <div
            className="flex flex-col items-center"
            key={book?.id + book?.Name}
          >
            <h2 className="text-sm">{book?.Name}</h2>
            <h3 className="text-sm">{book?.pictures[0]?.Pictures_id?.image}</h3>

            <div>
              <div key={book?.image}>
                <Image
                  className="px-8 pb-6"
                  src={
                    process.env.apiIMG + book?.pictures[0]?.Pictures_id?.image
                  }
                  alt={book?.Name}
                  width={500}
                  height={500}
                />
              </div>
            </div>

            {/* <div>
              {book?.attributes?.categories?.data.map((cat: any) => {
                return (
                  <p key={cat?.attributes?.tags} className="pl-8">
                    {cat?.attributes?.tags}
                  </p>
                )
              })}
            </div> */}
          </div>
        )
      })}
    </>
  )
}
