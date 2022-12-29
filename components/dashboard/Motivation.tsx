function Motivation({ quote }: any) {
  return (
    <div className="flex-[4]">
      <div className="w-full h-full pl-11 max-w-4xl">
        <div className="p-5">
          <h1 className="text-3xl font-bold ">
            You Doing great Keep the Hardwork
          </h1>
          <p className="mt-5 font-medium">{quote.content}</p>
          <span>-{quote.originator.name}</span>
        </div>
      </div>
    </div>
  )
}

export default Motivation
