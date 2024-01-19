import StaffId from "./StaffId"
import Logo from "../assets/Logo.png"
import Check from "../components/Check"
import {timeData} from "../data/time"

const DashboardTop = () => {
  return (
    <div className="h-[50%] flex gap-4 ">
        <div className="hidden w-[50%] rounded-2xl bg-white shadow-lg shadow-orange-400 p-4 lg:flex flex-col justify-between">
            <p className="font-bold text-2xl lg:hidden">STAFF ID CARD</p>
            <StaffId className="absolute"/>
            <img className="relative z-10 h-[50%] lg:h-[80%] -translate-y-32 lg:-translate-y-52 opacity-40 w-[80%] self-center" src={Logo} alt="" />

        </div>
        <div className="w-[100%] lg:w-[50%] rounded-2xl bg-white shadow-lg shadow-orange-400 p-4">
            <p className="font-bold text-2xl">CHECK IN</p>
            <div className="justify-between bg-primary text-white px-2 py-2 rounded-t-2xl  grid grid-flow-col grid-cols-3 ">
              <div>DATE</div>
              <div>TIME-IN</div>
              <div>TIME-OUT</div>
            </div>
            <div className="h-4/6 border-2 rounded-b-2xl p-2 overflow-y-scroll">
              {timeData.map((time)=>(
                <Check key={time.id} time={time}/>
              ))}
              
            </div>
        </div>
    </div>
  )
}

export default DashboardTop