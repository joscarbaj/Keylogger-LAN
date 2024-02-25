# KeyLogger LAN

El Keylogger LAN es una herramienta de monitorización que registra las pulsaciones de teclas en una red local. Utiliza un servidor Node.js y un cliente Python para capturar y almacenar las pulsaciones de teclas de manera remota. Este software es útil para supervisar la actividad del teclado en una red local, pero se debe utilizar con responsabilidad y respetando la privacidad de los usuarios.

## Requerimientos

- Tener instalado Node 20.11.1 o versiones similares.
- Tener instalado Python 3.12.2.
- Tener el firewall configurado para permitir la entrada y salida de puertos en la máquina servidor y la cliente.
- Sistema Operativo Windows 10/11 de 64 bits.

## Instalación

Sigue estos pasos para instalar y configurar el proyecto:

1. **Clonar el repositorio desde GitHub:** 

git clone https://github.com/joscarbaj/Keylogger-LAN.git

r

o descargar el repositorio.

2. **Instalar las dependencias del proyecto:**
- En la carpeta raíz, ejecutar:
  ```
  cd ./server  // directorio del servidor
  npm install  // comando para instalar librerías
  cd ../
  cd ./client  // directorio del cliente
  pip install -r requirements.txt  // comando para instalar librerías
  ```

3. **Configurar variables de entorno del servidor y el cliente:**
- En la carpeta raíz:
  - Dirigirse a la carpeta 'server' y crear un archivo `.env` con las siguientes variables de entorno:
    ```
    PORT=5000
    STORAGE_PATH=C:\Users\jose\Desktop\Registros KeyLogger
    ```
    (Nota: `STORAGE_PATH` es la ruta donde quieres almacenar los registros)
  - Dirigirse a la carpeta 'client' y crear un archivo `.env` con las siguientes variables de entorno:
    ```
    SERVER_URL=http://127.0.0.1:5000/messages
    ALIAS=JOSE
    ```
    (Nota: `SERVER_URL` es la dirección IP a la que el cliente se conectará para enviar las pulsaciones, puede ser `localhost + PORT`, IP del servidor + PORT, etc. `ALIAS` es el nombre de la carpeta en la que se guardarán los registros en el servidor.)

4. **Correr el keylogger (servidor y cliente):**
- En la carpeta raíz:
  ```
  cd ./server
  npm start
  ```
  Una vez en marcha el servidor (si se presentan errores, leer el error y corregirlo), entonces ahora ejecutaríamos el cliente en la misma máquina o cualquiera de nuestra red local.
- En el directorio client ejecutamos:
  ```
  python client.py
  ```

### Finalizando

Este es un proyecto sencillo que hice por mera curiosidad, ya que tenía la intriga de saber qué hay detrás de un virus (keylogger).

Por ahora, solo funciona ejecutando el cliente y el servidor en la misma PC, o en 2 PCs dentro de la misma red, pero se puede implementar su uso a través de internet.

> **Nota:** Puede haber problemas con el registro de ciertas teclas debido a que son teclas especiales o extrañas, o también debido al tipo de teclado y cómo la PC cliente interprete los eventos del teclado.


>**Advertencia **Este virus fue desarrollado con fines educativos, no se recomienda su uso comercial.