const chat = document.getElementById("chatbox");

function addMsg(text, sender) {
    let div = document.createElement("div");
    div.classList.add("msg", sender);
    div.innerText = text;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}

function typingEffect() {
    let bubble = document.createElement("div");
    bubble.classList.add("msg", "typing");
    bubble.innerText = "...";
    chat.appendChild(bubble);
    chat.scrollTop = chat.scrollHeight;
    return bubble;
}

document.addEventListener("DOMContentLoaded", () => {
    addMsg("¡Hola! Soy tu asistente virtual de Magia Piura 🍫✨", "bot");
});

/* =======================================
   CATEGORÍAS
======================================= */

const categorias = {
    "Chocolatería 🍫": [
        "Chococream – S/10",
        "Bombones (x6) – S/27",
        "Bombones (x12) – S/50",
        "Chocopecans unidad – S/10",
        "Chocopecans caja x4 – S/40",
        "Besos de moza maracuyá – S/8",
        "Besos de moza lúcuma – S/8",
        "Besos de moza mora – S/10",
        "Barrita coco 72% – S/12",
        "Barrita coco 49% – S/12"
    ],

    "Postres fríos 🍰": [
        "Cheesecake NY porción – S/18",
        "Cheesecake NY mediano – S/75",
        "Cheesecake NY grande – S/135",
        "Tres leches porción – S/17",
        "Tres leches mediano – S/46",
        "Tres leches grande – S/82",
        "Pie de limón porción – S/18",
        "Pie de limón mediano – S/65",
        "Pie de limón grande – S/115"
    ],

    "Pasteles 🎂": [
        "Red velvet porción – S/17",
        "Red velvet mini – S/26",
        "Red velvet mediana – S/62",
        "Red velvet grande – S/105",
        "Torta de chocolate mini – S/28",
        "Torta chocolate mediana – S/51",
        "Torta chocolate grande – S/100"
    ],

    "Saludables 🥑": [
        "Donut saludable – S/10",
        "Torta vegana – S/130",
        "Torta sin azúcar – S/165"
    ],

    "Cuchareables 🥄": [
        "Capricho – S/14",
        "Dulce fusión – S/14",
        "Pavlova – S/14",
        "Teatula – S/17",
        "Teatula grande – S/95"
    ],

    "Gustitos ✨": [
        "Brownie – S/8",
        "Fruta deshidratada – S/6",
        "Alfajor – S/7",
        "Alfajor (x3) – S/21",
        "Galletones – S/8",
        "Suspiros – S/8.50"
    ]
};

function showCategories() {
    let div = document.createElement("div");
    div.classList.add("msg", "bot");

    let html = "Selecciona una categoría:<br><br>";

    Object.keys(categorias).forEach(cat => {
        html += `<button class='category-btn' onclick="showProducts('${cat}')">${cat}</button>`;
    });

    div.innerHTML = html;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}

function showProducts(cat) {
    let items = categorias[cat];

    addMsg(`Mostrando: ${cat}`, "bot");

    let delay = 500;

    items.forEach((item, i) => {
        setTimeout(() => {
            addMsg(item, "bot");
        }, delay * (i + 1));
    });
}

/* =======================================
   RESPUESTAS RÁPIDAS
======================================= */

function quick(option) {

    if (option === "delivery") {
        addMsg(
            "Contamos con delivery mediante PedidosYa y Rappi. Para más detalles puedes escribirnos al inbox o WhatsApp 💛",
            "bot"
        );
    }

    if (option === "premios") {
        addMsg(
            "Magia Piura ha sido premiada más de 20 veces por su innovación y calidad en chocolatería artesanal 🍫🏆",
            "bot"
        );
    }

    if (option === "historia") {
        addMsg(
            "Magia Piura nació como una chocolatería que celebra el cacao piurano, los postres artesanales y los sabores locales. Un proyecto con identidad y amor por Piura 💛",
            "bot"
        );
    }

    if (option === "contacto") {
        addMsg(
            "📍 Calle Santa María 255, Santa Isabel – Piura\n🕒 9:00 am a 9:00 pm\nInstagram: @magiapiura\nFacebook: Magia Piura\nWhatsApp: 936752791",
            "bot"
        );
    }
}

/* =======================================
   ENVÍO MANUAL
======================================= */

function sendMsg() {
    let input = document.getElementById("userInput");
    let text = input.value.trim();
    if (!text) return;

    addMsg(text, "user");

    setTimeout(() => {
        addMsg("Puedes usar los botones superiores para navegar ✨", "bot");
    }, 600);

    input.value = "";
}
