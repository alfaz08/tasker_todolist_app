import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const TaskList = ({ tasks }) => {
  console.log(tasks);
  return (
    <div>
      <div className="overflow-auto">
        <table className="table-fixed overflow-auto xl:w-full">
          <thead>
            <tr>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[250px]">
                {" "}
                Title{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize w-[250px]">
                Task Status
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[250px]">
                {" "}
                Priority{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[250px]">
                {" "}
                Edit Task{" "}
              </th>
              <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[250px]">
                {" "}
                Mark as{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks?.map((task) => (
              <tr
                key={task.id}
                className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-2 [&>td]:py-2"
              >
                <td className="text-center">{task.title}</td>

                <td className="text-center">
                  {task.isComplete ? "Completed" : "Not Completed"}
                </td>
                <td className="text-center">
                  {task.priority === "High" ? (
                    <button
                      disabled
                      className="bg-red-600 w-24 text-bl text-center rounded-lg"
                    >
                      High
                    </button>
                  ) : task.priority === "Low" ? (
                    <button
                      disabled
                      className="bg-green-600 w-24 text-center rounded-lg"
                    >
                      Low
                    </button>
                  ) : (
                    <button
                      disabled
                      className="bg-purple-600 w-24 text-center rounded-lg"
                    >
                      Medium
                    </button>
                  )}
                </td>

                <td className="flex justify-center items-center">
                  <button>
                    <FaEdit className="text-2xl text-blue-500" />
                  </button>
                </td>

                <td className="text-center">
                  <div className="flex items-center justify-center space-x-3">
                    <button className="text-amber-500">Completed</button>
                    <button className="text-red-500">
                      <MdDelete className="text-2xl" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TaskList;
