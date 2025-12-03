const chatbox = document.getElementById("chatbox");

// -------------------------
// ENVIAR MENSAJE
// -------------------------
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

function botReply(text) {
    addMessage(text, "bot");
}

// -------------------------
// PROCESAR TEXTO
// -------------------------
function processMessage(msg) {

    if (msg.includes("hola") || msg.includes("info") || msg.includes("inicio") || msg.includes("ayuda")) {
        mainMenu();
        return;
    }

    if (msg.includes("producto") || msg.includes("catalogo") || msg.includes("catálogo")) {
        catalogMenu();
        return;
    }

    if (msg.includes("navide")) {
        navidenos();
        return;
    }

    if (msg.includes("origen") || msg.includes("premio")) {
        showPremiosOrigen();
        return;
    }

    if (msg.includes("delivery")) {
        showDelivery();
        return;
    }

    if (msg.includes("redes")) {
        showRedes();
        return;
    }

    defaultReply();
}

// --------------------------
// MENÚ PRINCIPAL
// --------------------------
function mainMenu() {
    botReply(`
¡Hola! 👋 Gracias por escribirnos a <b>Magia Piura</b> 🍫✨  
Elige una de las siguientes opciones:

<br><br>
<span class='btn-option' onclick='catalogMenu()'>📦 Ver productos</span>
<span class='btn-option' onclick='navidenos()'>🎄 Productos navideños</span>
<span class='btn-option' onclick='showPremiosOrigen()'>🏆 Premios & Origen</span>
<span class='btn-option' onclick='showDelivery()'>🚚 Delivery disponible</span>
<span class='btn-option' onclick='showRedes()'>📱 Redes Sociales</span>
`);
}

// --------------------------
// CATÁLOGO GENERAL
// --------------------------

function catalogMenu() {
    botReply(`
<b class='section-title'>📦 Catálogo completo</b>

Elige una categoría:

<br><br>
<span class='btn-option' onclick='chocolateria()'>🍫 Chocolatería</span>
<span class='btn-option' onclick='trufas()'>🍄 Trufas</span>
<span class='btn-option' onclick='postresFri()'>🍰 Postres Fríos</span>
<span class='btn-option' onclick='postresHorno()'>🎂 Tortas / Postres al Horno</span>
<span class='btn-option' onclick='saludables()'>🥑 Saludables</span>
<span class='btn-option' onclick='cuchareables()'>🥄 Cuchareables</span>
<span class='btn-option' onclick='gustitos()'>✨ Gustitos</span>
<br><br>
<span class='btn-option' onclick='mainMenu()'>🔙 Volver</span>
`);
}

// --------------------------
// NAVIDEÑOS (7 productos)
// --------------------------
function navidenos() {
    botReply(`
<b class='section-title'>🎄 PRODUCTOS NAVIDEÑOS</b>

🎁 <b>Brownie Navideño</b><br>
Chocolate 72% con decoración temática.<br>
<b>S/8.00</b>

<br><br>🍪 <b>Galletones Navideños</b><br>
Gigantes, suaves y con trozos de chocolate.<br>
<b>S/8.00</b>

<br><br>🍫 <b>Chococream Navideño</b><br>
Edición especial rellena de crema festiva.<br>
<b>S/10.00</b>

<br><br>🎅 <b>Bombones Navideños</b><br>
Rellenos de sabores de temporada.<br>
<b>Caja 6 – S/27 / Caja 12 – S/50</b>

<br><br>🌟 <b>Chocopecanas Navideñas</b><br>
Toffee + pecanas + chocolate 49%.<br>
<b>S/10 unidad – S/40 caja x4</b>

<br><br>❄ <b>Mini Queques de Navidad</b><br>
Bizcochito húmedo bañado con 72%.<br>
<b>S/10.00</b>

<br><br>🍫 <b>Hojas Navideñas</b><br>
Delgadas y crujientes con chocolate premium.<br>
<b>S/20.00</b>

<br><br>
<span class='btn-option' onclick='mainMenu()'>🔙 Volver</span>
`);
}

// --------------------------
// CATEGORÍAS — CON ICONOS + DESCRIPCIÓN
// (Ejemplo: Chocolatería – Las demás categorías siguen iguales)
// --------------------------

function chocolateria() {
    botReply(`
<b class='section-title'>🍫 CHOCOLATERÍA</b>

🍫 <b>Chococream</b><br>
Relleno de crema de avellanas + maní.<br>
<b>S/10.00</b>

<br><br>🍬 <b>Bombones</b><br>
Rellenos frutales y licor suave.<br>
<b>6u S/27 • 12u S/50</b>

<br><br>🥜 <b>Chocopecans</b><br>
Toffee + pecanas + chocolate.<br>
<b>S/10 unidad – S/40 caja x4</b>

<br><br>💛 <b>Besos de Moza</b><br>
Ganache de maracuyá, lúcuma o mora.<br>
<b>S/8–10</b>

<br><br>🥥 <b>Barrita de Coco</b><br>
Coco + yogurt + stevia bañados en cacao.<br>
<b>S/12.00</b>

<br><br>🦖 <b>Dinosaurios con Kaniwa</b><br>
Chocolate 49% con kañiwa pop.<br>
<b>S/16.00</b>

<br><br>🧂 <b>Chocolate con sal de maras</b><br>
Cacao 49% + praliné.<br>
<b>S/15.00</b>

<br><br>🍃 <b>Hojas de chocolate</b><br>
Delgadas y crujientes.<br>
<b>S/20.00</b>

<br><br>🍣 <b>Choco Sushi</b><br>
5 sabores frutales únicos.<br>
<b>S/37.00</b>

<br><br>
<span class='btn-option' onclick='catalogMenu()'>🔙 Volver</span>
`);
}

// --------------------------
// (Las otras categorías quedaron igual.)
// Si deseas, te las vuelvo a pegar completas.
// --------------------------


// --------------------------
// DELIVERY
// --------------------------
function showDelivery() {
    botReply(`
<b class='section-title'>🚚 DELIVERY MAGIA PIURA</b>

Contamos con delivery mediante:

• <b>Rappi</b><br>
• <b>Pedidos Ya</b><br><br>

Ambos servicios llegan rápido, seguro  
y a diferentes zonas de Piura. 🌟  
Si deseas, también puedes escribirnos por aquí  
y te ayudamos a gestionar tu pedido ✨

<br><br>
<span class='btn-option' onclick='mainMenu()'>🔙 Volver</span>
`);
}

// --------------------------
// REDES SOCIALES
// --------------------------
function showRedes() {
    botReply(`
<b class='section-title'>📱 REDES SOCIALES</b>

En nuestras redes subimos contenido creativo,  
tips chocolateros y novedades ✨🍫

📸 Instagram: <b>@magiapiura</b><br>
📘 Facebook: <b>Magia Piura</b>

<br><br>
<span class='btn-option' onclick='mainMenu()'>🔙 Volver</span>
`);
}

// --------------------------
// PREMIOS Y ORIGEN
// --------------------------
function showPremiosOrigen() {
    botReply(`
<b class='section-title'>🏆 PREMIOS & ORIGEN</b>

✨ Más de <b>20 premios nacionales e internacionales</b>.  
✨ Reconocidos en <b>International Chocolate Awards</b>.  
✨ Productos elaborados con cacao blanco de Piura,  
uno de los más finos del mundo.  

Nuestra esencia es trabajar con productores locales  
y transformar el cacao en experiencias deliciosas 🍫🤎  

<br>
<span class='btn-option' onclick='mainMenu()'>🔙 Volver</span>
`);
}

// --------------------------
// DEFAULT
// --------------------------
function defaultReply() {
    botReply(`
No estoy seguro de eso 😅  
pero puedo ayudarte con:

<br><br>
<span class='btn-option' onclick='catalogMenu()'>📦 Productos</span>
<span class='btn-option' onclick='navidenos()'>🎄 Navideños</span>
<span class='btn-option' onclick='showPremiosOrigen()'>🏆 Premios</span>
<span class='btn-option' onclick='showDelivery()'>🚚 Delivery</span>
<span class='btn-option' onclick='showRedes()'>📱 Redes</span>
`);
}
