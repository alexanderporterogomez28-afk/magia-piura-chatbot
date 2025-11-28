const chatbox = document.getElementById("chatbox");

function addMessage(text, sender) {
    const div = document.createElement("div");
    div.classList.add("msg", sender);
    div.innerText = text;
    chatbox.appendChild(div);
    chatbox.scrollTop = chatbox.scrollHeight;
}

document.addEventListener("DOMContentLoaded", () => {
    addMessage("¡Hola! 👋 Soy el asistente virtual de *Magia Piura*. ¿En qué puedo ayudarte hoy?", "bot");
});


// =============================
// BASE DE DATOS COMPLETA
// =============================

const productos = [

"CHOCOCREAM – S/10.00",

"BOMBONES Caja x6 – S/27.00",
"BOMBONES Caja x12 – S/50.00",

"CHOCOPECANS Unidad – S/10.00",
"CHOCOPECANS Caja x4 – S/40.00",

"BESO DE MOZA Maracuyá – S/8.00",
"BESO DE MOZA Lúcuma – S/8.00",
"BESO DE MOZA Mora – S/10.00",

"Barrita de coco 72% – S/12.00",
"Barrita de coco 49% – S/12.00",

"Dinosaurios con kañiwa – S/16.00",
"Chocolate con sal de maras – S/15.00",
"Hojas de chocolate – S/20.00",

"Choco sushi (caja 5 sabores) – S/37.00",

// Trufas
"Trufas unidad – S/5.00",
"Trufas caja x2 – S/10.00",
"Trufas caja x6 – S/29.00",
"Trufas caja x12 – S/55.00",

// Postres fríos
"Cheesecake New York porción – S/18.00",
"Cheesecake New York mediano – S/75.00",
"Cheesecake New York grande – S/135.00",

"Merengado de fresa porción – S/17.00",
"Merengado de fresa mediano – S/76.00",

"Tres leches porción – S/17.00",
"Tres leches mediano – S/46.00",
"Tres leches grande – S/82.00",

"Cheesecake brownie porción – S/17.00",
"Cheesecake brownie mediano – S/62.00",
"Cheesecake brownie grande – S/115.00",

"Pie de limón porción – S/18.00",
"Pie de limón mediano – S/65.00",
"Pie de limón grande – S/115.00",

"Capricho – S/14.00",
"Dulce fusión – S/14.00",
"Pavlova – S/14.00",
"Derrumbado de chirimoya – S/18.00",
"Teatula porción – S/17.00",
"Teatula grande – S/95.00",

"Helado de café porción – S/18.00",
"Helado de café grande – S/130.00",

// Saludables
"Donuts saludables – S/10.00",
"Torta vegana – S/130.00",
"Torta sin azúcar – S/165.00",

// Gustitos
"Brownie – S/8.00",
"Fruta deshidratada – S/6.00",

"Alfajor unidad – S/7.00",
"Alfajor caja x3 – S/21.00",

"Paquete de galletas – S/8.00",
"Mini queque – S/10.00",
"Galletones – S/8.00",
"Suspiros – S/8.50",

"Labiales pack x3 – S/6.50",
];


// =============================
// RESPUESTAS RÁPIDAS
// =============================

function sendQuick(option) {
    if (option === "productos") {
        addMessage("📋 *Lista completa de productos y precios:*\n\n" + productos.join("\n"), "bot");
    }

    if (option === "delivery") {
        addMessage(
            "🚚 *Delivery disponible:*\n\n" +
            "🟣 PedidosYa:\nhttps://www.pedidosya.com.pe/restaurantes/piura/magia-piura-menu\n\n" +
            "🟠 Rappi:\nhttps://www.rappi.com.pe/restaurantes/3338-magia-piura",
            "bot"
        );
    }

    if (option === "premios") {
        addMessage(
            "🏆 *Premios y reconocimientos:*\nMagia Piura ha obtenido más de 20 premios nacionales e internacionales por innovación, calidad del cacao piurano y propuestas artesanales.",
            "bot"
        );
    }

    if (option === "historia") {
        addMessage(
            "📖 *Historia de Magia Piura:*\nMagia Piura nació como un emprendimiento local dedicado a resaltar el cacao piurano y los sabores de la región, destacando por su elaboración artesanal y propuestas innovadoras.",
            "bot"
        );
    }

    if (option === "contacto") {
        addMessage(
            "📲 *Contacto:*\n" +
            "📍 Dirección: Calle Santa María 255, Santa Isabel, Piura\n" +
            "🕒 Horario: 9:00 am a 9:00 pm\n\n" +
            "Instagram: https://www.instagram.com/magiapiura/\n" +
            "Facebook: https://web.facebook.com/magia.piura/\n" +
            "WhatsApp: https://wa.me/51936752791",
            "bot"
        );
    }
}


// =============================
// CHAT NORMAL
// =============================

function chatbotResponse(msg) {
    msg = msg.toLowerCase();

    if (msg.includes("hola") || msg.includes("buenas")) {
        return "¡Hola! ¿Qué antojito dulce se te apetece hoy? 🍫✨";
    }

    if (msg.includes("precio") || msg.includes("producto")) {
        return "Puedes ver la *lista completa* tocando el botón *Productos & Precios*. 🍫";
    }

    if (msg.includes("delivery")) {
        return "Puedes tocar el botón *Delivery* para ver todas las opciones disponibles. 🚚";
    }

    return "No estoy seguro de eso 🤔. Pero puedes usar los botones para ayudarte más rápido. 💛";
}


// =============================
// ENVIAR MENSAJE
// =============================

function sendMsg() {
    const input = document.getElementById("userInput");
    const text = input.value.trim();

    if (text === "") return;

    addMessage(text, "user");

    const botReply = chatbotResponse(text);
    setTimeout(() => addMessage(botReply, "bot"), 300);

    input.value = "";
}
