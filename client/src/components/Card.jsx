function Card({title, img, url, desc}) {
  return (
    <>
      <div className="container mx-auto px-2 hover:opacity-50 m-5 max-2-xs" onClick={() => window.open(url)} style={{cursor: 'pointer'}}>
        <div className="max-w-2xl bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide shadow-lg">
          <div id="header" className="flex">
            <img alt="mountain" className="rounded-md border-2 border-gray-300 hidden md:block" src={img} style={{width: '200px'}} />
            <div id="body" className="flex flex-col ml-5">
              <h4 id="name" className="text-xl font-semibold mb-2">{title}</h4>
              <p id="job" className="text-gray-800 mt-2">{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card