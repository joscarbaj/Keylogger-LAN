#KeyLogger LAN
El Keylogger LAN es una herramienta de monitorización que registra las pulsaciones de teclas en una red local. Utiliza un servidor Node.js y un cliente Python para capturar y almacenar las pulsaciones de teclas de manera remota. Este software es útil para supervisar la actividad del teclado en una red local, pero se debe utilizar con responsabilidad y respetando la privacidad de los usuarios
## Requerimientos
- Tener instalado Node 20.11.1 o similares
- Tener instalado Python 3.12.2
- Tener el firewall configurado para permitir la entrada y salida de puertos en la máquina servidor y la cliente
- Sistema Operativo Windows 10/11 de 64 bits

## Instalación

Sigue estos pasos para instalar y configurar el proyecto:

1. **Clonar el repositorio desde GitHub:** `git clone http:/usuario/keylogger` o descargar el repositorio

2. **Instalar las dependencias del proyecto:**
   - En la carpeta raíz, ejecutar:
     - `cd ./server` (directorio del servidor)
     - `npm install` (comando para instalar librerías)
     - `cd ../`
     - `cd ./client` (directorio del cliente)
     - `pip install -r requirements.txt` (comando para instalar librerías)

3. **Configurar variables de entorno del servidor y el cliente:**
   - En la carpeta raíz:
     - Dirigirse a la carpeta 'server' y crear un archivo `.env` con las siguientes variables de entorno:
       - Ejemplo: `PORT=5000`
       - `STORAGE_PATH=C:\Users\jcarb\Desktop\Registros KeyLogger` (nota: `STORAGE_PATH` es la ruta donde quieres almacenar los registros)
     - Dirigirse a la carpeta 'client' y crear un archivo `.env` con las siguientes variables de entorno:
       - `SERVER_URL=http://127.0.0.1:5000/messages`
	   `ALIAS=JOSE` (nota: `SERVER_URL` es la dirección IP a la que el cliente se conectará para enviar las pulsaciones, puede ser `localhost + PORT`, IP del servidor + PORT, etc, `ALIAS` es el nombre de la carpeta en la que guardaran los registros en el servidor.)

4. **Correr el keylogger (servidor y cliente):**
	- No situamos en la carpeta raiz:
	`cd ./server`
	`npm run dev`
	- Una vez en marcha el servidor(si se presentan errores leer el error y corregirlo) entonces ahora ejecutariamos el cliente en la misma maquina o cualquiera de nuestra red local

	- En  el directorio client ejecutamos:
	`python client.py`

### Finalizando
 Este es un proyecto sencillo que lo hice por mera curiosidad ya que tenia la intriga de saber que es lo quues lo que es lo que hay detras de un virus (keylogger).
 
Y de momento sol funciona ejecutando el cliente y servidor en la misma pc,en 2 pcs dentro de las misma red,pero se puede implementar su uso a traves de internet
**Este virus fue desarollado por meros fines educativos no se recomienda su uso comercial **