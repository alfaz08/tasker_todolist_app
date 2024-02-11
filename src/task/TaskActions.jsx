import { useState } from "react";
const TaskActions = ({ onAddClick, tasks, onPriorityFilterChange }) => {
  const [selectedPriority, setSelectedPriority] = useState("");
  const handlePriorityFilterChange = (event) => {
    const priority = event.target.value;
    setSelectedPriority(priority);
    onPriorityFilterChange(priority);
  };
  return (
    <div>
      <div>
        <div className="mb-14 items-center justify-between sm:flex">
          <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
          <div>Total Task: {tasks?.length}</div>
          <div className="flex items-center space-x-5">
            <button className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold">
              Add Task
            </button>
            <div>
              <label htmlFor="priorityFilter">Filter by Priority:</label>
              <select
                id="priorityFilter"
                name="priorityFilter"
                value={selectedPriority}
                onChange={handlePriorityFilterChange}
                className="rounded-md bg-[#2D323F] px-3 py-2.5"
              >
                <option value="All">All</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TaskActions;
