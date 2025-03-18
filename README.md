# Amigo Secreto

Este proyecto es una aplicación web simple para organizar un sorteo de "Amigo Secreto". Permite agregar nombres a una lista y seleccionar aleatoriamente un nombre como ganador.

## Características
- Agregar amigos a la lista.
- Evitar nombres duplicados.
- Mostrar la lista de amigos agregados.
- Sortear un amigo secreto al azar.

## Estructura del Proyecto
- `index.html`: Contiene la estructura HTML de la página.
- `style.css`: Archivo de estilos para la apariencia de la aplicación.
- `app.js`: Contiene la lógica de programación para gestionar la lista y el sorteo.

## Instalación y Uso
1. Clona este repositorio o descarga los archivos.
2. Abre el archivo `index.html` en un navegador.
3. Ingresa nombres en el campo de entrada y presiona "Añadir".
4. Haz clic en "Sortear amigo" para obtener un resultado aleatorio.

## Funciones Principales
### `agregarAmigo()`
- Captura el nombre ingresado en el campo de entrada.
- Verifica que el nombre no esté vacío ni duplicado.
- Agrega el nombre a la lista y actualiza la interfaz.

### `sortearAmigo()`
- Verifica que haya al menos un amigo en la lista.
- Selecciona un nombre aleatorio.
- Muestra el nombre sorteado y lo elimina de la lista.

## Requisitos
- Un navegador web moderno.
- Conexión a Internet si se usan fuentes de Google.


