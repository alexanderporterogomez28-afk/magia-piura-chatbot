/* ---------------- HELPERS ---------------- */

const chatbox = document.getElementById("chatbox");

function addMessage(html, sender = "bot") {
    const div = document.createElement("div");
    div.className = "message " + sender;
    div.innerHTML = html;
    chatbox.appendChild(div);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function userMessage(text) {
    addMessage(text, "user");
}

function botMessage(html) {
    addMessage(html, "bot");
}

document.getElementById("sendBtn").addEventListener("click", () => {
    const input = document.getElementById("userInput");
    const text = input.value.trim();
    if (!text) return;

    userMessage(text);
    handleInput(text.toLowerCase());

    input.value = "";
});

document.getElementById("userInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        document.getElementById("sendBtn").click();
    }
});

/* NO MENSAJE AUTOMÁTICO */
document.addEventListener("DOMContentLoaded", () => {});


/* ------------------ DATA ------------------ */

const CATEGORIES = {

    "Chocolatería": [
        {icon:"🍫", name:"Chococream", price:"S/10.00", desc:"Chocolate 72% relleno de crema de avellanas y maní."},
        {icon:"🍬", name:"Bombones x6", price:"S/27.00", desc:"Sabores fresa, maracuyá, menta y ron pasas."},
        {icon:"🍬", name:"Bombones x12", price:"S/50.00", desc:"Caja surtida de 12 bombones finos."},
        {icon:"🥜", name:"Chocopecans Unidad", price:"S/10.00", desc:"Toffee con pecanas y chocolate 49%."},
        {icon:"📦", name:"Chocopecans Caja x4", price:"S/40.00", desc:"Caja de 4 unidades."},
        {icon:"💋", name:"Beso de Moza – Maracuyá", price:"S/8.00", desc:"Cobertura 49% con ganache de maracuyá."},
        {icon:"💋", name:"Beso de Moza – Lúcuma", price:"S/8.00", desc:"Cobertura 72% con ganache de lúcuma."},
        {icon:"💋", name:"Beso de Moza – Mora", price:"S/10.00", desc:"Cobertura 72% con ganache de mora."},
        {icon:"🥥", name:"Barrita de Coco", price:"S/12.00", desc:"Coco, yogurt griego y chocolate con nibs."},
        {icon:"🦕", name:"Dinosaurios con Kañiwa", price:"S/16.00", desc:"Chocolate 49% con kañiwa pop (100 g)."},
        {icon:"🧂", name:"Chocolate con Sal de Maras", price:"S/15.00", desc:"Chocolate 49% con sal de maras."},
        {icon:"🍃", name:"Hojas de Chocolate", price:"S/20.00", desc:"Hojas finas de chocolate."},
        {icon:"🍣", name:"Choco Sushi", price:"S/37.00", desc:"Caja de 5 sabores (coco, maracuyá, piña, limón, maní)."}
    ],

    "Trufas": [
        {icon:"⚪", name:"Trufa Unidad", price:"S/5.00", desc:"Trufa artesanal sabor cacao."},
        {icon:"🎁", name:"Trufas x2", price:"S/10.00", desc:"Caja con 2 trufas surtidas."},
        {icon:"🎁", name:"Trufas x6", price:"S/29.00", desc:"Caja con 6 unidades."},
        {icon:"🎁", name:"Trufas x12", price:"S/55.00", desc:"Caja con 12 unidades."}
    ],

    "Postres Fríos": [
        {icon:"🧀", name:"Cheesecake NY", price:"S/18.00", desc:"Tarta horneada con fresas."},
        {icon:"🍓", name:"Merengado de Fresa", price:"S/17.00", desc:"Merengue, crema y fresas."},
        {icon:"🍮", name:"Tres Leches", price:"S/17.00", desc:"Bizcocho cacao en tres leches."},
        {icon:"🍫", name:"Cheesecake Brownie", price:"S/17.00", desc:"Cheesecake con base de brownie."},
        {icon:"🍋", name:"Pie de Limón", price:"S/18.00", desc:"Crema de limón con chocolate 49%."},
        {icon:"☕", name:"Tiramisú", price:"S/17.00", desc:"Bizcotela con café y crema."},
        {icon:"🥭", name:"Pie de Maracuyá", price:"S/18.00", desc:"Tarta rellena de maracuyá."},
        {icon:"🍍", name:"Tropical de Piña", price:"S/17.00", desc:"Bizcocho y mousse blanco."},
        {icon:"🍌", name:"Pionono Choco/Chirimoya", price:"S/17.00", desc:"Bizcocho enrollado."},
        {icon:"🍫", name:"Mousse de Chocolate", price:"S/18.00", desc:"Mousse con crumble de cacao."},
        {icon:"🥭", name:"Mousse de Lúcuma", price:"S/17.00", desc:"Mousse cremoso."},
        {icon:"🫐", name:"Mousse de Mora", price:"S/18.00", desc:"Mousse con brownie."},
        {icon:"🍸", name:"Cheesecake Pisco Sour", price:"S/85.00", desc:"Tarta de pisco sour."}
    ],

    "Pasteles": [
        {icon:"🍰", name:"Red Velvet porción", price:"S/17.00", desc:"Pastel rojo con frosting."},
        {icon:"🎂", name:"Red Velvet mini", price:"S/26.00", desc:"Mini torta decorada."},
        {icon:"🎂", name:"Red Velvet mediana", price:"S/62.00", desc:"Tamaño mediano."},
        {icon:"🎂", name:"Red Velvet grande", price:"S/105.00", desc:"Para compartir."},
        {icon:"🥧", name:"Pie de Pecanas", price:"S/17.00", desc:"Pecanas con miel de maple."},
        {icon:"🍫", name:"Torta de Chocolate", price:"S/28.00", desc:"Bizcocho con fudge."},
        {icon:"🌊", name:"Tsunami de Chocolate", price:"S/70.00", desc:"Baño líquido de chocolate."},
        {icon:"🍫", name:"Turrón de Chocolate", price:"S/65.00", desc:"Brownie con fudge."},
        {icon:"🌰", name:"Torta Praliné", price:"S/70.00", desc:"Pecanas caramelizadas."}
    ],

    "Saludables": [
        {icon:"🥑", name:"Donuts Saludables", price:"S/10.00", desc:"Quinoa pop, arándanos y chocolate 85%."},
        {icon:"🌱", name:"Torta Vegana", price:"S/130.00", desc:"Bizcocho con palta y panela."},
        {icon:"🚫", name:"Torta sin Azúcar", price:"S/165.00", desc:"Sin azúcar añadida."}
    ],

    "Cuchareables": [
        {icon:"🥣", name:"Capricho", price:"S/14.00", desc:"Bizcocho con manjar."},
        {icon:"🍯", name:"Dulce Fusión", price:"S/14.00", desc:"Brownie con crema."},
        {icon:"🥧", name:"Pavlova", price:"S/14.00", desc:"Merengue con chantilly."},
        {icon:"🍮", name:"Derrumbado de Chirimoya", price:"S/18.00", desc:"Chirimoya con fudge."},
        {icon:"☕", name:"Teatula", price:"S/17.00", desc:"Bizcocho con praliné."},
        {icon:"🍨", name:"Helado de Café", price:"S/18.00", desc:"Helado artesanal."}
    ],

    "Gustitos": [
        {icon:"🍪", name:"Brownie", price:"S/8.00", desc:"Chocolate 72%."},
        {icon:"🍍", name:"Fruta Deshidratada", price:"S/6.00", desc:"Fruta con chocolate."},
        {icon:"🍬", name:"Alfajor Unidad", price:"S/7.00", desc:"Chocomanjar."},
        {icon:"🎁", name:"Alfajores x3", price:"S/21.00", desc:"Caja de 3 unidades."},
        {icon:"🍘", name:"Galletas", price:"S/8.00", desc:"Cacao y nibs."},
        {icon:"🧁", name:"Mini Queque", price:"S/10.00", desc:"Chocolate 72%."},
        {icon:"🍪", name:"Galletones", price:"S/8.00", desc:"Rellena de manjar."},
        {icon:"🍥", name:"Suspiros", price:"S/8.50", desc:"Merengue con cacao."},
        {icon:"💄", name:"Labiales Pack x3", price:"S/6.50", desc:"Mini chocolates."}
    ]
};


/* ------------------ HANDLER ------------------ */

function handleInput(text) {

    if (text.includes("hola") || text.includes("buenas") || text.includes("ola")) {
        return showMenu();
    }

    if (text.includes("navid")) return startNavidad();
    if (text.includes("producto") || text.includes("catalog")) return showCatalog();
    if (text.includes("redes")) return socialMedia();
    if (text.includes("delivery")) return deliveryInfo();
    if (text.includes("premio") || text.includes("origen")) return aboutMagia();

    botMessage("Puedo ayudarte con: 📦 Productos, 🎄 Navideños, 📱 Redes, 🚚 Delivery o 🏆 Premios.");
}


/* ------------------ MENU PRINCIPAL ------------------ */

function showMenu() {
    botMessage(`
<b>¿En qué puedo ayudarte hoy?</b><br><br>

<span class="btn-option" onclick="showCatalog()">📦 Catálogo de Productos</span>
<span class="btn-option" onclick="startNavidad()">🎄 Edición Navideña</span>
<span class="btn-option" onclick="socialMedia()">📱 Redes Sociales</span>
<span class="btn-option" onclick="deliveryInfo()">🚚 Delivery</span>
<span class="btn-option" onclick="aboutMagia()">🏆 Premios y Origen</span>
    `);
}


/* ------------------ NAVIDAD ------------------ */

let navIndex = 0;

function startNavidad() {
    navIndex = 0;

    botMessage(`
<b>🎄 Colección Navideña</b><br><br>
Tenemos 7 productos especiales para esta temporada.<br><br>

¿Deseas verlos uno por uno?<br><br>

<span class="btn-option" onclick="showNavItem()">Sí, mostrar</span>
<span class="btn-option secondary" onclick="botMessage('Perfecto, ¿qué más deseas saber?')">No, gracias</span>
`);
}

function showNavItem() {
    const list = [
        {icon:"🍫", name:"Brownies arbolito", price:"S/8.00", desc:"Brownies decorados con motivos navideños."},
        {icon:"🍭", name:"Paletas navideñas", price:"S/7.00", desc:"Paletas de chocolate con diseños festivos."},
        {icon:"🍫", name:"Chocopionono", price:"S/28.00", desc:"Pionono bañado en chocolate."},
        {icon:"🍪", name:"Galletas decoradas", price:"S/6.00", desc:"Galletas temáticas hechas a mano."},
        {icon:"🎂", name:"Mini tortas navideñas", price:"S/26.00", desc:"Mini tortas decoradas."},
        {icon:"🍩", name:"Donitas festivas", price:"S/5.00", desc:"Donitas pequeñas navideñas."},
        {icon:"🍡", name:"Cakepops navideños", price:"S/7.00", desc:"Cakepops decorados con fondant."}
    ];

    if (navIndex >= list.length) {
        botMessage("🎄 Ya viste toda la colección navideña.");
        return showCompactMenu();
    }

    const p = list[navIndex];

    botMessage(`
<div class="product-card">
    <div class="product-row">
        <div class="product-icon">${p.icon}</div>
        <div class="product-info">
            <div class="product-name">${p.name}</div>
            <div class="product-desc">${p.desc}</div>
            <div class="product-price">${p.price}</div>
        </div>
    </div>
</div>
<br>
<span class="btn-option" onclick="nextNav()">➡️ Siguiente</span>
<span class="btn-option secondary" onclick="showCompactMenu()">Salir</span>
`);
}

function nextNav() {
    navIndex++;
    showNavItem();
}


/* ------------------ CATALOGO GENERAL ------------------ */

function showCatalog() {
    botMessage(`
<b>📦 Catálogo de Productos</b><br><br>

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

function displayCategory(category) {
    const items = CATEGORIES[category];

    botMessage(`<b>${category}</b><br><br>Mostrando productos...<br><br>`);

    items.forEach((p, i) => {
        setTimeout(() => {
            botMessage(`
<div class="product-card">
    <div class="product-row">
        <div class="product-icon">${p.icon}</div>
        <div class="product-info">
            <div class="product-name">${p.name}</div>
            <div class="product-desc">${p.desc}</div>
            <div class="product-price">${p.price}</div>
        </div>
    </div>
</div>
`);
        }, 300 * (i + 1));
    });

    setTimeout(() => {
        showCompactMenu();
    }, 300 * (items.length + 1));
}


/* ------------------ MENU COMPACTO ------------------ */

function showCompactMenu() {
    botMessage(`
<b>¿Deseas ver algo más?</b><br><br>

<span class="btn-option" onclick="showCatalog()">📦 Productos</span>
<span class="btn-option" onclick="startNavidad()">🎄 Navideños</span>
<span class="btn-option" onclick="socialMedia()">📱 Redes Sociales</span>
<span class="btn-option" onclick="deliveryInfo()">🚚 Delivery</span>
<span class="btn-option" onclick="aboutMagia()">🏆 Premios y Origen</span>
`);
}


/* ------------------ REDES SOCIALES ------------------ */

function socialMedia() {
    botMessage(`
<b>📱 Redes Sociales</b><br><br>

En nuestras redes encontrarás contenido creativo, novedades y todo lo que preparamos día a día con mucho cariño.<br><br>

<b>Instagram:</b> @magiapiura<br>
<b>Facebook:</b> Magia Piura<br><br>

Si deseas conocer un producto, ¡solo dímelo! 😊
`);
}


/* ------------------ DELIVERY ------------------ */

function deliveryInfo() {
    botMessage(`
<b>🚚 Delivery</b><br><br>

Contamos con servicio mediante:<br><br>

• <b>Rappi</b><br>
• <b>PedidosYa</b><br><br>

Ambos disponibles para toda la ciudad de Piura, rápidos y accesibles para que disfrutes tu pedido sin complicaciones.<br><br>

<b>Cualquier cosa aquí estamos para lo que necesites 😊</b>
`);
}


/* ------------------ PREMIOS Y ORIGEN ------------------ */

function aboutMagia() {
    botMessage(`
<b>🏆 Premios y Origen</b><br><br>

• Más de <b>20 premios nacionales e internacionales</b> por sabor y calidad.<br><br>

• Reconocidos en certámenes como los <b>International Chocolate Awards</b>.<br><br>

• Elaboramos nuestros productos con <b>cacao blanco del Alto Piura</b>, uno de los más finos del mundo.<br><br>

• Trabajamos de la mano con productores locales para garantizar un chocolate auténtico, artesanal y con identidad.<br><br>

¿Deseas ver productos o explorar otra sección? 😊
`);
}
