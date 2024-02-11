import { useEffect, useState } from "react";

const AddTaskModal = ({ onSave, onCloseClick }) => {
  const initialTaskState = {
    id: crypto.randomUUID(),
    title: "",
    description: "",
    priority: "",
    isComplete: false,
  };
  const [task, setTask] = useState(initialTaskState);
  const handleChange = (evt) => {
    const name = evt.target.name;
    let value = evt.target.value;
    setTask({ ...task, [name]: value });
  };

  return (
    <>
      <div className="bg-black bg-opacity-70 h-full w-full z-10 absolute top-0 left-0"></div>
      <form className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-10 absolute top-1/4 left-1/3">
        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              value={task.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                value={task.priority}
                onChange={handleChange}
                required
              >
                <option value="">Select Priority</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-between lg:mt-20">
          <button
            className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={onCloseClick}
          >
            Close
          </button>
          <button
            type="button"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={() => {
              // Call the onSave callback to handle saving the task
              onSave(task);
              // Reset the form after saving
              setTask({
                id: crypto.randomUUID(),
                title: "",
                description: "",
                priority: "",
                isComplete: false,
              });
            }}
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTaskModal;
