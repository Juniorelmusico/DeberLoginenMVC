import { TasksList } from "../components/TasksList";
import { Navigation } from "../components/Navigation";

export function TasksPage() {
  return (
    <div>
      <Navigation />
      <h1 className="text-3xl font-bold text-center mt-5">Tasks</h1>
      <TasksList />
    </div>
  );
}
