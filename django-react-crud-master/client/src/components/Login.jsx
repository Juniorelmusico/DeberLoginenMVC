import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateUser } from "../api/user.api"; // Asegúrate de que la ruta sea correcta
import { useAuth } from "./AuthContext"; // Asegúrate de que la ruta sea correcta

export function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { setUserId } = useAuth(); // Obtiene la función setUserId del contexto de autenticación
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Validando usuario:", formData);
      const response = await validateUser(formData); // Llama al endpoint de validación
      if (response.data.success) {
        alert("Inicio de sesión exitoso");
        setUserId(response.data.data.id); // Almacena el ID del usuario en el contexto
        if (response.data.data.is_admin === true) {
          window.location.href = "http://localhost:8000/admin"; // Redirige al panel de administración si es admin
        } else {
          navigate("/tasks"); // Redirige al panel de usuario normal
        }
        console.log("Usuario validado:", response.data.data.id); // Muestra el usuario validado
      } else {
        alert("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error al validar el usuario:", error.response?.data || error.message);
      alert("Hubo un error al iniciar sesión: " + (error.response?.data?.message || "Error desconocido"));
    }
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mb-5">
        <h1 className="text-2xl font-bold mb-4">Iniciar Sesión</h1>
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Tu nombre de usuario
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Tu nombre de usuario"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Tu contraseña
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Tu contraseña"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Iniciar Sesión
      </button>
      <button
        //boton que me lleva al componente register 
        onClick={() => navigate("/register")}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Crear Usuario
      </button>
    </form>
  );
}