const chatBox = document.getElementById("chat-box");

function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.innerText = text;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Respuestas del chatbot (MODIFICABLES)
const respuestas = {
    productos: "🍫 **Nuestros productos Magia Piura incluyen:**\n- Chocolates al 70% cacao blanco\n- Bombones artesanales\n- Cajas de regalo\n- Chocotejas gourmet\n- Tabletas de sabores\n\n¿Quieres ver precios?",
    
    precios: "💲 **Precios aproximados:**\n- Bombones: desde S/ 3\n- Tabletas: desde S/ 12\n- Cajas premium: S/ 25 - S/ 65\n\nLos precios pueden variar, ¿quieres algo específico?",

    origen: "🌱 Nuestro cacao es **cacao blanco del Alto Piura**, reconocido por su aroma frutal y suavidad. Es cultivado por agricultores locales con procesos artesanales.",

    premios: "🏆 Magia Piura ha ganado más de **20 premios nacionales e internacionales**, siendo reconocida por la calidad y sabor único de sus chocolates artesanales.",

    ubicacion: "📍 Estamos en **Piura, Perú**. Atendemos por redes sociales y delivery. Muy pronto tienda física.",

    contacto: "📞 Escríbenos por Instagram: @magiapiura\n📲 WhatsApp: +51 999 999 999"
};

function sendOption(option) {
    addMessage("Tocaste: " + option, "user");
    setTimeout(() => {
        addMessage(respuestas[option], "bot");
    }, 500);
}

// Mensaje inicial
addMessage("¡Hola! Soy el asistente de Magia Piura. ¿Qué deseas saber hoy?", "bot");
