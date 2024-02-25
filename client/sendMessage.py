import requests
import json
def sendMessage(message,alias,URL):
    global MESSAGE  # acceder a la variable global message

    data = {"message": message,"alias":alias}
    

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

    except requests.exceptions.ConnectionError as e:
        print("Error al conectar con el servidor")
    except requests.exceptions.HTTPError as e:
        print("HTTP error al hacer la solicutud")
    except requests.exceptions.RequestException as e:
        print("Error al enviar la solcitud desde el cliente python")

   