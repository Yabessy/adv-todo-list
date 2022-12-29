import {
  InformationCircleIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline"

export default function Card({ up, text, task, completed, percent }: any) {
  return (
    <div className="w-96 bg-white shadow-sm mt-4 h-24 rounded-md p-2">
      <h1 className="font-medium text-base">{text}</h1>
      <div className="flex items space-x-2 text-gray-700">
        <InformationCircleIcon className="w-5 mt-1" />
        <span className="mt-0.5">{task} Task</span>
        <CheckCircleIcon className="w-5 mt-1" />
        <span className="mt-0.5">{completed} Completed</span>
      </div>
      <div className={`flex items space-x-1 ${up ? 'green' : 'red'}`}>
        {up ? <ArrowTrendingUpIcon className="w-5 mt-1" /> : <ArrowTrendingDownIcon className="w-5 mt-1" />}
        <span className="mt-0.5">{percent}% {up ? 'more' : 'least'} than last month</span>
      </div>
    </div>
  )
}
