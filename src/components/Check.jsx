const Check = ({time}) => {
  return (
    <div className="border-2  grid grid-flow-col grid-cols-3 ">
        <div>{time.date}</div>
        <div>{time.checkin}</div>
        <div className="pl-4">{time.checkout}</div>
    </div>
  )
}

export default Check