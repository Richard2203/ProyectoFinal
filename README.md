# Proyecto Final para la materia de Tecnologías para el Desarrollo de Aplicaciones Web

## INTEGRANTES
  - Castañeda González Giovanni
  - Colin Romero Derek Jacob
  - López García Ricardo

## Grupo
  4CV3


La página web creada se enfoca a la venta y ensamblaje de equipos de cómputo. 

Para la parte del fronted se empelaron las 
tecnologias:
    - HTML, 
    - CSS (se empleso Bootstrap), y 
    - JS.

Para la parte del backend se empleo:
    - Node.Js, 
    - Express, y 
    - PostgreSQL


## Pasos para configurar la base de datos

1. Instalación de PostgreSQL:
   - Asegúrate de tener PostgreSQL instalado en tu sistema.
     Puedes descargarlo desde [https://www.postgresql.org/download/](https://www.postgresql.org/download/)
     e instalarlo según las instrucciones proporcionadas para tu sistema operativo.

2. Creación de la base de datos:
   - Abre un cliente de PostgreSQL, como PgAdmin o la línea de comandos.
   - Crea una nueva base de datos para el proyecto.
   - El archivo para la BD se encuentra en `/backend/database/database.sql`
     
3. Configuración del archivo de conexión:
   - En el directorio del proyecto, encuentra el archivo de configuración de conexión a la base de datos
     `/backend/src/controllers/index.controller.js`.
   - Abre el archivo y busca la sección de configuración de la base de datos.
   - Reemplaza los valores de host, puerto, nombre de la base de datos, usuario y contraseña con los correspondientes a tu entorno de desarrollo.


## Pasos para ejecutar el backend

1. Instalación de las dependencias:
   - Asegúrate de tener Node.js y npm instalados en tu sistema. Puedes descargarlos desde [https://nodejs.org/](https://nodejs.org/)
     e instalarlos según las instrucciones proporcionadas para tu sistema operativo.
   - En el directorio del proyecto BACKEND, ejecuta el siguiente comando para instalar las dependencias del backend:
     ```
     npm install
     ```

2. Ejecución del backend:
   - En el directorio del proyecto, ejecuta el siguiente comando para levantar el servidor de desarrollo:
     ```
     npm run dev
     ```
   - El backend ahora está en ejecución y listo para recibir solicitudes.
3. Ejecución de la BD:
   - Es necesario tener activo la BD en postgreSQL.

