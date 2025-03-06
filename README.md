# Ejercicio práctico 1 - Módulo 6 Adalid Corfo

## Descripción del Proyecto

Este proyecto es una aplicación web desarrollada en React que permite a los usuarios agendar citas médicas con diferentes doctores. La aplicación muestra una lista de servicios médicos y proporciona un formulario para que los pacientes puedan seleccionar un doctor, elegir una fecha y hora, y proporcionar su nombre para agendar una cita.

## Instrucciones para ejecutar y probar el Proyecto

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/Pabloblockchain24/ejercicio1-modulo6-adalid-corfo.git
   ```
   
   cd ejercicio1-modulo6-adalid-corfo

   npm install
   npm run server 
   npm run sass
   npm run dev 

## Estructura de carpetas y archivos

```
ejercicio1-modulo6-adalid-corfo/
├── public/
│   ├── assets/
│   │   ├── img/
│   │      ├── appointmentsItem.jpg
│   │      ├── emergencyItem.jpg
│   │      └── especialityItem.jpg
│   │    
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AppointmentFormCard.jsx
│   │   ├── DoctorCard.jsx
│   │   ├── DoctorCardWithModal.jsx
│   │   ├── DoctorsList.jsx
│   │   └── ServiceList.jsx
│   ├── pages/
│   │   ├── AppointmentForm.tsx
│   │   ├── Dashboard.tsx
│   │   ├── DoctorAdd.tsx
│   │   ├── EquipoMedico.tsx
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── ProfilerView.tsx
│   │   ├── ServiciosMedicos.tsx
│   │   └── Vulnerabilities.tsx
│   ├── context/
│   │   ├── AuthContext.tsx
│   │   └── DataContext.tsx
│   ├── hocs/
│   │   └── whitModal.jsx
│   ├── App.jsx
│   ├── index.css
│   └── assets/
│       └── styles/
│            ├── abstracts/
│            ├── base/
│            ├── components/
│            ├── layout/
│            ├── pages/
│            ├── themes/
│            ├── vendors/
│            └── main.scss
├── package.json
└── README.md
```

## Explicación elección de Fetch API

He elegido Fetch API para consumir la API porque es una funcionalidad nativa de los navegadores modernos, lo que elimina la necesidad de instalar dependencias adicionales y mantiene el proyecto más liviano. Además, su uso con async/await facilita el manejo de solicitudes asíncronas y errores de forma limpia y sencilla. Para las necesidades actuales del proyecto, Fetch API ofrece suficiente flexibilidad y simplicidad sin requerir características avanzadas como las que proporciona Axios.


## Explicación de como ReactJS utiliza el DOM virtual en pagina de doctores

ReactJS utiliza el DOM virtual en DoctorsList para mejorar el rendimiento al minimizar actualizaciones en el DOM real. Cuando el estado doctors cambia tras cargar datos, React compara el DOM virtual anterior con el actualizado , aplicando solo los cambios necesarios al DOM real, como la creación de componentes DoctorCard. Esto optimiza los renderizados, haciendo la interfaz más rápida y eficiente.

A través del uso de useEffect, se recarga la función loadDoctors, que hace un fetch de los doctores a un archivo JSON, cada vez que se recarga la página.

## Modularización de Estilos

La estructura de los estilos está organizada utilizando SASS, dividiendo los estilos en archivos parciales para mejorar la organización y modularidad del código. Los archivos parciales están agrupados por funcionalidades, como layout, componentes, páginas, temas, entre otros. 

- `/src/assets/styles/abstracts/_variables.scss`: Define los breakpoints a utilizar.
- `/src/assets/styles/base/_fonts.scss`: Contiene las definiciones de fuentes utilizadas en el proyecto.
- `/src/assets/styles/components/_buttons.scss`: Define estilos para los botones.
- `/src/assets/styles/components/doctor-card.scss`: Define estilos tarjetas de doctores a renderizar
- `/src/assets/styles/pages/_form-appointment.scss`: Estilos específicos de la página de reserva de citas.
- `/src/assets/styles/pages/_equipo-medico.scss`: Estilos específicos de la página del equipo médico.
- `/src/assets/styles/pages/_services-list.scss`: Estilos específicos de la página de listado de servicios
- `/src/assets/styles/themes/_theme-adalid.scss`: Estilos para el colores y tema personalizado del sitio.
- `/src/assets/styles/vendors/_reset.scss`: Contiene un reset CSS básico para normalizar estilos entre navegadores.

Todos estos archivos se importan en el archivo principal `/src/assets/styles/main.scss`, que se compila en el archivo CSS final.

## Media Queries

Se han implementado media queries en varios de los archivos parciales para asegurar que el diseño sea completamente responsivo. Los principales puntos de ruptura (`breakpoints`) son:

- 1200px: Para pantallas grandes.
- 1024px: Para pantallas medianas.
- 768px: Para tabletas.
- 576px: Para tabletas pequeñas y moviles grandes
- 420px: Para moviles pequeños

Estos breakpoints se aplican en las secciones necesarias, como el layout y los componentes, para que el sitio funcione correctamente en diferentes tamaños de pantalla.


## Uso de lighthouse para verificar rendimiento offline

![Rendimiento PWA en lighthouse ](/public/assets/imgs/lighthouse-offline.jpg)

