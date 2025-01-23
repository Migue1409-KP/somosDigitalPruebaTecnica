# Endpoint creación de usuario

## Request
- Método: POST
- URL: /api/v1/users
- Payload(body): 
```json
{
    "nombre": "Jhon Doe",
    "correo": "example@example.com",
    "password": "Example321!"
}
```

## Response
### Response exitoso
- código htpp: 200
- respuesta:
```json
{
    "code": "OK_USER_CREATED", //Utilizado para mensajes estaticos de un diccionario de mensajes
    "message": "User created",
    "data":{
        "id": "77916a1e-55e3-43c3-92c0-207f3eb23f12",
        "nombre": "Jhon Doe",
        "correo": "example@example.com",
        "password": "Example321!",
        "created_at":"2025-01-21 22:23:26",
        "updated_at":"2025-01-21 22:23:26"
    }
}
```

### Response error email duplicado
- código htpp: 409
- respuesta:
```json
{
    "code": "ERR_USER_EMAIL_EXISTS", //Utilizado para mensajes estaticos de un diccionario de mensajes
    "message": "User's email exists",
}
```

### Response error inesperado
- código htpp: 500
- respuesta:
```json
{
    "code": "ERR_UNEXPECTED", //Utilizado para mensajes estaticos de un diccionario de mensajes
    "message": "Internal Server Error",
}
```

# Explicación:
## Métodos HTPP
Hay diferentes metodos pero los mas importantes son los siguientes y la razón de cuando usar cual:
- GET: Obtener los datos de un recurso existente
- POST: Insertar o crear un nuevo recurso
- PUT: Actualizar completamente un recurso existente
- PATH: Actualizar parcialmente un recurso existente
- DELETE: Eliminar un recurso existente

## Códigos de estado:
Hay demasiados codigos pero para este ejemplo:
- 200: La solicitud tuvo exito
- 409: Existe un conflicto, en este caso el correo ya esta registrado
- 500: Ocurrio un error que el servidor no esperaba

## Estructura JSON esperada
Aunque la estructura depende de cada proyecto y convenciones del equipo de trabajo, para esta propuesta se opta por un estructura muy general y aceptada globalmente.
- Un code donde se maneja una llave para tener respuestas estaticas en un diccionario de mensajes creados para el proyecto
- Un message para especificar que sucedio con la transacción
- Un data para devolver el o los recursos de la transacción (opcional)