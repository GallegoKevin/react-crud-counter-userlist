# React CRUD 

# Lista de Usuarios: 

![iamgen](https://i.ibb.co/xX5D6Lm/rts2.png)

## Componentes

### Footer

- `Footer.tsx`: Componente simple que muestra un pie de página.

### Header

- `Header.tsx`: Componente que muestra un encabezado con un mensaje.
- `Header.css`: Estilos específicos para el componente `Header`.
- `index.ts`: Archivo de barril para exportar el componente `Header`.

### ListPerson

- `ListPerson.tsx`: Componente que itera y muestra una lista de personas utilizando el componente `Person`.
- `Person.tsx`: Componente que muestra información individual de una persona.
- `index.ts`: Archivo de barril para exportar el componente `ListPerson`.

### UserList

- `UserList.tsx`: Componente que itera y muestra una lista de usuarios utilizando el componente `User`.
- `User.tsx`: Componente que muestra información individual de un usuario.
- `index.ts`: Archivo de barril para exportar el componente `UserList`.

### Domain

- `Person.tsx`: Define la interfaz `PersonsProps` y exporta una lista de personas.
- `User.tsx`: Define la interfaz `UserProps` y exporta una lista de usuarios.

## Archivos Principales

- `App.tsx`: Componente principal que combina todos los componentes en una aplicación.
- `main.tsx`: Punto de entrada de la aplicación que renderiza el componente `App`.

## Tecnologías Utilizadas

- **React**: Biblioteca para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **Vite**: Herramienta de construcción rápida para proyectos de frontend.
- **CSS**: Para los estilos del componente `Header`y 'User' .


# Contador

![Contador](https://i.ibb.co/9WQVDmJ/rts1.png)

Contador que permite incrementar, decrementar y resetear un valor numérico, con mensajes condicionales según el valor del contador.

## Funcionalidades

- **Incrementar**: Aumenta el contador en 1 unidad.
- **Decrementar**: Disminuye el contador en 1 unidad, con validación para evitar valores negativos.
- **Resetear**: Restablece el contador a su valor inicial (10).
- **Mensajes Condicionales**: Muestra un mensaje que indica si el valor del contador es mayor a 12 o menor o igual a 12.



# REGISTRO DE USUARIOS

![Registro](https://i.ibb.co/SsBnFzh/User-list.png)


## DESCRIPCION: 

### `UserState`

El componente `UserState` maneja el estado de los usuarios y contiene lógica para:

- Renderizar el componente `Form` para ingresar nuevos usuarios.
- Renderizar el componente `UserIteration` para mostrar la lista de usuarios ingresados.

### `Form`

El componente `Form` permite al usuario ingresar nombre y apellido, y agregar nuevos usuarios al hacer clic en un botón.

###  `UserIteration`

El componente `UserIteration` muestra una lista de usuarios ingresados hasta el momento.