![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

## Using this component

### Script tag
- Put a script tag similar to this `<script src='https://unpkg.com/@idli/idli-script-editor@0.1.0/dist/idli-script-editor.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### Node Modules
- Run `npm install @idli/idli-script-editor --save`
- Put a script tag similar to this `<script src='node_modules/@idli/idli-script-editor/dist/idli-script-editor.js'></script>` in the head of your index.html
- Then you can use the element anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install @idli/idli-script-editor --save`
- Add an import to the npm packages `import @idli/idli-script-editor;`
- Then you can use the element anywhere in your template, JSX, html etc



#### Example:
<!---
```
<custom-element-demo>
  <template>
    <script src='https://unpkg.com/@idli/idli-script-editor@0.5.0/dist/idli-script-editor.js'></script>
    <idli-script-editor>Default</idli-script-editor>
    <idli-script-editor variant="primary">Primary</idli-script-editor>
    <idli-script-editor variant="danger">Danger</idli-script-editor>
    <idli-script-editor variant="dashed">Dashed</idli-script-editor>
    <idli-script-editor variant="link">Link</idli-script-editor>
  </template>
</custom-element-demo>
```
-->
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Idli Script Editor</title>
  <script src='https://unpkg.com/@idli/idli-script-editor@0.1.0/dist/idli-script-editor.js'></script>
</head>
<body>
  <idli-script-editor>Default</idli-script-editor>
  <idli-script-editor variant="primary">Primary</idli-script-editor>
  <idli-script-editor variant="danger">Danger</idli-script-editor>
  <idli-script-editor variant="dashed">Dashed</idli-script-editor>
  <idli-script-editor variant="link">Link</idli-script-editor>
</body>
</html>
```

#### Demo:
[Click here for demo](http://idli.io/button.html)

## Code of Conduct
[Contributor Covenant](/CODE_OF_CONDUCT.md)

## License
[Apache License 2.0](/LICENSE)