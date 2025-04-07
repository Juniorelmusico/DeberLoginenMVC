import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";
import { useAuth } from "./AuthContext";


export function TasksList() {
  const [tasks, setTasks] = useState([]);
  const {userId} = useAuth();
  console.log(userId);


  useEffect(() => {
    async function loadTasks() {
      const res = await getAllTasks(userId);
      setTasks(res.data);
    }
    if (userId){
      loadTasks();
    }
  }, [userId]);

  return (
    <div className="grid grid-cols-3 gap-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
