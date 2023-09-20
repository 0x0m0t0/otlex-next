async function getTest() {
  const res = await fetch("https://dummyjson.com/products")
  const data = await res.json()

  return data?.products as any[]
}

export default async function Test() {
  const test = await getTest()

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1>0x0s catalog</h1>

        {test?.map((item: any) => {
          return (
            <div key={item?.id}>
              <h2>{item?.title}</h2>
              <img src={item?.thumbnail} alt={item?.title} />
            </div>
          )
        })}
      </div>
    </section>
  )
}
