async function getTest() {
  const res = await fetch("https://dummyjson.com/products")
  const data = await res.json()

  return data?.products as any[]
}

export default async function Test() {
  const test = await getTest()

  return (
    <section>
      <h1>0x0's catalog</h1>

      {test?.map((item) => {
        return (
          <div key={item?.id}>
            <h2>{item?.title}</h2>
            <img src={item?.thumbnail} alt="" />
          </div>
        )
      })}
    </section>
  )
}
