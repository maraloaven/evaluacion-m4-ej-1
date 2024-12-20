# Sitio Web de la Clínica Clínica

Este es un proyecto de una aplicación web para la Clínica Clínica, desarrollado con React, utilizando Bootstrap para el diseño y organización visual. La aplicación incluye módulos para manejar información de doctores, servicios, y para agendar citas.

## Descripción del Proyecto

El sistema web contiene tres secciones principales, en todas se utilizan props para enviar datos entre los componentes:

1. **Equipo Médico:**  
Muestra los detalles del personal médico, como sus especialidades, experiencia y datos de contacto. Cada doctor se representa en una tarjeta que se genera dinámicamente a partir de datos almacenados en el estado del componente principal. 

2. **Servicios:**  
Despliega una lista de servicios disponibles en la clínica, que también se carga de forma dinámica desde el estado del componente principal.

3. **Formulario de Citas**  
Permite a los usuarios agendar citas ingresando el nombre del paciente, el doctor seleccionado y la fecha deseada. Al enviar el formulario, la información se muestra en la consola y en la interfaz.

## Tecnologías Utilizadas

- React para la creación de componentes y manejo del estado.
- Bootstrap para el diseño y la estilización responsiva.
- Node.js y npm para la gestión del proyecto y sus dependencias.
Esta vez .CSS fue omitido para generar todos los estilos en React y Bootstrap

## Funcionalidades Clave
1. Uso de Hooks
**useState**:
Maneja el estado de los doctores, servicios y datos del formulario de citas.
Almacena y actualiza las citas agendadas en tiempo real.

**useEffect**:
Carga la lista de doctores y servicios al montar el componente principal.

2. Manejo del Formulario
Validación en el cliente para asegurar que todos los campos estén completos antes de enviar.
Muestra las citas agendadas en la interfaz de manera dinámica.

3. Ciclo de Vida de Componentes
Renderizado condicional para alternar entre las secciones de Doctores, Servicios y Formulario de Citas.

Estructura del Proyecto

/evaluacion-m4-ej-1
│
├── src/                   
│   ├── assets/            <-- Imágenes y otros recursos estáticos
│   ├── components/        <-- Componentes reutilizables
│   │   ├── AppointmentForm.jsx
│   │   ├── DoctorCard.jsx
│   │   └── ServiceList.jsx
│   ├── App.jsx            <-- Componente principal
│   ├── main.jsx           <-- Punto de entrada
│
├── node_modules/          <-- Dependencias instaladas
├── .gitignore             <-- Archivos ignorados por Git
├── eslint.config.js       <-- Configuración de ESLint
├── index.html             <-- Archivo HTML raíz
├── package.json           <-- Configuración del proyecto
├── package-lock.json      <-- Información detallada de dependencias
├── README.md              <-- Documentación del proyecto
└── vite.config.js         <-- Configuración de Vite

## Instrucciones para Visualizar el Proyecto

### Requisitos Previos

- Tener **Node.js**, **npm** e idealmente **Vite** instalados en tu computadora.

### Pasos para Ejecutar el Proyecto

1. Clona el repositorio en tu máquina local:

        git clone <URL del repositorio>
        cd <nombre del repositorio>

2. Instala las dependencias necesarias:
npm install

3. Inicia el servidor de desarrollo (mediante Vite):

npm run dev

4. Abre el proyecto en tu navegador en la dirección que se muestre (normalmente http://localhost:5173).

## Autor

- Martín Avendaño
