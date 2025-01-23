# Flujo AWS Step Functions para proceso de pedidos

El flujo contendra 3 pasos:

## 1. Validar Pedido
Verifica que los datos del pedido sean correctos

---

## 2. Procesar Pago
Realiza la operación de pago

---

## 3. Notificar al cliente
Envía una notificación al cliente indicando el estado del pedido

---

## Nota
El ejemplo del flujo estan en el json en donde se defienen 3 pasos que llaman a 3 lambdas creadas previamente