import React from "react"
import { inPlaceSort, sort } from "fast-sort"

const ListView = (props: any) => {
  const { book, i } = props
  //   const sorted = sort(book.Name).asc()

  return (
    <div className="flex p-2 items-center justify-between border m-1">
      <p>{i}</p>
      <h2 className="text-sm w-1/4">{book?.Name}</h2>
      <p className="text-sm w-1/4 ">{book?.Authors[0]?.authors_id?.name}</p>
      <p className="text-sm w-1/4">{book?.Year}</p>
    </div>
  )
}

export default ListView
