# Conexión del Formulario de Contacto con N8N

## Paso 1: Configurar N8N

### Opción A: N8N Cloud (Recomendado)
1. Ve a [n8n.cloud](https://n8n.cloud) y crea una cuenta gratuita
2. Crea un nuevo workflow

### Opción B: Instalar N8N localmente
```bash
npm install n8n -g
n8n start
```

## Paso 2: Crear el Webhook

1. En tu workflow de N8N, agrega un nodo **Webhook**
2. Configura el método HTTP: **POST**
3. Establece la ruta: `contact-form`
4. Activa el workflow

## Paso 3: Obtener la URL del Webhook

1. Una vez activado el workflow, copia la URL del webhook que aparece
2. La URL tendrá un formato como: `https://tu-dominio.n8n.cloud/webhook/contact-form`

## Paso 4: Configurar Variables de Entorno

### Para Cloudflare Pages:
1. Ve a tu dashboard de Cloudflare Pages
2. Selecciona tu proyecto
3. Ve a **Settings** → **Environment variables**
4. Agrega la variable:
   - **Name:** `N8N_WEBHOOK_URL`
   - **Value:** `https://tu-dominio.n8n.cloud/webhook/contact-form-probiose`
   - **Environment:** Production (y Preview si es necesario)

### Para desarrollo local:
1. Crea un archivo `.env.local` en la raíz del proyecto
2. Agrega la línea:
   ```
   N8N_WEBHOOK_URL=https://tu-dominio.n8n.cloud/webhook/contact-form-probiose
   ```

## Paso 5: Configurar el Flujo de Trabajo

### Opción Básica - Solo Email
1. Conecta el webhook a un nodo **Send Email**
2. Configura las credenciales SMTP (ejemplo con Outlook):
   - Host: `smtp-mail.outlook.com`
   - Puerto: `587`
   - Usuario: `tu-email@outlook.com`
   - Contraseña: `tu-contraseña-de-aplicación`
3. Configura el email:
   - Para: `probiose.cultivosano@outlook.com`
   - Asunto: `Nuevo mensaje de contacto - {{ $json.name }}`
   - Cuerpo: Usa las variables del formulario

### Flujo Completo Recomendado
1. **Webhook** → **Set Response** (respuesta inmediata)
2. **Webhook** → **Send Email** (notificación)
3. **Webhook** → **Google Sheets** o **Airtable** (guardar datos)
4. **Webhook** → **Send WhatsApp** (notificación por WhatsApp)

## Paso 6: Probar el Formulario

1. Activa el workflow en N8N
2. Ve a tu sitio web y envía un mensaje de prueba
3. Verifica que:
   - El formulario muestra "¡Mensaje enviado!"
   - Recibes el email
   - Los datos se guardan donde configuraste

## Campos del Formulario

El formulario envía estos datos a N8N:
- `name`: Nombre del contacto
- `whatsapp`: Número de teléfono
- `email`: Correo electrónico
- `message`: Mensaje/solicitud
- `timestamp`: Fecha y hora del envío
- `source`: Siempre "website_contact_form"

## Manejo de Errores

El formulario incluye:
- Validación HTML5 automática
- Estados de carga ("Enviando...")
- Mensajes de éxito/error
- Reset automático después del envío exitoso

## Seguridad

Para producción, considera:
- Implementar reCAPTCHA
- Validación adicional del lado del servidor
- Rate limiting en N8N
- Encriptación de datos sensibles

## Solución de Problemas

### Error CORS
Si obtienes errores CORS, configura los headers en N8N:
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

### El formulario no envía
1. Verifica que la URL del webhook sea correcta
2. Revisa la consola del navegador por errores
3. Confirma que el workflow esté activo en N8N

### No llega el email
1. Verifica las credenciales SMTP
2. Revisa la carpeta de spam
3. Confirma que el email del remitente esté autorizado