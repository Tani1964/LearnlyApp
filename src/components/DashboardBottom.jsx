import Task from "./Task";
import { useState } from "react";
import { taskData } from "../data/task";
import SearchIcon from "@mui/icons-material/Search";

const DashboardBottom = () => {
  const [search, setSearch] = useState("")
  console.log(search)
  return (
    <div className="h-[50%] rounded-2xl  p-4 bg-white shadow-lg shadow-orange-400 overflow-y-clip">
      <div className="flex justify-between items-center pb-1">
        <h1 className="font-bold text-2xl">TASKS</h1>
        <div className="border-2">
          <SearchIcon  />
          <input className="outline-none" onChange={(e)=>{setSearch(e.target.value)}} type="text" />
        </div>
      </div>

      <div className="grid grid-flow-col grid-cols-3 p-2 px-3 pr-6 bg-primary text-white font-bold rounded-t-xl">
        <div className="flex self-center">Title</div>
        <div className="flex self-center">Date created</div>
        <div className="">State</div>
      </div>
      <div className="h-[70%] border-2 rounded-b-xl overflow-y-scroll">
        {taskData.filter(task => (task.title.toLowerCase()).includes(search)).map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default DashboardBottom;
