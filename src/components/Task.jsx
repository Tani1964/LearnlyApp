import { useState } from "react";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const Task = ({ task }) => {
  const [visibility, setVisibility] = useState(false);
  const [state, setState] = useState("Pending");
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  console.log(title);
  console.log(task.title);
  return (
    <div>
      {edit ? (
        <div className="p-4 h-3/5 border-2">
          <div>
            <label className="font-bold">Title:</label>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className="border-2 w-full"
            />
          </div>

          <div>
            <label className="font-bold">Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border-2 w-full"
            ></textarea>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => {
                setEdit(false);
                task.title = title;
                task.description = description;
              }}
              className="bg-primary px-8 py-2 rounded-full text-white "
            >
              Save
            </button>
            <button
              onClick={() => {
                setEdit(false);
              }}
              className="bg-red-700 px-6 py-2 rounded-full text-white"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="p-4 h-3/5 border-2">
          <div className="grid grid-flow-col grid-cols-3">
            <div className="text-xl font-bold">{task.title}</div>

            <div>{task.date}</div>

            <div className=" gap-2">
              <div className="font-bold flex items-center gap-4">
                <p
                  onClick={() => {
                    setVisibility(!visibility);
                  }}
                  className={`py-2 px-4 text-white rounded-full cursor-pointer ${
                    state == "Pending"
                      ? "bg-orange-500"
                      : state == "Done"
                      ? "bg-green-700"
                      : state == "Missed"
                      ? "bg-red-700"
                      : null
                  }`}
                >
                  {state}
                </p>
                <div
                  className={
                    visibility
                      ? ` flex flex-col bg-white z-30 border-2 rounded-lg -translate-x-10 translate-y-12 `
                      : "hidden"
                  }
                >
                  <p
                    onClick={() => {
                      setState("Pending");
                      setVisibility(!visibility);
                    }}
                    className="text-orange-500 px-2 cursor-pointer hover:text-white hover:bg-gradient-to-r from-white to-orange-500"
                    href="#"
                  >
                    Pending
                  </p>
                  <p
                    onClick={() => {
                      setState("Done");
                      setVisibility(!visibility);
                    }}
                    className="text-green-700 px-2 cursor-pointer hover:text-white hover:bg-gradient-to-r from-green-700 to-white "
                    href="#"
                  >
                    Done
                  </p>
                  <p
                    onClick={() => {
                      setState("Missed");
                      setVisibility(!visibility);
                    }}
                    className="text-red-700 px-2 cursor-pointer hover:text-white hover:bg-gradient-to-r from-white to-red-700"
                    href="#"
                  >
                    Missed
                  </p>
                </div>
                <div
                  onClick={() => {
                    setEdit(true);
                  }}
                  className="cursor-pointer"
                >
                  <BorderColorRoundedIcon />
                  Edit
                </div>
                {/* <div
                  onClick={() => {
                    tas
                  }}
                  className="cursor-pointer"
                >
                  <DeleteRoundedIcon/>
                  Delete
                </div> */}
              </div>
            </div>
          </div>
          <div
            className={`hidden text-sm lg:${visibility ? "hidden" : "flex"}`}
          >
            {task.description}
          </div>
        </div>
      )}
    </div>
  );
};

export default Task;
