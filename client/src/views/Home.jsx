import Card from "../components/Card";
import {useEffect, useState} from 'react'
import axios from 'axios'
function Home() {
  const [news, setNews] = useState([])
  useEffect(() => {
     axios.get('http://localhost:3001/newsdaily')
     .then(results => {
      setNews(results.data)
     })
     .catch(err => {
       console.log(err);
     })
  },[])
  console.log(news);
  return (
    <>
    <div className="container flex justify-center m-5">
      <h1 className="text-5xl font-semibold"> NEWS FOR TODAY</h1>
    </div>
    <div className=" grid grid-cols-1 lg:grid-cols-2 px-16">
      {
        news.map((e, i) => <Card
        key={i}
        title={e.title}
        img={e.urlToImage}
        url={e.url}
        desc={e.description}
         />)
      }
      
    </div>
    </>
  )
}

export default Home