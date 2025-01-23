# Autenticación con JWT
## Uso de Middlewares o Guards para Validación de JWT
Para manejar la autenticación en un API REST utilizando JWT, implementaria un middleware/guard/interceptor (según el framework en que se trabaje se tiene una convención diferente para el nombre de esto) que intercepte las solicitudes antes de que lleguen al controlador.
Este middleware o guard:

- Valida que el token JWT esté presente en la solicitud (generalmente en el header).
- Verifica que el token sea válido usando una clave secreta o certificado público.
- Obtiene el payload del JWT para identificar al usuario o aplicar reglas de autorización.
- En caso de que el token sea inválido o no este presente, responder con un error 401/403.

## Asignaria el middleware o guard a controller
Asignaria la verificación JWT a capa de controllers, rutas especificas o todo el proyecto excluyendo algunas rutas que no requieren token.
Esto según la logica del negocio