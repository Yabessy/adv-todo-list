import { HomeIcon,CalendarDaysIcon,RectangleGroupIcon,RectangleStackIcon,UserGroupIcon } from "@heroicons/react/24/outline"
export default function Sidebar() {
  return (
    <div className="fixed z-20 flex justify-center h-full bg-white">
      <div className="w-11 h-full flex flex-col items-center">
        <h1 className="font-medium mt-2">Logo</h1>
        <HomeIcon className="w-6 mt-44 text-black"/>
        <CalendarDaysIcon className="w-6 mt-5 text-black"/>
        <RectangleGroupIcon className="w-6 mt-5 text-black"/>
        <RectangleStackIcon className="w-6 mt-5 text-black"/>
        <UserGroupIcon className="w-6 mt-5 text-black"/>
        <img className="rounded-full border border-black w-7 mt-auto mb-5" src="https://randomuser.me/api/portraits/women/70.jpg" alt="user" />
      </div>
    </div>
  )
}
