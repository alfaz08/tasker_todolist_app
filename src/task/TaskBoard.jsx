import { useEffect, useState } from "react";
import AddTaskModal from "./AddTaskModal";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

const TaskBoard = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const handleSave = (newTask) => {

    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });

    setShowAddModal(false);
  };

   useEffect(()=>{
    const addTask =JSON.parse(localStorage.getItem("tasks"))
    setTasks(addTask)
   },[])

  console.log('addTask',tasks);
  const handleCloseClick=()=>{
    setShowAddModal(false)
  }
  return (
    <div>
      <section className="mb-20" id="tasks">
      {showAddModal && <AddTaskModal onSave={handleSave} onCloseClick={handleCloseClick}/>}
        <div className="container mx-auto ">
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions onAddClick={() => setShowAddModal(true)} />
            <TaskList tasks={tasks} />
          </div>
        </div>
      </section>
    </div>
  );
};
export default TaskBoard;