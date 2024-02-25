const dotenv = require("dotenv")
const fs = require("fs")
dotenv.config()

function getPort() {
    const port = process.env.port

    if (!port) return { success: false, message: "La variable de entorno 'PORT' no existe,\n creala en un archivo .env" }


    return { success: true, message: port }

}


function getStoragePath() {
    const storagePath = process.env.STORAGE_PATH

    if (!storagePath) return { success: false, message: "La variable de entorno 'STORAGE_PATH' no wxiste,\creala en un arhivo .env" }

    else {
        const exists = fs.existsSync(storagePath) //true || false

        if (exists) {
            return { success: true, message: storagePath }
        }
        else {
            return {sucess:false,message:"El directorio que proporcionaste no existe"}
        }
    }
}

module.exports = {getPort,getStoragePath}