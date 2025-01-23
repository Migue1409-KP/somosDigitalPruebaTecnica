# Control de Versiones (Git)

En caso de hacer un merge y tener conflictos la solución es:

## 1.Revisar cada conflicto
## 2.Escoger en cada conflicto como resolverlo:
    - Escoger la versión HEAD(de la rama actual que estoy trabajando)
    - Escoger la versión entrante(de la rama con que hago merge)
    - Manualmente modificar el codigo con una versión que una la versión HEAD y la entrante
## 3.Añadir a stage los cambios del conflicto y hacer commit
```bash
git commit -am "solve merge with nameBranch"
```

---
## Aclaraciones
Aunque es posible resolver por consola cada conflicto, prefiero resolverlo con las interfaces que otorgan los IDE's, sea vs code, algun IDE de JetBrains o incluso github Desktop