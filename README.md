# Django-React CRUD Application

Este proyecto es una aplicación web de gestión de tareas que combina un backend desarrollado en **Django** y un frontend en **React**. La aplicación permite a los usuarios autenticarse, crear, leer, actualizar y eliminar tareas. Además, cuenta con un sistema de roles que diferencia entre usuarios normales y administradores.

## Tabla de Contenidos

- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Uso](#uso)
- [Capturas de Pantalla](#capturas-de-pantalla)
- [Autor](#autor)

---

## Características

- **Autenticación de Usuarios**: Inicio de sesión y registro de usuarios.
- **Gestión de Tareas**:
  - Crear nuevas tareas.
  - Editar tareas existentes.
  - Eliminar tareas.
  - Listar todas las tareas.
- **Roles de Usuario**:
  - Los administradores son redirigidos al panel de administración de Django.
  - Los usuarios normales acceden al panel de tareas.
- **Interfaz de Usuario Moderna**: Diseñada con TailwindCSS para una experiencia visual atractiva.
- **Notificaciones**: Uso de `react-hot-toast` para mostrar mensajes de éxito o error.

---

## Tecnologías Utilizadas

### Backend
- **Django**: Framework web para el backend.
- **Django REST Framework (DRF)**: Para construir la API REST.
- **SQLite**: Base de datos utilizada por defecto.

### Frontend
- **React**: Biblioteca para construir la interfaz de usuario.
- **React Router**: Para la navegación entre páginas.
- **React Hook Form**: Para la gestión de formularios.
- **Axios**: Para realizar solicitudes HTTP al backend.
- **TailwindCSS**: Para el diseño de la interfaz.

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

- **Python** (versión 3.8 o superior)
- **Node.js** (versión 14 o superior)
- **npm** o **yarn**
- **Git**

---

## Instalación

Sigue estos pasos para configurar el proyecto en tu máquina local:

### 1. Clonar el Repositorio
```bash
git clone <URL_DEL_REPOSITORIO>
cd django-react-crud-master
