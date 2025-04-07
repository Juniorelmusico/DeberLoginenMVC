import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { TaskFormPage } from "./pages/TaskFormPage";
import { TasksPage } from "./pages/TasksPage";
import { Toaster } from "react-hot-toast";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { AuthProvider } from "./components/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="container mx-auto">
          {/* <Navigation /> */}
          <Routes>
            {/* redirect to tasks */}
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/tasks/:id" element={<TaskFormPage />} />
            <Route path="/tasks-create" element={<TaskFormPage />} />
            <Route path="/register" element={<RegisterPage/>} />
          </Routes>
          <Toaster />
        </div>
      </BrowserRouter>
    </AuthProvider> 
  );
}

export default App;
