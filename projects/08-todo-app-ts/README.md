# React + TypeScript + Vite

## Crear un TodoMVC con TypeScript

- [x] Inicializar proyecto con Vite.
- [x] Añadir linter para TypeScript + React.
- [x] Añadir estilos del TodoMVC.
- [x] Listar todos los TODOs.
- [x] Poder borrar un TODO
- [x] Marcar TODO como completado
- [x] Añadir forma de filtrar TODOs (Footer)
- [x] Mostrar número de TODOs pendientes (Footer)
- [x] Añadir forma de borrar todos los TODOs completados
- [x] Crear Header con Input (Header)
- [x] Crear un TODO (Header)
- [] Poder editar el texto de un TODO (Doble click)
- [] Añadir animaciones con AutoAnimate
- [] Pasar a Reducer
- [] Sincronizar con el Backend

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
