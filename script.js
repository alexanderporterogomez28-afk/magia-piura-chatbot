const chatbox = document.getElementById("chatbox");

function sendMessage() {
    const input = document.getElementById("userInput");
    if (input.value.trim() === "") return;

    addMessage(input.value, "user");
    processMessage(input.value.toLowerCase());
    input.value = "";
}

function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.innerHTML = text;
    chatbox.appendChild(msg);
    chatbox.scrollTop = chatbox.scrollHeight;
}

// -------------------------
// BOT RESPUESTAS
// -------------------------

function processMessage(msg) {

    if (msg.includes("hola") || msg.includes("buenas")) {
        botReply("¡Hola! Bienvenido a <b>Magia Piura</b> 🍫✨ ¿En qué puedo ayudarte?<br><br>Opciones:<br><span class='btn-option' onclick='showCatalog()'>📦 Ver Productos</span><span class='btn-option' onclick='aboutMagia()'>🏆 Premios / Origen</span><span class='btn-option' onclick='infoTienda()'>📍 Información de tienda</span>");
        return;
    }

    if (msg.includes("producto") || msg.includes("catálogo") || msg.includes("catalogo")) {
        showCatalog();
        return;
    }

    if (msg.includes("premio") || msg.includes("historia") || msg.includes("origen")) {
        aboutMagia();
        return;
    }

    if (msg.includes("tienda") || msg.includes("dirección") || msg.includes("horario")) {
        infoTienda();
        return;
    }

    defaultReply(msg);
}

function botReply(text) {
    addMessage(text, "bot");
}

// ---------------------------
// CATALOGO OPCIÓN C
// ---------------------------

function showCatalog() {
    botReply(`
Elige una categoría para ver sus productos:

<span class='btn-option' onclick='chocolateria()'>🍫 Chocolatería</span>
<span class='btn-option' onclick='trufas()'>🍄 Trufas</span>
<span class='btn-option' onclick='postresFri()'>🍰 Postres Fríos</span>
<span class='btn-option' onclick='postresHorno()'>🎂 Postres al Horno</span>
<span class='btn-option' onclick='saludables()'>🥑 Saludables</span>
<span class='btn-option' onclick='cuchareables()'>🥄 Cuchareables</span>
<span class='btn-option' onclick='gustitos()'>✨ Gustitos</span>
    `);
}

function chocolateria() {
    botReply(`<b>🍫 CHOCOLATERÍA</b><br><br>
<b>CHOCOCREAM</b> – S/10.00<br>Chocolate 72% relleno de crema de avellanas y maní.<br><br>

<b>BOMBONES</b><br>
Caja x6: S/27.00<br>
Caja x12: S/50.00<br>
Sabores: fresa, maracuyá, licor de menta, ron pasas.<br><br>

<b>CHOCOPECANS</b><br>
Unidad: S/10.00<br>
Caja x4: S/40.00<br>
Toffee con pecanas y chocolate 49%.<br><br>

<b>BESOS DE MOZA</b><br>
Maracuyá 49% – S/8.00<br>
Lúcuma 72% – S/8.00<br>
Mora 72% – S/10.00<br><br>

<b>BARRITA DE COCO</b> – S/12.00<br>
Variedad 49% o 72% cacao, con yogurt griego y stevia.<br><br>

<b>DINOSAURIOS CON KANIWA</b> – S/16.00<br>Bolsa 100g chocolate 49%.<br><br>

<b>CHOCOLATE CON SAL DE MARAS</b> – S/15.00<br><br>

<b>HOJAS DE CHOCOLATE</b> – S/20.00<br><br>

<b>CHOCO SUSHI</b> – S/.37.00<br>Ganache 72%, 49% y blanco con sabores: coco, maracuyá, piña, limón, maní.`);
}

function trufas() {
    botReply(`<b>🍄 TRUFAS</b><br><br>
Unidad: S/5.00<br>
Caja x2: S/10.00<br>
Caja x6: S/29.00<br>
Caja x12: S/55.00<br><br>

<b>Sabores:</b><br>
72%: Magia Piura, Piura Intenso, Piña<br>
49%: Algarrobina/maca, Mango ciruelo/polen, Naranja, Leche nibs, Café, Guayaba/hierba luisa, Plátano/pisco, Lúcuma/kaniwa, Maracuyá, Tamarindo/azúcar<br>
37%: Coco, Limón, Maracuyá.`);
}

function postresFri() {
    botReply(`
<b>🍰 POSTRES FRÍOS COMPLETOS</b><br><br>

<b>CHEESECAKE NEW YORK</b><br>
Porción S/18 • Mediano S/75 • Grande S/135<br><br>

<b>MERENGADO DE FRESA</b><br>
Porción S/17 • Mediano S/76<br><br>

<b>TRES LECHES (CACAO)</b><br>
Porción S/17 • Mediano S/46 • Grande S/82<br><br>

<b>CHEESECAKE DE BROWNIE</b><br>
Porción S/17 • Mediano S/62 • Grande S/115<br><br>

<b>PIE DE LIMÓN</b><br>
Porción S/18 • Mediano S/65 • Grande S/115<br><br>

<b>TIRAMISÚ</b><br>
Porción S/17 • Mediano S/72 • Grande S/150<br><br>

<b>PIE DE MARACUYÁ</b><br>
Porción S/18 • Mediano S/75 • Grande S/135<br><br>

<b>TROPICAL DE PIÑA</b><br>
Porción S/17 • Grande S/100<br><br>

<b>PIONONO CHOCOLATE/CHIRIMOYA</b><br>
Porción S/17 • Mediano S/75 • Grande S/130<br><br>

<b>MOUSSE CHOCOLATE</b><br>
Porción S/18 • Mediano S/75 • Grande S/135<br><br>

<b>MOUSSE LÚCUMA</b><br>
Porción S/17 • Mediano S/65 • Grande S/115<br><br>

<b>MOUSSE DE MORA</b><br>
Porción S/18<br><br>

<b>CHEESECAKE PISCO SOUR</b><br>
Mediano S/85 • Grande S/160`);
}

function postresHorno() {
    botReply(`
<b>🎂 POSTRES TIPO TORTA</b><br><br>

<b>RED VELVET</b><br>
Porción S/17 • Mini S/26 • Mediana S/62 • Grande S/105<br><br>

<b>PIE DE PECANAS</b><br>
Porción S/17 • Mediana S/70 • Grande S/120<br><br>

<b>TORTA DE CHOCOLATE</b><br>
Mini S/28 • Mediana S/51 • Grande S/100<br><br>

<b>TSUNAMI DE CHOCOLATE</b><br>
Mediana S/70 • Grande S/125<br><br>

<b>TURRÓN DE CHOCOLATE</b><br>
Mediano S/65 • Grande S/120<br><br>

<b>TORTA CON PRALINÉ DE PECANAS</b><br>
Mediana S/70 • Grande S/125`);
}

function saludables() {
    botReply(`
<b>🥑 SALUDABLES</b><br><br>

<b>DONUTS SALUDABLES</b> – S/10.00<br>
Quinoa pop + arándanos + chocolate 85%.<br><br>

<b>TORTA VEGANA</b> – S/130.00<br>
Chocolate + palta + panela.<br><br>

<b>TORTA SIN AZÚCAR</b> – S/165.00<br>
Harina de avena + almendras + arroz.`);
}

function cuchareables() {
    botReply(`
<b>🥄 CUCHAREABLES</b><br><br>

<b>CAPRICHO</b> – S/14<br>
<b>DULCE FUSIÓN</b> – S/14<br>
<b>PAVLOVA</b> – S/14<br>
<b>DERRUMBADO DE CHIRIMOYA (Jar)</b> – S/18<br><br>

<b>TEATULA</b><br>
Porción S/17 • Grande S/95<br><br>

<b>HELADO DE CAFÉ</b><br>
Porción S/18 • Grande S/130`);
}

function gustitos() {
    botReply(`
<b>✨ GUSTITOS</b><br><br>

<b>BROWNIE</b> – S/8<br>
<b>FRUTA DESHIDRATADA (15g)</b> – S/6<br>
<b>ALFAJORES</b> – S/7 unidad / S/21 caja x3<br>
<b>PAQUETE DE GALLETAS</b> – S/8<br>
<b>MINI QUEQUE</b> – S/10<br>
<b>GALLETONES</b> – S/8<br>
<b>SUSPIROS</b> – S/8.50<br>
<b>LABIALES PACK x3</b> – S/6.50`);
}

// ------------ INFO TIENDA ------------

function infoTienda() {
    botReply(`
<b>📍 Dirección:</b><br>
Calle Santa María 255, Santa Isabel, Piura, Perú.<br><br>

<b>🕒 Horario:</b><br>
Todos los días: <b>9:00 am – 9:00 pm</b><br><br>

<b>📱 Redes:</b><br>
Instagram: @magiapiura<br>
Facebook: Magia Piura<br>
WhatsApp: Disponible en el link de bio.`);
}

// ------------ ORIGEN + PREMIOS ------------

function aboutMagia() {
    botReply(`
<b>🏆 PREMIOS DE MAGIA PIURA</b><br>
• Más de <b>20 premios nacionales e internacionales</b> por calidad de cacao.<br>
• Reconocida por International Chocolate Awards.<br>
• Ganadora en categorías de barras, bombonería y cacao regional.<br><br>

<b>🌱 ORIGEN DE MAGIA PIURA</b><br>
Marca piurana que trabaja con <b>cacao blanco</b> de la región Piura, uno de los cacaos más finos del mundo.<br>
Fundada por productores locales, enfocados en chocolatería fina artesanal.<br><br>

<span class='btn-option' onclick='infoTienda()'>📍 Ver información de la tienda</span>`);
}

// ------------ DEFAULT ------------

function defaultReply(msg) {
    botReply("No estoy seguro de eso 😅 pero puedo ayudarte con:<br><br>📦 Productos<br>🏆 Premios<br>📍 Dirección<br>🕒 Horario<br><br>Escribe una palabra como: <b>productos / tienda / premios</b>");
}
