const fs = require("fs");
const path = require("path");

// Función para crear el directorio y almacenar el mensaje en el archivo de registros
function createFolder(folderPath, message) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }

    // Obtenemos la fecha actual
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const monthPath = path.join(folderPath, month.toString());
    const dayPath = path.join(monthPath, day.toString());

    // Creamos los directorios necesarios de manera recursiva si no existen
    [monthPath, dayPath].forEach(dir => {
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    });

    // Ruta del archivo de registros
    const logsPath = path.join(dayPath, "logs.txt");

    // Agregamos el mensaje al archivo de registros
    if (message !== "<delete>") {
        fs.appendFileSync(logsPath, `${message}`);
    }
    else //si es una tecla de borrar
    {
        eliminarCaracter(logsPath)
    }


    return logsPath;
}


function eliminarCaracter(ruta) {
    fs.readFile(ruta, "utf-8", (err, data) => {
        if (err) {
            console.error("Error leyendo el arhivo");
            return;
        }

        const nuevoArchivo = data.slice(0, -1)
        fs.writeFile(ruta, nuevoArchivo, "utf-8", (err) => {
            if (err) {
                console.error("Error escribiendo el arhivo");
                return;
            }
            console.log("Ultimo caracter eliminado");
        })
    })
}

module.exports =  {createFolder,eliminarCaracter}