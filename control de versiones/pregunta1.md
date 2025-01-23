# Control de Versiones (Git)

## 1. Crear un nuevo branch y cambiarse a ella
```bash
git checkout -b exampleBranch
```
Esto crea una rama llamada `exampleBranch` a partir de la rama que estoy actualmente y me cambio hacia ella

## 2. Realizar cambios
Una vez realizados los cambios:

```bash
git add .
```
Añade en el 


```bash
git commit -m "example commit message"
```

## 3. Subir el branch al repositorio remoto
```bash
git push origin exampleBranch
```

---
## Aclaraciones
Debe haber un repositorio remoto creado previamente y asociado a origin
### Asociar repositorio remoto bajo el nombre de origin
```bash
git remote add origin urlRepositoryOnline
```