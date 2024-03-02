Enviador de Mensajes por Teclas en LAN

El Enviador de Mensajes por Teclas en LAN es una herramienta que envía mensajes capturados mediante pulsaciones de teclas en una red local. Utiliza un servidor Node.js y un cliente Python para capturar y enviar los mensajes de manera remota. Este software es útil para enviar mensajes entre dispositivos en una red local, pero se debe utilizar con responsabilidad y respetando la privacidad de los usuarios.
Requerimientos

    Tener instalado Node.js 20.11.1 o versiones similares.
    Tener instalado Python 3.12.2.
    Tener el firewall configurado para permitir la entrada y salida de puertos en la máquina servidor y cliente.
    Sistema Operativo Windows 10/11 de 64 bits.

Instalación

Sigue estos pasos para instalar y configurar el proyecto:

    Clonar el repositorio desde GitHub:

bash

git clone https://github.com/joscarbaj/Keylogger-LAN.git

O descargar el repositorio.

    Instalar las dependencias del proyecto:
        En la carpeta raíz, ejecutar:

bash

cd ./server  # directorio del servidor
npm install  # comando para instalar librerías
cd ../
cd ./client  # directorio del cliente
pip install -r requirements.txt  # comando para instalar librerías

    Configurar variables de entorno del cliente:
        En la carpeta raíz, dirigirse a la carpeta 'client' y crear un archivo .env con las siguientes variables de entorno:

plaintext

SERVER_URL=http://127.0.0.1:5000/messages
ALIAS=JOSE

(Nota: SERVER_URL es la dirección IP a la que el cliente se conectará para enviar las pulsaciones, puede ser localhost + PORT, IP del servidor + PORT, etc. ALIAS es el nombre de la carpeta en la que se guardarán los registros en el servidor.)

    Correr el enviador de mensajes (cliente):
        En la carpeta raíz, en el directorio client ejecutamos:

bash

python client.py

Finalizando

Este es un proyecto sencillo que permite enviar mensajes entre dispositivos en una red local mediante pulsaciones de teclas.

Por ahora, solo funciona ejecutando el cliente en la misma PC o en PCs dentro de la misma red local.

    Advertencia: Este software fue desarrollado con fines educativos, no se recomienda su uso comercial.