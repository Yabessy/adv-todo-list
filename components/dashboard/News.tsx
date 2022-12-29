import { useState } from "react"

export default function News({ newsResults }: any) {
  const [articleNumber, setArticeNumber] = useState(3)
  return (
    <div className="flex-[4] overflow-y-scroll">
      <div className="h-full ml-10 pt-5 pl-10 border-l-2">
        {newsResults.articles.slice(0,articleNumber).map((article: any) => {
          return (
            <div className="w-64 flex items-center space-x-2 py-1 px-2">
              <img
                className="w-24 h-16 rounded border border-gray-300"
                src={article.urlToImage}
                alt="news"
              />
              <div className="flex flex-col ">
                <h1 className="font-medium text-sm ">
                  {article.title.slice(0, 40)}
                </h1>
                <p className="text-gray-500 text-xs ">
                  {article.description.slice(0, 40)}
                </p>
              </div>
            </div>
          )
        })}
        <button onClick={()=> setArticeNumber(articleNumber + 3)}>Show More</button>
      </div>
    </div>
  )
}
