import Task from "./Task";
import { taskData } from "../data/task";

const DashboardBottom = () => {
  console.log(taskData);
  return (
    <div className="h-[50%] rounded-2xl  p-4 bg-white shadow-lg shadow-orange-400 overflow-y-clip">
      <h1 className="font-bold text-2xl">TASKS</h1>
      <div className="grid grid-flow-col grid-cols-3 p-2 px-3 pr-6 bg-primary text-white font-bold rounded-t-xl">
        <div className="flex self-center">Title</div>
        <div className="flex self-center">Date created</div>
        <div className="">State</div>
      </div>
      <div className="h-[70%] border-2 rounded-b-xl overflow-y-scroll">
        {taskData.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default DashboardBottom;
