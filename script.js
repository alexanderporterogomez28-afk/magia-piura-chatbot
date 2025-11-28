const chatbox = document.getElementById("chatbox");

function sendMessage() {
    const input = document.getElementById("userInput");
    if (!input.value.trim()) return;
    addMessage(input.value, "user");
    processMessage(input.value.toLowerCase());
    input.value = "";
}

function addMessage(text, sender="bot") {
    const msg = document.createElement("div");
    msg.classList.add("message", sender);
    msg.innerHTML = text;
    chatbox.appendChild(msg);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function processMessage(msg) {
    if (msg.includes("hola") || msg.includes("buenas")) {
        botReply("¡Hola! Bienvenido a <b>Magia Piura</b> 🍫✨<br>¿En qué puedo ayudarte? Puedes elegir una opción abajo o escribirme lo que quieras.");
        return;
    }
    if (msg.includes("producto") || msg.includes("catalogo")) {
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
    if (msg.includes("delivery") || msg.includes("pedido") || msg.includes("rappi") || msg.includes("pedidosya")) {
        infoDelivery();
        return;
    }
    defaultReply();
}

function botReply(text) {
    addMessage(text, "bot");
}

function showCatalog() {
    botReply(`
Elige una categoría:<br>
<span class='btn-option' onclick='chocolateria()'>🍫 Chocolatería</span>
<span class='btn-option' onclick='trufas()'>🍄 Trufas</span>
<span class='btn-option' onclick='postresFri()'>🍰 Postres Fríos</span>
<span class='btn-option' onclick='postresHorno()'>🎂 Postres al Horno</span>
<span class='btn-option' onclick='saludables()'>🌱 Saludables</span>
<span class='btn-option' onclick='cuchareables()'>🥄 Cuchareables</span>
<span class='btn-option' onclick='gustitos()'>✨ Gustitos</span>
`);
}

// — CATEGORÍAS / PRODUCTOS —

function chocolateria() {
    botReply(`
<b>🍫 CHOCOLATERÍA</b><br><br>
<b>CHOCOCREAM</b> – S/10.00<br>
Chocolate 72% relleno con crema de avellanas y maní.<br><br>

<b>BOMBONES</b><br>
Caja x6: S/27.00<br>
Caja x12: S/50.00<br>
Sabores: fresa, maracuyá, menta, ron-pasas.<br><br>

<b>CHOCOPECANS</b><br>
Unidad: S/10.00<br>
Caja x4: S/40.00<br><br>

<b>BESOS DE MOZA</b><br>
Choc 49% – ganache maracuyá / Choc 72% – ganache lúcuma / Choc 72% – ganache mora. S/8.00 / S/8.00 / S/10.00 según sabor.<br><br>

<b>BARRITA DE COCO</b> – S/12.00<br><br>

<b>DINOSAURIOS CON KANIWA (100 g)</b> – S/16.00<br><br>

<b>CHOCOLATE CON SAL DE MARAS (100 g)</b> – S/15.00<br><br>

<b>HOJAS DE CHOCOLATE</b> – S/20.00 c/u<br><br>

<b>CHOCO SUSHI (5 sabores)</b> – S/37.00<br>
Sabores: coco, maracuyá, piña, limón, maní<br>
`);
}

function trufas() {
    botReply(`
<b>🍄 TRUFAS</b><br><br>
Unidad: S/5.00<br>
Caja x2: S/10.00<br>
Caja x6: S/29.00<br>
Caja x12: S/55.00<br><br>

<b>Sabores disponibles:</b><br>
72%: Magia Piura, Piura Intenso, Piña<br>
49%: Algarrobina/maca, Mango-ciruelo/polen, Naranja, Leche nibs, Café, Guayaba/hierba luisa, Plátano/pisco, Lúcuma/kaniwa, Maracuyá, Tamarindo/azúcar<br>
37%: Coco, Limón, Maracuyá
`);
}

function postresFri() {
    botReply(`
<b>🍰 POSTRES FRÍOS</b><br><br>

CHEESECAKE NEW YORK — Porción S/18 / Mediano S/75 / Grande S/135<br><br>
MERENGADO DE FRESA — Porción S/17 / Mediano S/76<br><br>
BROWNIE-CHEESECAKE — Porción S/17 / Mediano S/62 / Grande S/115<br><br>
TRES LECHES (cacao) — Porción S/17 / Mediano S/46 / Grande S/82<br><br>
PIE DE LIMÓN — Porción S/18 / Mediano S/65 / Grande S/115<br><br>
TIRAMISÚ — Porción S/17 / Mediano S/72 / Grande S/150<br><br>
PIE DE MARACUYÁ — Porción S/18 / Mediano S/75 / Grande S/135<br><br>
TORTA TROPICAL DE PIÑA — Porción S/17 / Grande S/100<br><br>
PIONONO CHOCOLATE/CHIRIMOYA — Porción S/17 / Mediano S/75 / Grande S/130<br><br>
MOUSSE DE CHOCOLATE — Porción S/18 / Mediano S/75 / Grande S/135<br><br>
MOUSSE DE LÚCUMA — Porción S/17 / Mediano S/65 / Grande S/115<br><br>
MOUSSE DE MORA — Porción S/18<br><br>
CHEESECAKE PISCO-SOUR — Mediano S/85 / Grande S/160
`);
}

function postresHorno() {
    botReply(`
<b>🎂 POSTRES DE HORNO</b><br><br>

RED VELVET — Porción S/17 / Mini S/26 / Mediana S/62 / Grande S/105<br><br>
PIE DE PECANAS — Porción S/17 / Mediana S/70 / Grande S/120<br><br>
TORTA DE CHOCOLATE — Mini S/28 / Mediana S/51 / Grande S/100<br><br>
TSUNAMI DE CHOCOLATE — Mediana S/70 / Grande S/125<br><br>
TURRÓN DE CHOCOLATE — Mediano S/65 / Grande S/120<br><br>
TORTA PRALINÉ DE PECANAS — Mediana S/70 / Grande S/125
`);
}

function saludables() {
    botReply(`
🥑 SALUDABLES<br><br>
DONUTS SALUDABLES — S/10.00<br>
TORTA VEGANA — S/130.00<br>
TORTA SIN AZÚCAR — S/165.00
`);
}

function cuchareables() {
    botReply(`
🥄 CUCHAREABLES<br><br>
CAPRICHO — S/14<br>
DULCE FUSIÓN — S/14<br>
PAVLOVA — S/14<br>
DERRUMBADO DE CHIRIMOYA (Jar) — S/18<br>
TEATULA — Porción S/17 / Grande S/95<br>
HELADO DE CAFÉ — Porción S/18 / Grande S/130
`);
}

function gustitos() {
    botReply(`
✨ GUSTITOS<br><br>
BROWNIE — S/8<br>
FRUTA DESHIDRATADA (15 g) — S/6<br>
ALFAJORES — S/7 (unidad) / Caja x3 S/21<br>
PAQUETE DE GALLETAS — S/8<br>
MINI QUEQUE — S/10<br>
GALLETONES — S/8<br>
SUSPIROS — S/8.50<br>
LABIALES (pack x3) — S/6.50
`);
}

// ---------------------------
// Información tienda, origen, premios, delivery
// ---------------------------

function infoTienda() {
    botReply(`
📍 Dirección: Calle Santa María 255, Santa Isabel, Piura, Perú.<br>
🕒 Horario: 9:00 am – 9:00 pm (todos los días).<br>
📱 Instagram: <a href="https://www.instagram.com/magiapiura/" target="_blank">@magiapiura</a><br>
📘 Facebook: <a href="https://web.facebook.com/magia.piura/" target="_blank">Magia Piura</a>
`);
}

function aboutMagia() {
    botReply(`
🏆 PREMIOS & RECONOCIMIENTOS<br>
• Más de 20 premios nacionales e internacionales por calidad y sabor.<br>
• Reconocimientos en barras, bombonería y cacao blanco piurano.<br><br>
🌱 ORIGEN & FILOSOFÍA<br>
Magia Piura trabaja con cacao blanco del Alto Piura, cultivado por productores locales. Es una tienda física que prioriza calidad, tradición y sabor artesanal.
`);
}

function infoDelivery() {
    botReply(`
🚚 DELIVERY / PEDIDOS EN LÍNEA<br>
Puedes pedir desde estas plataformas:<br>
• <a href="https://www.pedidosya.com.pe/restaurantes/piura/magia-piura-menu" target="_blank">PedidosYa</a><br>
• <a href="https://www.rappi.com.pe/restaurantes/3338-magia-piura" target="_blank">Rappi</a><br><br>
O si prefieres, contáctanos por Instagram/Facebook y te indicaremos cómo recoger en tienda.
`);
}

function defaultReply() {
    botReply("Lo siento, no entendí tu mensaje. 😊 Pero puedo ayudarte con:<br>- Productos / Catálogo<br>- Horario y ubicación<br>- Delivery / Pedidos<br>- Premios e historia<br><br>O escribe algo como: \"productos\" o \"delivery\".");
}

// Mensaje inicial
addMessage("¡Hola! Soy el asistente virtual de Magia Piura 🍫✨ ¿En qué puedo ayudarte?", "bot");
~~~

---

# ✅ Ya tienes el chatbot **completo, actualizado y con DELIVERY**  

Cuando lo subas a GitHub Pages:

- Se mostrará el catálogo completo.  
- Podrás consultar horarios, dirección, redes.  
- Tendrás botón de **Delivery** con enlaces reales a PedidosYa y Rappi.  
- Historia, origen y premios de Magia Piura incluidos.  

---

Si quieres, puedo **generar el ZIP** con estos tres archivos ya listos y entregártelo para que lo subas: así te ahorras copiar manualmente. ¿Te lo creo?
::contentReference[oaicite:2]{index=2}
