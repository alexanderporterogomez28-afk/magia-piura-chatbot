const chatbox = document.getElementById("chatbox");

// -------------------------
// UTILIDADES
// -------------------------

function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.innerHTML = text;
    chatbox.appendChild(msg);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function botReply(text) {
    addMessage(text, "bot");
}

function escapeHtml(s) {
    return s.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
}

function sendMessage() {
    const input = document.getElementById("userInput");
    if (!input.value.trim()) return;
    addMessage(escapeHtml(input.value), "user");
    processMessage(input.value.toLowerCase());
    input.value = "";
}

// -------------------------
// MENÚ PRINCIPAL
// -------------------------

function showWelcome() {
    botReply(`
<b>🍫 ¡Bienvenido a Magia Piura! ✨</b><br><br>
Estoy aquí para ayudarte. ¿Qué deseas revisar hoy?<br><br>

<span class="btn-option" onclick="startNavidad()">🎄 Productos Navideños</span>
<span class="btn-option" onclick="showCatalog()">📦 Catálogo General</span>
<span class="btn-option" onclick="socialMedia()">📱 Redes Sociales</span>
<span class="btn-option" onclick="deliveryInfo()">🚚 Delivery</span>
<span class="btn-option" onclick="aboutMagia()">🏆 Premios y Origen</span>
    `);
}

document.addEventListener("DOMContentLoaded", () => {
    botReply("¡Hola! Soy el asistente de Magia Piura 🍫✨. Escribe <b>hola</b> para comenzar o usa los botones.");
});

// -------------------------
// PROCESAMIENTO DE TEXTO
// -------------------------

function processMessage(msg) {

    if (msg.includes("hola") || msg.includes("buenas")) return showWelcome();
    if (msg.includes("navidad")) return startNavidad();
    if (msg.includes("producto") || msg.includes("catálogo")) return showCatalog();
    if (msg.includes("redes") || msg.includes("instagram") || msg.includes("facebook")) return socialMedia();
    if (msg.includes("delivery")) return deliveryInfo();
    if (msg.includes("premio") || msg.includes("historia") || msg.includes("origen")) return aboutMagia();

    defaultReply();
}

// -------------------------
// NAVIDEÑOS – SECUENCIA PREMIUM
// -------------------------

let navidadIndex = 0;

const navidadProducts = [
    { name: "🎄 Brownies arbolito", price: "S/8.00 c/u", desc: "Brownies decorados con motivos navideños." },
    { name: "🍭 Paletas navideñas", price: "S/7.00 c/u", desc: "Paletas de ganache con toppings festivos." },
    { name: "🍫 Chocopionono", price: "S/28.00", desc: "Pionono cubierto y relleno con chocolate." },
    { name: "🍪 Galletas decoradas", price: "S/6.00 c/u", desc: "Galletas temáticas hechas y decoradas a mano." },
    { name: "🎂 Mini tortas navideñas", price: "S/26.00", desc: "Mini tortitas especiales para regalos." },
    { name: "🍩 Donitas festivas", price: "S/5.00 c/u", desc: "Mini donas con glasé y decoración navideña." },
    { name: "⛄ Cakepops navideños", price: "S/7.00 c/u", desc: "Cakepops temáticos, perfectos para detalles." }
];

function startNavidad() {
    navidadIndex = 0;

    botReply(`
<b>🎄 Colección Navideña 2024</b><br><br>
Tenemos <b>7 productos</b> hechos especialmente para esta temporada.<br><br>

¿Quieres verlos uno por uno?<br><br>

<span class="btn-option" onclick="showNavidadItem()">✨ Sí, mostrar</span>
<span class="btn-option" onclick="botReply('Perfecto 😊 ¿Qué más deseas saber?')">⏹️ No por ahora</span>
`);
}

function showNavidadItem() {
    if (navidadIndex >= navidadProducts.length) {
        botReply("🎄 ¡Ya viste toda la colección navideña! ¿Deseas ver otra categoría?");
        return;
    }

    const p = navidadProducts[navidadIndex];

    botReply(`
<b>${navidadIndex + 1} / 7</b><br><br>

<div class="product-card">
<b>${p.name}</b><br>
<span class="price">${p.price}</span><br>
${p.desc}
</div>

<span class="btn-option" onclick="nextNavidad()">➡️ Siguiente</span>
<span class="btn-option" onclick="botReply('¡Listo! Si deseas ver otra categoría, solo dime 😊')">⏹️ Salir</span>
`);
}

function nextNavidad() {
    navidadIndex++;
    showNavidadItem();
}

// -------------------------
// CATÁLOGO GENERAL ORGANIZADO
// -------------------------

function showCatalog() {
    botReply(`
<b>📦 Catálogo General</b><br><br>
Selecciona una categoría:<br><br>

<span class="btn-option" onclick="displayCategory('Chocolatería')">🍫 Chocolatería</span>
<span class="btn-option" onclick="displayCategory('Trufas')">🍄 Trufas</span>
<span class="btn-option" onclick="displayCategory('Postres Fríos')">🍰 Postres Fríos</span>
<span class="btn-option" onclick="displayCategory('Pasteles')">🎂 Pasteles</span>
<span class="btn-option" onclick="displayCategory('Saludables')">🥑 Saludables</span>
<span class="btn-option" onclick="displayCategory('Cuchareables')">🥄 Cuchareables</span>
<span class="btn-option" onclick="displayCategory('Gustitos')">✨ Gustitos</span>
`);
}

const categorias = {
    "Chocolatería": [
        "CHOCOCREAM – S/10.00",
        "BOMBONES (x6) – S/27.00",
        "BOMBONES (x12) – S/50.00",
        "CHOCOPECANS – S/10.00",
        "CHOCOPECANS (x4) – S/40.00",
        "BESOS DE MOZA (maracuyá) – S/8.00",
        "BESOS DE MOZA (lúcuma) – S/8.00",
        "BESOS DE MOZA (mora) – S/10.00",
        "BARRITA DE COCO – S/12.00",
        "DINOSAURIOS CON KANIWA – S/16.00",
        "CHOCOLATE CON SAL DE MARAS – S/15.00",
        "HOJAS DE CHOCOLATE – S/20.00",
        "CHOCO SUSHI – S/37.00"
    ],

    "Trufas": [
        "Unidad – S/5.00",
        "Caja x2 – S/10.00",
        "Caja x6 – S/29.00",
        "Caja x12 – S/55.00"
    ],

    "Postres Fríos": [
        "CHEESECAKE NEW YORK – S/18 / S/75 / S/135",
        "MERENGADO DE FRESA – S/17 / S/76",
        "TRES LECHES – S/17 / S/46 / S/82",
        "CHEESECAKE DE BROWNIE – S/17 / S/62 / S/115",
        "PIE DE LIMÓN – S/18 / S/65 / S/115",
        "TIRAMISÚ – S/17 / S/72 / S/150",
        "PIE DE MARACUYÁ – S/18 / S/75 / S/135",
        "TROPICAL DE PIÑA – S/17 / S/100",
        "PIONONO CHOCOLATE/CHIRIMOYA – S/17 / S/75 / S/130",
        "MOUSSE DE CHOCOLATE – S/18 / S/75 / S/135",
        "MOUSSE DE LÚCUMA – S/17 / S/65 / S/115",
        "MOUSSE DE MORA – S/18",
        "CHEESECAKE PISCO SOUR – S/85 / S/160"
    ],

    "Pasteles": [
        "RED VELVET – S/17 / S/26 / S/62 / S/105",
        "PIE DE PECANAS – S/17 / S/70 / S/120",
        "TORTA DE CHOCOLATE – S/28 / S/51 / S/100",
        "TSUNAMI – S/70 / S/125",
        "TURRÓN DE CHOCOLATE – S/65 / S/120",
        "PRALINÉ DE PECANAS – S/70 / S/125"
    ],

    "Saludables": [
        "DONUTS SALUDABLES – S/10.00",
        "TORTA VEGANA – S/130.00",
        "TORTA SIN AZÚCAR – S/165.00"
    ],

    "Cuchareables": [
        "CAPRICHO – S/14.00",
        "DULCE FUSIÓN – S/14.00",
        "PAVLOVA – S/14.00",
        "DERRUMBADO DE CHIRIMOYA – S/18.00",
        "TEATULA – S/17 / S/95",
        "HELADO DE CAFÉ – S/18 / S/130"
    ],

    "Gustitos": [
        "BROWNIE – S/8.00",
        "FRUTA DESHIDRATADA – S/6.00",
        "ALFAJORES – S/7 / S/21",
        "PAQUETE DE GALLETAS – S/8.00",
        "MINI QUEQUE – S/10.00",
        "GALLETONES – S/8.00",
        "SUSPIROS – S/8.50",
        "LABIALES PACK – S/6.50"
    ]
};

function displayCategory(cat) {
    const items = categorias[cat];

    botReply(`
<b>${cat}</b><br>
<i>Mostrando productos uno por uno...</i><br><br>
    `);

    items.forEach((p, i) => {
        setTimeout(() => {
            botReply(`<div class="product-card">${p}</div>`);
        }, 300 * (i + 1));
    });

    setTimeout(() => {
        botReply("¿Deseas ver otra categoría o consultar algo más?");
    }, 300 * (items.length + 1));
}

// -------------------------
// REDES
// -------------------------

function socialMedia() {
    botReply(`
<b>📱 Redes Sociales</b><br><br>
En nuestras redes compartimos fotos, videos, novedades y lanzamientos.<br><br>

📌 <b>Instagram:</b> @magiapiura<br>
📌 <b>Facebook:</b> Magia Piura<br><br>

¡Te esperamos para que conozcas toda la magia del cacao blanco! ✨
`);
}

// -------------------------
// DELIVERY
// -------------------------

function deliveryInfo() {
    botReply(`
<b>🚚 Delivery Magia Piura</b><br><br>
Trabajamos con:<br><br>
• <b>Rappi</b><br>
• <b>Pedidos Ya</b><br><br>

Ambos servicios son rápidos y cubren toda la ciudad de Piura.<br>
Si deseas, puedo ayudarte a elegir tus productos antes de pedir 😊
`);
}

// -------------------------
// PREMIOS Y ORIGEN
// -------------------------

function aboutMagia() {
    botReply(`
<b>🏆 Premios y Reconocimientos</b><br>
• Más de 20 premios nacionales e internacionales.<br>
• Reconocidos por International Chocolate Awards.<br>
• Destacados por la calidad del cacao blanco piurano.<br><br>

<b>🌱 Origen</b><br>
Magia Piura nace del cacao blanco del Alto Piura, uno de los más finos del mundo.  
Valoramos la tradición, el trabajo artesanal y la calidad del cacao.
`);
}

// -------------------------
// DEFAULT
// -------------------------

function defaultReply() {
    botReply("Puedo ayudarte con: 🎄 Navideños, 📦 Catálogo, 🚚 Delivery, 📱 Redes, 🏆 Premios. ¿Qué deseas ver?");
}
