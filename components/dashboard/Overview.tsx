import { useEffect, useState } from "react"
import { LineChart, Line } from "recharts"
import Card from "./Card"
export default function Overview() {
  const [datas, setData] = useState(null)
  useEffect(() => {
    const data = [
      { uv: 1 },
      { uv: 2 },
      { uv: 3 },
      { uv: 6 },
      { uv: 0 },
      { uv: 6 },
      { uv: 20 },
    ]
    // @ts-ignore
    setData(data)
  }, [])
  return (
    <div className="flex-[5]">
      <div className="w-full h-full pl-14">
        <div className="p-5">
          <h1 className="text-2xl font-medium">Overview</h1>
          <div className="flex space-x-10">
            <div>
              <h1 className="text-xl font-medium mt-6">Top Task:</h1>
              <Card
                up={true}
                text={"OYO"}
                task={12}
                completed={10}
                percent={20}
              />
              <Card
                up={false}
                text={"SMKN 8"}
                task={10}
                completed={6}
                percent={10}
              />
            </div>
            <div className="border shadow-sm w-full h-auto flex justify-center items-center space-x-5 bg-white rounded-md">
              <div className="text-[#000188] flex items-end flex-col space-y-8 mt-1.5">
                <span>20</span>
                <span>15</span>
                <span>10</span>
                <span>5</span>
              </div>
              <div className="bg-gray-400 w-[1px] h-[80%]" />
              {datas && (
                <LineChart id="test" width={400} height={200} data={datas}>
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                </LineChart>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
