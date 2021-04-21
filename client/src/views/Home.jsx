import Card from "../components/Card";


function Home() {
  return (
    <>
    <div className="container flex justify-center m-5">
      <h1 className="text-5xl font-semibold"> NEWS FOR TODAY</h1>
    </div>
    <div className=" grid grid-cols-1 lg:grid-cols-2">
      <Card />
      <Card />
    </div>
    </>
  )
}

export default Home