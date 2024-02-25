// Importamos las dependencias necesarias
const express = require("express");
const fs = require("fs");
const app = express();
const { getPort, getStoragePath } = require("./storage.js");
const path = require("path");
const {createFolder} = require("./utilities/helpers.js")

// Obtenemos el puerto para el servidor
const findPort = getPort();
const PORT = findPort.success ? findPort.message : 5000;
// Deshabilitamos la información sobre Express en las cabeceras de respuesta
app.disable("x-powered-by");

// Middleware para manejar los mensajes JSON enviados por los clientes
app.use((req, res, next) => {
    let data = "";
    req.on("data", (chunk) => {
        data += chunk.toString();
    });

    req.on("end", () => {
        req.body = data;
        next();
    });
});

// Ruta para recibir mensajes enviados por los clientes
app.post("/messages", (req, res) => {
    // Parseamos el mensaje JSON recibido
    const { message, alias } = JSON.parse(req.body);
    // Obtenemos la ruta de almacenamiento
    const storagePath = getStoragePath();

    // Si no se pudo obtener la ruta de almacenamiento, respondemos con un error
    if (!storagePath.success) {
        console.error(storagePath.message);
        return res.status(500).json({ error: "No se pudo obtener la ruta de almacenamiento" });
    }

    // Creamos la ruta del directorio utilizando el alias recibido
    const folderAlias = path.join(storagePath.message, alias);

    // Si el directorio no existe, lo creamos de manera recursiva
    if (!fs.existsSync(folderAlias)) {
        fs.mkdirSync(folderAlias, { recursive: true });
    }

    // Llamamos a la función para crear el directorio y almacenar el mensaje
    const logsPath = createFolder(folderAlias, message);

    // Respondemos al cliente confirmando que el mensaje se ha recibido y almacenado correctamente
    return res.json({ message: "Mensaje recibido y almacenado exitosamente", logsPath });
});



// Iniciamos el servidor en el puerto especificado
app.listen(PORT, () => {
    console.log("Servidor para mensajes en ejecución en 127.0.0.1:" + PORT);
});
