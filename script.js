const chatbox = document.getElementById("chatbox");

function addMessage(text, sender) {
    const div = document.createElement("div");
    div.classList.add("msg", sender);
    div.innerText = text;
    chatbox.appendChild(div);
    chatbox.scrollTop = chatbox.scrollHeight;
}

document.addEventListener("DOMContentLoaded", () => {
    addMessage("¡Hola! 👋 Soy el asistente de Magia Piura. ¿En qué puedo ayudarte hoy?", "bot");
});


// =============================
// CATEGORÍAS Y PRODUCTOS
// =============================

const categorias = {
    "Chocolatería": [
        "Chococream – S/10",
        "Bombones Caja x6 – S/27",
        "Bombones Caja x12 – S/50",
        "Chocopecans Unidad – S/10",
        "Chocopecans Caja x4 – S/40",
        "Besos de moza maracuyá – S/8",
        "Besos de moza lúcuma – S/8",
        "Besos de moza mora – S/10",
        "Barrita de coco 72% – S/12",
        "Barrita de coco 49% – S/12",
        "Dinosaurios con kañiwa – S/16",
        "Chocolate con sal de maras – S/15",
        "Hojas de chocolate – S/20",
        "Choco sushi – S/37"
    ],

    "Trufas": [
        "Unidad – S/5",
        "Caja x2 – S/10",
        "Caja x6 – S/29",
        "Caja x12 – S/55"
    ],

    "Postres fríos": [
        "Cheesecake New York porción – S/18",
        "Cheesecake New York mediano – S/75",
        "Cheesecake New York grande – S/135",
        "Merengado de fresa porción – S/17",
        "Merengado de fresa mediano – S/76",
        "Tres leches porción – S/17",
        "Tres leches mediano – S/46",
        "Tres leches grande – S/82",
        "Cheesecake brownie porción – S/17",
        "Cheesecake brownie mediano – S/62",
        "Cheesecake brownie grande – S/115",
        "Pie de limón porción – S/18",
        "Pie de limón mediano – S/65",
        "Pie de limón grande – S/115",
        "Tiramisu porción – S/17",
        "Tiramisu mediano – S/72",
        "Tiramisu grande – S/150"
    ],

    "Postres (pasteles)": [
        "Red velvet porción – S/17",
        "Red velvet mini – S/26",
        "Red velvet mediana – S/62",
        "Red velvet grande – S/105",
        "Pie de pecanas porción – S/17",
        "Pie de pecanas mediano – S/70",
        "Pie de pecanas grande – S/120",
        "Torta de chocolate mini – S/28",
        "Torta de chocolate mediana – S/51",
        "Torta de chocolate grande – S/100",
        "Tsunami chocolate mediano – S/70",
        "Tsunami chocolate grande – S/125",
        "Turrón de chocolate mediano – S/65",
        "Turrón de chocolate grande – S/120",
        "Torta con praliné mediana – S/70",
        "Torta con praliné grande – S/125"
    ],

    "Saludables": [
        "Donuts saludables – S/10",
        "Torta vegana – S/130",
        "Torta sin azúcar – S/165"
    ],

    "Cuchareables": [
        "Capricho – S/14",
        "Dulce fusión – S/14",
        "Pavlova – S/14",
        "Derrumbado de chirimoya – S/18",
        "Teatula porción – S/17",
        "Teatula grande – S/95",
        "Helado de café porción – S/18",
        "Helado de café grande – S/130"
    ],

    "Gustitos": [
        "Brownie – S/8",
        "Fruta deshidratada – S/6",
        "Alfajor unidad – S/7",
        "Alfajor caja x3 – S/21",
        "Paquete de galletas – S/8",
        "Mini queque – S/10",
        "Galletones – S/8",
        "Suspiros – S/8.50",
        "Labiales pack x3 – S/6.50"
    ]
};


// =============================
// MENÚ DE CATEGORÍAS
// =============================

function openCategoryMenu() {
    let msg = "📋 Selecciona una categoría:\n\n";

    const div = document.createElement("div");
    div.classList.add("msg", "bot");

    let html = "📋 Selecciona una categoría:<br><br>";

    Object.keys(categorias).forEach(cat => {
        html += `<button class="category-btn" onclick="openCategory('${cat}')">${cat}</button><br>`;
    });

    div.innerHTML = html;
    chatbox.appendChild(div);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function openCategory(cat) {
    const productos = categorias[cat].join("\n");
    addMessage(`📦 ${cat}:\n\n${productos}`, "bot");
}


// =============================
// RESPUESTAS RÁPIDAS
// =============================

function sendQuick(option) {

    if (option === "delivery") {
        addMessage(
            "Contamos con delivery a través de PedidosYa y Rappi. Para más detalles puedes escribirnos por inbox o WhatsApp.",
            "bot"
        );
    }

    if (option === "premios") {
        addMessage(
            "Magia Piura ha sido reconocida con más de 20 premios nacionales e internacionales por su calidad y propuesta artesanal.",
            "bot"
        );
    }

    if (option === "historia") {
        addMessage(
            "Magia Piura nació como un emprendimiento dedicado a resaltar el cacao piurano y los sabores locales. Destaca por su elaboración artesanal y propuestas innovadoras.",
            "bot"
        );
    }

    if (option === "contacto") {
        addMessage(
            "📍 Dirección: Calle Santa María 255, Santa Isabel, Piura\n🕒 Horario: 9:00 am a 9:00 pm\nInstagram: @magiapiura\nFacebook: Magia Piura\nWhatsApp: 936752791",
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
        return "¡Hola! ¿Qué se te antoja hoy? 🍫💛";
    }

    return "Puedes usar los botones de arriba para navegar más rápido. 😊";
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
