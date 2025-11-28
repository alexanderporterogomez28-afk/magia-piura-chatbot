const chatbox = document.getElementById("chatbox");

function addMessage(text, sender) {
    const div = document.createElement("div");
    div.classList.add("msg", sender);
    div.innerText = text;
    chatbox.appendChild(div);
    chatbox.scrollTop = chatbox.scrollHeight;
}

document.addEventListener("DOMContentLoaded", () => {
    addMessage("¡Hola! 👋 Soy el asistente de *Magia Piura*. ¿En qué puedo ayudarte hoy?", "bot");
});

// -----------------------------------------------
// BASE DE DATOS DE PRODUCTOS DE MAGIA PIURA
// -----------------------------------------------

const productos = {
"Chococream": "Chocolate 72% con crema de avellanas y maní – S/10",
"Bombones": "Caja x6 S/27 | Caja x12 S/50",
"Chocopecans": "Unidad S/10 | Caja x4 S/40",
"Besos de moza maracuyá": "S/8",
"Besos de moza lúcuma": "S/8",
"Besos de moza mora": "S/10",
"Barrita de coco 72%": "S/12",
"Barrita de coco 49%": "S/12",
"Dinosaurios con kañiwa": "S/16",
"Chocolate con sal de maras": "S/15",
"Hojas de chocolate": "S/20 c/u",
"Choco sushi": "Caja x5 sabores – S/37",

// TRUFAS
"Trufas unidad": "S/5",
"Trufas caja x2": "S/10",
"Trufas caja x6": "S/29",
"Trufas caja x12": "S/55",

// POSTRES FRÍOS
"Cheesecake New York porción": "S/18",
"Cheesecake New York mediano": "S/75",
"Cheesecake New York grande": "S/135",

"Merengado de fresa porción": "S/17",
"Merengado de fresa mediano": "S/76",

"Tres leches porción": "S/17",
"Tres leches mediano": "S/46",
"Tres leches grande": "S/82",

"Cheesecake brownie porción": "S/17",
"Cheesecake brownie mediano": "S/62",
"Cheesecake brownie grande": "S/115",

"Pie limón porción": "S/18",
"Pie limón mediano": "S/65",
"Pie limón grande": "S/115",

// MUCHOS MÁS POSTRES…
"Capricho": "S/14",
"Dulce fusión": "S/14",
"Pavlova": "S/14",
"Derrumbado de chirimoya": "S/18",
"Teatula porción": "S/17",
"Teatula grande": "S/95",
"Helado de café porción": "S/18",
"Helado de café grande": "S/130",

// SALUDABLES
"Donuts saludables": "S/10",
"Torta vegana": "S/130",
"Torta sin azúcar": "S/165",

// GUSTITOS
"Brownie": "S/8",
"Fruta deshidratada": "S/6",
"Alfajor unidad": "S/7",
"Alfajor caja x3": "S/21",
"Paquete de galletas": "S/8",
"Mini queque": "S/10",
"Galletones": "S/8",
"Suspiros": "S/8.50",
"Labiales pack x3": "S/6.50",
};

// -----------------------------------------------
// INFORMACIÓN EXTRA
// -----------------------------------------------

const infoExtra = {
    direccion: "📍 Calle Santa María 255, Urb. Santa Isabel – Piura.",
    horario: "🕒 Atendemos todos los días de 9:00 am a 9:00 pm.",
    historia: "Magia Piura nació como un emprendimiento de chocolatería artesanal piurana, inspirada en el cacao de la región y los sabores locales. Con el tiempo creció hasta convertirse en una de las chocolaterías más reconocidas de la ciudad.",
    premios: "🏆 Magia Piura ha recibido reconocimientos por innovación en postres, uso de cacao regional y participación destacada en ferias gastronómicas.",
    instagram: "📸 Instagram: https://www.instagram.com/magiapiura/",
    facebook: "📘 Facebook: https://web.facebook.com/magia.piura/",
    whatsapp: "📲 WhatsApp: https://wa.me/51936752791",

    delivery: 
        "🚚 *Delivery disponible*:\n\n" +
        "🟣 PedidosYa:\nhttps://www.pedidosya.com.pe/restaurantes/piura/magia-piura-menu\n\n" +
        "🟠 Rappi:\nhttps://www.rappi.com.pe/restaurantes/3338-magia-piura",
};

// -----------------------------------------------
// RESPUESTAS DEL CHATBOT
// -----------------------------------------------

function chatbotResponse(msg) {
    msg = msg.toLowerCase();

    if (msg.includes("hola") || msg.includes("buenas")) {
        return "¡Hola! ¿Qué dulce antojito se te antoja hoy? 🍫✨";
    }

    if (msg.includes("direccion") || msg.includes("ubicación")) {
        return infoExtra.direccion;
    }

    if (msg.includes("horario")) {
        return infoExtra.horario;
    }

    if (msg.includes("historia") || msg.includes("origen")) {
        return infoExtra.historia;
    }

    if (msg.includes("premio") || msg.includes("galardon")) {
        return infoExtra.premios;
    }

    if (msg.includes("delivery")) {
        return infoExtra.delivery;
    }

    if (msg.includes("facebook")) {
        return infoExtra.facebook;
    }

    if (msg.includes("instagram")) {
        return infoExtra.instagram;
    }

    if (msg.includes("whatsapp") || msg.includes("wsp")) {
        return infoExtra.whatsapp;
    }

    // BUSCAR PRODUCTOS
    for (let p in productos) {
        if (msg.includes(p.toLowerCase())) {
            return `🍫 ${p}\nPrecio: ${productos[p]}`;
        }
    }

    if (msg.includes("menu") || msg.includes("productos") || msg.includes("lista")) {
        return "Puedes escribirme el nombre de cualquier producto y te daré su precio. 😄";
    }

    return "¡Qué buena pregunta! Escríbeme un poquito más específico para ayudarte mejor. ✨";
}

// -----------------------------------------------
// ENVIAR MENSAJE
// -----------------------------------------------

function sendMsg() {
    const input = document.getElementById("userInput");
    const text = input.value.trim();

    if (text === "") return;

    addMessage(text, "user");

    const botReply = chatbotResponse(text);
    setTimeout(() => addMessage(botReply, "bot"), 300);

    input.value = "";
}
