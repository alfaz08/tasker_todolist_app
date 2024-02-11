import { useEffect, useState } from "react";
import AddTaskModal from "./AddTaskModal";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
const TaskBoard = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleSave = (newTask, isAdd) => {
    if (isAdd) {
      setTasks((prevTasks) => {
        const updatedTasks = [...prevTasks, newTask];
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        return updatedTasks;
      });
    } else {
      setTasks((prevTasks) => {
        const updatedTasks = prevTasks.map((task) =>
          task.id === newTask.id ? newTask : task
        );
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        return updatedTasks;
      });
    }
    setTaskToUpdate(null);
    setShowAddModal(false);
  };

  const handleEdit = (task) => {
    setTaskToUpdate(task);
    setShowAddModal(true);
  };

  useEffect(() => {
    const addTask = JSON.parse(localStorage.getItem("tasks"));
    setTasks(addTask);
  }, []);
  console.log("addTask", tasks);
  const handleCloseClick = () => {
    setShowAddModal(false);
    setTaskToUpdate(null);
  };

  return (
    <div>
      <section className="mb-20" id="tasks">
        {showAddModal && (
          <AddTaskModal
            taskToUpdate={taskToUpdate}
            onSave={handleSave}
            onCloseClick={handleCloseClick}
          />
        )}
        <div className="container mx-auto ">
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskActions
              tasks={tasks}
              onAddClick={() => setShowAddModal(true)}
            />
            <TaskList tasks={tasks} onEdit={handleEdit} />
          </div>
        </div>
      </section>
    </div>
  );
};
export default TaskBoard;
