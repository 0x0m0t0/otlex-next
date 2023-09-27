import View from "./view"

export interface Pictures {
  image: string
}

export interface BookPicture {
  picture: string
  Pictures_id?: Pictures
}

export interface Books {
  id: number
  Name: string
  pictures: BookPicture[]
  image: string
  Year: number
  date_created: string
}

async function getBooks() {
  const res = await fetch(process.env.apiURI as string, {
    cache: "no-store",
    // next: {
    //   revalidate: 10,
    // },
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.apiKEY as string,
    },
  })
  const data = await res.json()

  return data?.data as any[]
}

export default async function Book() {
  const books: Books[] = await getBooks()

  return (
    <>
      <h1 className="text-2xl text-center p-6">0x0s catalog</h1>

      <View books={books} />
    </>
  )
}
