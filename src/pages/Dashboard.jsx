import DashboardBottom from "../components/DashboardBottom"
import DashboardTop from "../components/DashboardTop"

const Dashboard = () => {
  return (
    <div className="p-4 h-[90%] flex flex-col gap-4 bg-[#FB9D18]">
        <DashboardTop/>
        <DashboardBottom/>
    </div>
  )
}

export default Dashboard