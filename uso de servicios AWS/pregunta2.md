# Configuración de un Bucket S3 para Archivos Públicos y Acceso Restringido

---

## Pasos para la Configuración

### 1. Crear el Bucket
Crear un bucket S3. Usando la consola de AWS o el CLI:

```bash
aws s3api create-bucket --bucket nombre-del-bucket --region us-east-1
```

---

### 2. Configurar la Política del Bucket

La siguiente política define dos reglas; permite acceso público a los archivos en la carpeta `public/` y restringe todo lo demás:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadForPublicFolder",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::nombre-del-bucket/public/*"
        },
        {
            "Sid": "DenyAllOtherAccess",
            "Effect": "Deny",
            "Principal": "*",
            "Action": "s3:*",
            "Resource": "arn:aws:s3:::nombre-del-bucket/*",
            "Condition": {
                "StringNotEquals": {
                    "aws:userid": "arn:aws:iam::123456789012:user/usuario-autorizado"
                }
            }
        }
    ]
}
```

Para aplicar esta política, usar el siguiente comando, en donde namePolicy.json es con el nombre que guardo el json con la politica creada

```bash
aws s3api put-bucket-policy --bucket nombre-del-bucket --policy file://namePolicy.json
```

---

### 3. Configurar Bloqueo de Acceso Público

Habilitar el bloqueo de acceso público para bloquear configuraciones que otorguen acceso público no intencionado:

```bash
aws s3api put-public-access-block --bucket nombre-del-bucket --public-access-block-configuration 'BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=false,RestrictPublicBuckets=false'
```

---

### 4. Configurar ACLs

Para carpetas o archivos individuales, puedo ajustar sus permisos:

```bash
aws s3api put-object-acl --bucket nombre-del-bucket --key public/archivo.txt --acl public-read
```

---

## Acceso a Archivos

### Archivos Públicos
Los archivos públicos pueden ser accedidos directamente desde URL:

### Archivos Privados
Para acceder a archivos privados, se necesitan credenciales válidas.

---