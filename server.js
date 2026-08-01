const express = require('express');

const app = express();

// Render asigna el puerto por variable de entorno. En local cae a 3000.
const PORT = process.env.PORT || 3000;

// Cambia esta línea para probar el redespliegue automático.
const VERSION = 'v2';

app.get('/', (req, res) => {
  res.send(`<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Reto de despliegue — 10x Builders</title>
  <style>
    :root { color-scheme: light dark; }
    body {
      margin: 0; min-height: 100vh; display: grid; place-items: center;
      font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
      background: #FAFAFA; color: #1A1D23;
    }
    .tarjeta {
      background: #fff; border-radius: 16px; padding: 40px 44px;
      box-shadow: 0 4px 24px rgba(0,0,0,.08); max-width: 520px; margin: 24px;
    }
    h1 { margin: 0 0 8px; font-size: 24px; }
    p  { margin: 8px 0; line-height: 1.5; color: #444; }
    .version {
      display: inline-block; margin-top: 20px; padding: 6px 14px;
      background: #6366F1; color: #fff; border-radius: 999px;
      font-size: 14px; font-weight: 600;
    }
    code { background: #F1F5F9; padding: 2px 6px; border-radius: 4px; }
  </style>
</head>
<body>
  <div class="tarjeta">
    <h1>Despliegue funcionando</h1>
    <p>Este proyecto salió de mi computador, pasó por Git y GitHub, y lo está
       sirviendo un servidor en la nube.</p>
    <p>El servidor arranca con <code>npm start</code> y escucha en el puerto que
       le asigna la plataforma.</p>
    <span class="version">${VERSION}</span>
  </div>
</body>
</html>`);
});

// 0.0.0.0 para que el servidor sea alcanzable desde fuera del contenedor
// (Replit, Render y cualquier plataforma en la nube lo necesitan; en local es indiferente).
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
