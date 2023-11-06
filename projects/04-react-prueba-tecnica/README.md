# Prueba técnica para Juniors y Trainees de React en Live Coding

APIs:

- Facts Random: https://catfact.ninja/fact
- Imagen random: https://cataas.com/

  - endpoint para usar (antiguo, ya que cuando se recoge la respuesta del json no esta el parámetro `url`): `https://cataas.com/cat/says/${param}?fontSize=50&fontColor=red&json=true`

  - endpoint para usar: `https://cataas.com/cat/says/${param}?fontSize=50&fontColor=red`

- Recupera un hecho aleatorio de gatos de la primera API.
- Recuperar la primera parabra del hecho
- Muestra una imagen de un gato con la primera palabra.

# Levantar App sin dependencias con Vanilla JavaScript

- Instalar dependencias necesarias para el proyecto:
    - `npm install @vitejs/plugin-react -E`
    - `npm install react react-dom -E`
- Crear archivo `vite.config.js`
- Definir la configuración e importar el plugin de react
  
  - import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'

    export default defineConfig({
      plugins: [react()]
    })
