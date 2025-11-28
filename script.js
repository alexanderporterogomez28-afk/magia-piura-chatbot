const chat = document.getElementById("chat");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

/* ===============================
   1. BASE DE DATOS REAL
   =============================== */

const data = {
    chocolateria: {
        short: "Chocolatería 🍫 — productos destacados:",
        full: [
            "• Bombones artesanales — S/3 c/u",
            "• Chocotejas — S/3.5 c/u",
            "• Mix chocolatero premium — S/12",
            "• Pack degustación — S/15"
        ]
    },
    tabletas: {
        short: "Tabletas de chocolate artesanal 🍫",
        full: [
            "• 60% Nibs caramelizados — S/12",
            "• 49% Pistacho — S/14",
            "• 37% Maracuyá + nibs — S/12",
            "• Especialidades de temporada disponibles"
        ]
    },
    trufas: {
        short: "Trufas gourmet 🍬",
        full: [
            "• Trufa de mucílago — S/3",
            "• Trufa de maracuyá — S/3",
            "• Trufa de mango — S/3",
            "• Trufa de algarrobina — S/3"
        ]
    },
    postresFrios: {
        short: "Postres fríos ❄️",
        full: [
            "• Cheesecake de maracuyá — porción S/10 / mediano S/35 / grande S/55",
            "• Cheesecake de fresa — porción S/10 / mediano S/35 / grande S/55",
            "• Tiramisú — porción S/12 / mediano S/38 / grande S/60"
        ]
    },
    postresHorno: {
        short: "Postres al horno 🔥",
        full: [
            "• Brownie clásico — S/8 porción",
            "• Torta de chocolate — desde S/38",
            "• Pie de pecanas — desde S/45"
        ]
    },
    saludables: {
        short: "Opciones saludables 🌱",
        full: [
            "• Brownie keto — S/10",
            "• Trufas sin azúcar — S/3.5",
            "• Tabletas sin azúcar — S/12"
        ]
    },
    cuchareables: {
        short: "Postres cuchareables 🥄",
        full: [
            "• Mousse de chocolate — S/10",
            "• Crema de cacao — S/12"
        ]
    },
    gustitos: {
        short: "Tus Gustitos favoritos 🧁",
        full: [
            "• Mini brownies — S/4",
            "• Mini chocotejas — S/4",
            "• Bombitas crocantes — S/2.5"
        ]
    }
};

/* ===============================
   2. FUNCIONES DE MENSAJES
   =============================== */

function addMessage(text, sender="bot"){
    const div = document.createElement("div");
    div.classList.add("message", sender);
    div.innerText = text;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}

function showCategory(cat){
    const info = data[cat];

    addMessage(info.short, "bot");

    // botón "ver más"
    const more = document.createElement("div");
    more.classList.add("message", "bot");
    
    const span = document.createElement("span");
    span.innerText = "Ver lista completa";
    span.classList.add("see-more");
    span.onclick = () => showFull(cat);

    more.appendChild(span);
    chat.appendChild(more);
}

function showFull(cat){
    data[cat].full.forEach(item => {
        addMessage(item, "bot");
    });
}

/* ===============================
   3. RESPUESTAS FIJAS
   =============================== */

function botRespond(type){
    if(type === "ubicacion"){
        addMessage("📍 Nos encuentras en:\nCalle Santa María 255, Santa Isabel, Piura.\nTienda presencial — atendemos todos los días.", "bot");
    }
    if(type === "contacto"){
        addMessage("📞 Contáctanos:\nInstagram: @magiapiura\nWhatsApp (Link en bio): https://www.instagram.com/magiapiura/", "bot");
    }
}

/* ===============================
   4. BOTÓN DE CATEGORÍAS
   =============================== */

function selectCategory(cat){
    addMessage("Quiero ver: " + cat, "user");
    setTimeout(() => showCategory(cat), 400);
}

/* ===============================
   5. SIMULACIÓN DE IA (búsqueda por palabras)
   =============================== */

function simulateAI(text){
    const t = text.toLowerCase();

    if(t.includes("precio") || t.includes("cuánto")){
        return "Los precios varían por categoría. Selecciona una arriba para ver los precios exactos. 😊";
    }
    if(t.includes("direccion") || t.includes("ubicacion") || t.includes("donde")){
        return "Estamos en Calle Santa María 255, Santa Isabel, Piura. ¡Te esperamos! 🏪";
    }
    if(t.includes("horario") || t.includes("atienden")){
        return "Atendemos todos los días. Horarios actualizados por Instagram. 😊";
    }
    if(t.includes("producto") || t.includes("catalogo")){
        return "¿Qué categoría deseas ver? Chocolatería, Tabletas, Trufas, Postres fríos, Postres de horno, Saludables, Cuchareables y Gustitos.";
    }

    return "Qué buena pregunta 😄 Te recomiendo elegir una categoría para darte la información exacta.";
}

/* ===============================
   6. ENTRADAS DEL USUARIO
   =============================== */

function processUser(){
    const text = input.value.trim();
    if(!text) return;

    addMessage(text, "user");
    input.value = "";

    setTimeout(() => {
        const reply = simulateAI(text);
        addMessage(reply, "bot");
    }, 500);
}

sendBtn.onclick = processUser;

addMessage("¡Hola! Soy el asistente de Magia Piura 🍫✨ ¿Qué deseas saber hoy?", "bot");
