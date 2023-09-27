import React from "react"
import Image from "next/image"

const ImageView = (props: any) => {
  const { book } = props
  return (
    <>
      <div className="flex flex-col items-center" key={book?.id + book?.Name}>
        <h2 className="text-sm">{book?.Name}</h2>
        <h2 className="text-sm">{book?.Year}</h2>
        <p className="text-sm">{book?.Authors[0]?.authors_id?.name}</p>
        <h3 className="text-sm">{book?.pictures[0]?.Pictures_id?.image}</h3>

        <figure key={book?.image}>
          <Image
            className="px-8 pb-6"
            src={
              (process.env.apiIMG as string) +
              book?.pictures[0]?.Pictures_id?.image
            }
            alt={book?.Name}
            width={500}
            height={500}
          />
        </figure>
      </div>
    </>
  )
}

export default ImageView
