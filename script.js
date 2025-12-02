const chatbox = document.getElementById("chatbox");

// Enviar mensaje
function sendMessage() {
    const input = document.getElementById("userInput");
    if (input.value.trim() === "") return;

    addMessage(input.value, "user");
    processMessage(input.value.toLowerCase());
    input.value = "";
}

// Mostrar mensaje
function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.innerHTML = text;
    chatbox.appendChild(msg);
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Respuesta del bot
function botReply(text) {
    addMessage(text, "bot");
}

// Procesar texto
function processMessage(msg) {
    if (msg.includes("hola") || msg.includes("buenas") || msg.includes("qué tal")) {
        showWelcome();
        return;
    }

    if (msg.includes("navidad") || msg.includes("navideños")) {
        startNavidad();
        return;
    }

    if (msg.includes("productos")) {
        showCatalog();
        return;
    }

    if (msg.includes("premios") || msg.includes("historia") || msg.includes("origen")) {
        aboutMagia();
        return;
    }

    if (msg.includes("delivery")) {
        deliveryInfo();
        return;
    }

    if (msg.includes("redes") || msg.includes("instagram") || msg.includes("facebook")) {
        socialMedia();
        return;
    }

    defaultReply();
}

// ---------------------------
// PANTALLA DE INICIO
// ---------------------------
function showWelcome() {
    botReply(`
¡Hola! Bienvenido a <b>Magia Piura</b> 🍫✨  
Estoy aquí para ayudarte con lo que necesites.

Elige una opción:

<span class='btn-option' onclick='startNavidad()'>🎄 Productos Navideños</span>
<span class='btn-option' onclick='showCatalog()'>📦 Catálogo General</span>
<span class='btn-option' onclick='socialMedia()'>📱 Redes Sociales</span>
<span class='btn-option' onclick='deliveryInfo()'>🚚 Delivery</span>
<span class='btn-option' onclick='aboutMagia()'>🏆 Premios y Origen</span>
`);
}

// ---------------------------
// SECCIÓN NAVIDEÑA – FORMATO C
// ---------------------------

let navidadIndex = 0;

const navidadProducts = [
    { name: "🎄 Brownies arbolito", price: "S/8.00 c/u" },
    { name: "🍭 Paletas navideñas", price: "S/7.00 c/u" },
    { name: "🍫 Chocopionono", price: "S/28.00" },
    { name: "🎁 Galletas decoradas", price: "S/6.00 c/u" },
    { name: "🎂 Mini tortas", price: "S/26.00" },
    { name: "🍩 Donitas festivas", price: "S/5.00 c/u" },
    { name: "⛄ Cakepops", price: "S/7.00 c/u" }
];

function startNavidad() {
    navidadIndex = 0;
    botReply(`
Tenemos <b>7 productos navideños</b> 🎄  
¿Deseas verlos uno por uno?

<span class='btn-option' onclick='showNavidadItem()'>Sí, mostrar</span>
<span class='btn-option' onclick='botReply("Perfecto 😊, ¿qué más deseas saber?")'>No, gracias</span>
`);
}

function showNavidadItem() {
    if (navidadIndex >= navidadProducts.length) {
        botReply("🎄 ¡Esos son todos los productos navideños! ¿Deseas algo más?");
        return;
    }

    const p = navidadProducts[navidadIndex];

    botReply(`
<b>${navidadIndex + 1} / 7</b><br>
<b>${p.name}</b><br>
Precio: ${p.price}<br><br>

<span class='btn-option' onclick='nextNavidad()'>➡️ Siguiente</span>
<span class='btn-option' onclick='botReply("¡Listo! Si deseas ver otra categoría, solo dime 😊")'>⏹️ Salir</span>
`);
}

function nextNavidad() {
    navidadIndex++;
    showNavidadItem();
}

// ---------------------------
// CATÁLOGO GENERAL
// ---------------------------
function showCatalog() {
    botReply(`
Elige una categoría 👇:

<span class='btn-option' onclick='chocolateria()'>🍫 Chocolatería</span>
<span class='btn-option' onclick='trufas()'>🍄 Trufas</span>
<span class='btn-option' onclick='postresFri()'>🍰 Postres Fríos</span>
<span class='btn-option' onclick='postresHorno()'>🎂 Tortas y Tartas</span>
<span class='btn-option' onclick='saludables()'>🥑 Saludables</span>
<span class='btn-option' onclick='cuchareables()'>🥄 Cuchareables</span>
<span class='btn-option' onclick='gustitos()'>✨ Gustitos</span>
`);
}

// ---------------------------
// REDES SOCIALES
// ---------------------------
function socialMedia() {
    botReply(`
¡Nos encanta compartir magia contigo! ✨  
En nuestras redes subimos contenido creativo, fotos deliciosas y novedades.

📌 Puedes encontrarnos como:

<b>Instagram:</b> @magiapiura  
<b>Facebook:</b> Magia Piura  

¡Te esperamos para que sigas toda nuestra magia! 💛
`);
}

// ---------------------------
// DELIVERY
// ---------------------------
function deliveryInfo() {
    botReply(`
¡Claro! 🚚✨  
Contamos con delivery por dos apps súper prácticas:

<b>📌 Pedidos Ya</b><br>
<b>📌 Rappi</b><br>

Ambos funcionan en toda la ciudad de Piura y llegan rapidísimo.  
Si deseas que te ayudemos a elegir o hacer tu pedido, solo escríbenos por aquí 😊`);
}

// ---------------------------
// PREMIOS Y ORIGEN
// ---------------------------
function aboutMagia() {
    botReply(`
<b>🏆 PREMIOS DE MAGIA PIURA</b><br>
• Más de 20 premios nacionales e internacionales.<br>
• Reconocimiento en International Chocolate Awards.<br>
• Premios por barras, bombonería y cacao piurano.<br><br>

<b>🌱 ORIGEN</b><br>
Somos una marca piurana que trabaja con cacao blanco, uno de los más finos del mundo.  
Nuestra chocolatería es 100% artesanal y hecha con cariño. 🍫💛`);
}

// ---------------------------
// MENSAJE DEFAULT
// ---------------------------
function defaultReply() {
    botReply("Puedo ayudarte con: <br>🎄 Navideños<br>📦 Productos<br>🚚 Delivery<br>📱 Redes<br>🏆 Premios<br><br>¿Qué deseas saber?");
}
