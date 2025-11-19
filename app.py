from flask import Flask, request
import requests

app = Flask(__name__)

PAGE_ACCESS_TOKEN = "AQUI_TU_TOKEN_DE_META"
VERIFY_TOKEN = "magia_piura"

def obtener_respuesta(texto):
    texto = texto.lower()

    if "chocolate" in texto or "producto" in texto:
        return "En Magia Piura tenemos chocolates artesanales hechos con cacao blanco del Alto Piura 🌱🍫. ¿Quieres ver la lista completa de productos?"

    if "precio" in texto or "cuánto cuesta" in texto:
        return "Nuestros precios varían según el tipo de chocolate. ¿Sobre qué producto deseas saber el precio? 🍫✨"

    if "cacao" in texto or "origen" in texto:
        return "Nuestros chocolates están hechos con cacao blanco del Alto Piura, una variedad única y premiada internacionalmente 🌱✨."

    if "premio" in texto or "ganado" in texto:
        return "Magia Piura ha ganado más de 20 premios nacionales e internacionales por su calidad y proceso artesanal 🏆🍫."

    if "hola" in texto or "buenas" in texto:
        return "¡Hola! Soy el asistente de Magia Piura 🍫✨. ¿En qué puedo ayudarte hoy?"

    return "Puedo ayudarte con información sobre productos, precios, origen del cacao y premios de Magia Piura 🍫✨. ¿Qué deseas saber?"

@app.route('/webhook', methods=['GET'])
def verificar_token():
    token = request.args.get("hub.verify_token")
    reto = request.args.get("hub.challenge")

    if token == VERIFY_TOKEN:
        return reto
    return "Token incorrecto"

@app.route('/webhook', methods=['POST'])
def recibir_mensajes():
    data = request.get_json()

    if "entry" in data:
        for entry in data["entry"]:
            if "messaging" in entry:
                for message_event in entry["messaging"]:
                    if "message" in message_event:
                        sender_id = message_event["sender"]["id"]
                        texto = message_event["message"].get("text", "")

                        respuesta = obtener_respuesta(texto)
                        enviar_mensaje(sender_id, respuesta)

    return "ok", 200

def enviar_mensaje(recipient_id, mensaje):
    url = f"https://graph.facebook.com/v17.0/me/messages?access_token={PAGE_ACCESS_TOKEN}"

    data = {
        "recipient": {"id": recipient_id},
        "message": {"text": mensaje}
    }

    requests.post(url, json=data)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
