import { LineChart, Line } from "recharts"
import Card from "./Card"
export default function Overview() {
  const data = [
    { uv: 1 },
    { uv: 2 },
    { uv: 3 },
    { uv: 6 },
    { uv: 0 },
    { uv: 6 },
    { uv: 20 },
  ]
  return (
    <div className="flex-[6] border-b-2">
      <div className="w-full h-full pl-11">
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
            <div className="w-full h-auto flex justify-center items-center space-x-5 bg-white rounded-md">
              <div className="text-[#000188] flex items-end flex-col space-y-8 mt-1.5">
                <span>20</span>
                <span>15</span>
                <span>10</span>
                <span>5</span>
              </div>
              <div className="bg-gray-400 w-[1px] h-[80%]"/> 
              <LineChart width={450} height={200} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              </LineChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
