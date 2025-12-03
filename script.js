/* script.js - Chatbot Magia Piura (final) */

/* ---------- helpers ---------- */
const chatbox = document.getElementById('chatbox');

function addMessage(html, sender = 'bot') {
  const div = document.createElement('div');
  div.className = 'message ' + sender;
  div.innerHTML = html;
  chatbox.appendChild(div);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function userMessage(text) {
  addMessage(escapeHtml(text), 'user');
}

function botMessage(html) {
  addMessage(html, 'bot');
}

function escapeHtml(s){
  if(!s) return '';
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

/* Send button */
document.getElementById('sendBtn').addEventListener('click', () => {
  const inp = document.getElementById('userInput');
  const v = inp.value.trim();
  if(!v) return;
  userMessage(v);
  handleInput(v.toLowerCase());
  inp.value = '';
});

/* Enter key */
document.getElementById('userInput').addEventListener('keydown', (e) => {
  if(e.key === 'Enter') {
    e.preventDefault();
    document.getElementById('sendBtn').click();
  }
});

/* welcome message */
document.addEventListener('DOMContentLoaded', () => {
  botMessage("¡Hola! Soy el asistente de Magia Piura. Escribe <b>hola</b> para ver el menú o usa la caja de texto.");
});

/* ---------- data: categorías con icono + descripción objetiva ---------- */
/* cada producto: { icon, name, price, desc } */
const CATEGORIES = {
  "Chocolatería": [
    {icon:'🍫', name:'CHOCOCREAM', price:'S/10.00', desc:'Chocolate 72% relleno de crema de avellanas con trozos de maní.'},
    {icon:'🍬', name:'BOMBONES (Caja x6)', price:'S/27.00', desc:'Bombones con casquillo 37% y rellenos variados (fresa, maracuyá, menta, ron-pasas).'},
    {icon:'🍬', name:'BOMBONES (Caja x12)', price:'S/50.00', desc:'Caja de 12 bombones con sabores surtidos.'},
    {icon:'🥜', name:'CHOCOPECANS (Unidad)', price:'S/10.00', desc:'Barrita de toffee con pecanas, cubierta en chocolate 49%.'},
    {icon:'📦', name:'CHOCOPECANS (Caja x4)', price:'S/40.00', desc:'Caja con 4 barritas de toffee y pecanas.'},
    {icon:'💋', name:'BESO DE MOZA (Maracuyá 49%)', price:'S/8.00', desc:'Cobertura 49% relleno de ganache de maracuyá sobre base galleta.'},
    {icon:'💋', name:'BESO DE MOZA (Lúcuma 72%)', price:'S/8.00', desc:'Cobertura 72% relleno de ganache de lúcuma sobre base galleta.'},
    {icon:'💋', name:'BESO DE MOZA (Mora 72%)', price:'S/10.00', desc:'Cobertura 72% relleno de ganache de mora sobre base galleta.'},
    {icon:'🥥', name:'BARRITA DE COCO', price:'S/12.00', desc:'Coco rallado con yogurt griego, endulzado con stevia y bañado en chocolate con nibs.'},
    {icon:'🦕', name:'DINOSAURIOS CON KANIWA (100g)', price:'S/16.00', desc:'Figuras de chocolate 49% con kañiwa pop.'},
    {icon:'🧂', name:'CHOCOLATE CON SAL DE MARAS (100g)', price:'S/15.00', desc:'Chocolate 49% con sal de maras y praliné.'},
    {icon:'🍃', name:'HOJAS DE CHOCOLATE', price:'S/20.00', desc:'Hojas finas de chocolate, presentación individual.'},
    {icon:'🍣', name:'CHOCO SUSHI (Caja 5)', price:'S/37.00', desc:'Caja con 5 sabores: coco, maracuyá, piña, limón y maní.'}
  ],

  "Trufas": [
    {icon:'⚪', name:'Trufa (unidad)', price:'S/5.00', desc:'Trufa artesanal, variedad de texturas.'},
    {icon:'🎁', name:'Trufa (caja x2)', price:'S/10.00', desc:'Caja con 2 unidades.'},
    {icon:'🎁', name:'Trufa (caja x6)', price:'S/29.00', desc:'Caja con 6 trufas surtidas.'},
    {icon:'🎁', name:'Trufa (caja x12)', price:'S/55.00', desc:'Caja con 12 unidades para compartir.'}
  ],

  "Postres Fríos": [
    {icon:'🧀', name:'CHEESECAKE NEW YORK (porción)', price:'S/18.00', desc:'Tarta de queso con coulis de fresa.'},
    {icon:'🎂', name:'CHEESECAKE NEW YORK (mediano 16cm)', price:'S/75.00', desc:'Tarta mediana, consultar disponibilidad.'},
    {icon:'🎂', name:'CHEESECAKE NEW YORK (grande 22cm)', price:'S/135.00', desc:'Tarta grande, consultar disponibilidad.'},
    {icon:'🍓', name:'MERENGADO DE FRESA (porción)', price:'S/17.00', desc:'Merengue crocante con relleno de manjar y fresas.'},
    {icon:'🍮', name:'TRES LECHES (porción)', price:'S/17.00', desc:'Bizcocho de cacao humedecido en tres leches con toque de pisco.'},
    {icon:'🍫', name:'CHEESECAKE DE BROWNIE (porción)', price:'S/17.00', desc:'Mezcla de cheesecake con base/cobertura de brownie 72%.'},
    {icon:'🍋', name:'PIE DE LIMÓN (porción)', price:'S/18.00', desc:'Masa de cacao rellena de crema de limón con cobertura de chocolate 49%.'},
    {icon:'☕', name:'TIRAMISÚ (porción)', price:'S/17.00', desc:'Bizcotela con almíbar de café y vino, crema de queso.'},
    {icon:'🥭', name:'PIE DE MARACUYÁ (porción)', price:'S/18.00', desc:'Tarta de cacao rellena de maracuyá con mermelada.'},
    {icon:'🍍', name:'TROPICAL DE PIÑA (porción)', price:'S/17.00', desc:'Bizcocho relleno de compota de piña con mousse de chocolate blanco.'},
    {icon:'🍌', name:'PIONONO CHOCOLATE/CHIRIMOYA (porción)', price:'S/17.00', desc:'Bizcocho enrollado con manjar y chirimoya.'},
    {icon:'🍫', name:'MOUSSE DE CHOCOLATE (porción)', price:'S/18.00', desc:'Mousse con crumble de cacao y toffee.'},
    {icon:'🥭', name:'MOUSSE DE LÚCUMA (porción)', price:'S/17.00', desc:'Bizcocho con relleno cremoso de lúcuma.'},
    {icon:'🫐', name:'MOUSSE DE MORA (porción)', price:'S/18.00', desc:'Mousse de mora con base de brownie.'},
    {icon:'🍸', name:'CHEESECAKE PISCO SOUR (mediano)', price:'S/85.00', desc:'Cheesecake con sabor a pisco sour, solo a pedido.'}
  ],

  "Pasteles": [
    {icon:'🍰', name:'RED VELVET (porción)', price:'S/17.00', desc:'Pastel en capas con frosting de queso.'},
    {icon:'🎂', name:'RED VELVET (mini)', price:'S/26.00', desc:'Tamaño pequeño, ideal para detalle.'},
    {icon:'🎂', name:'RED VELVET (mediana)', price:'S/62.00', desc:'Torta mediana.'},
    {icon:'🎂', name:'RED VELVET (grande)', price:'S/105.00', desc:'Torta grande, consultar disponibilidad.'},
    {icon:'🥧', name:'PIE DE PECANAS', price:'S/17.00', desc:'Masa de cacao con mezcla de chocolate y pecanas.'},
    {icon:'🍫', name:'TORTA DE CHOCOLATE', price:'S/28.00', desc:'Mini/mediana/grande según opción.'},
    {icon:'🌊', name:'TSUNAMI DE CHOCOLATE', price:'S/70.00', desc:'Pastel con líquido de chocolate interno.'},
    {icon:'🍫', name:'TURRÓN DE CHOCOLATE', price:'S/65.00', desc:'Masa de brownie rellena y bañada en fudge.'},
    {icon:'🌰', name:'TORTA PRALINÉ DE PECANAS', price:'S/70.00', desc:'Bizcocho con pecanas caramelizadas.'}
  ],

  "Saludables": [
    {icon:'🥑', name:'DONUTS SALUDABLES', price:'S/10.00', desc:'Barritas con quinoa, frutos secos y baño de chocolate 85%.'},
    {icon:'🌱', name:'TORTA VEGANA (grande)', price:'S/130.00', desc:'Bizcocho vegano endulzado con panela.'},
    {icon:'🚫', name:'TORTA SIN AZÚCAR (grande)', price:'S/165.00', desc:'Pastel con harina de avena, almendras y arroz.'}
  ],

  "Cuchareables": [
    {icon:'🥣', name:'CAPRICHO', price:'S/14.00', desc:'Postre de bizcocho humedecido con capas cremosas y fresas.'},
    {icon:'🍯', name:'DULCE FUSIÓN', price:'S/14.00', desc:'Brownie con crema de avellanas, manjar y fresas.'},
    {icon:'🥧', name:'PAVLOVA', price:'S/14.00', desc:'Merengue crocante con chantilly y pecanas.'},
    {icon:'🍮', name:'DERRUMBADO DE CHIRIMOYA', price:'S/18.00', desc:'Postre en frasco con capas de chirimoya y manjar.'},
    {icon:'☕', name:'TEATULA (porción)', price:'S/17.00', desc:'Crema de manjar con bizcocho y praliné de pecanas.'},
    {icon:'🍨', name:'HELADO DE CAFÉ (porción)', price:'S/18.00', desc:'Helado de café con trozos de chocolate 72%.'}
  ],

  "Gustitos": [
    {icon:'🍪', name:'BROWNIE', price:'S/8.00', desc:'Brownie suave con nibs de cacao.'},
    {icon:'🍍', name:'FRUTA DESHIDRATADA (15g)', price:'S/6.00', desc:'Fresa, piña, naranja y mango bañados en chocolate 72%.'},
    {icon:'🍬', name:'ALFAJOR (unidad)', price:'S/7.00', desc:'Galleta rellena de chocomanjar.'},
    {icon:'🎁', name:'ALFAJOR (caja x3)', price:'S/21.00', desc:'Caja con 3 alfajores.'},
    {icon:'🍘', name:'PAQUETE DE GALLETAS', price:'S/8.00', desc:'Galletas crujientes con polvo 100% cacao.'},
    {icon:'🧁', name:'MINI QUEQUE', price:'S/10.00', desc:'Mini bizcocho bañado en chocolate 72%.'},
    {icon:'🍪', name:'GALLETONES', price:'S/8.00', desc:'Galletas de vainilla con trozos de chocolate.'},
    {icon:'🍥', name:'SUSPIROS', price:'S/8.50', desc:'Merengues tradicionales con toque de cacao.'},
    {icon:'💄', name:'LABIALES (pack x3)', price:'S/6.50', desc:'Pack de tres chocolates 72%, 49% y 37%.'}
  ]
};

/* ---------- handler: entrada texto ---------- */
function handleInput(text){
  if(!text) return;
  if(text.includes('hola') || text.includes('buenas')) return showMenu();
  if(text.includes('navid') || text.includes('navide')) return startNavidad();
  if(text.includes('producto') || text.includes('catalog') || text.includes('catálogo')) return showCatalog();
  if(text.includes('redes') || text.includes('instagram') || text.includes('facebook')) return socialMedia();
  if(text.includes('delivery')) return deliveryInfo();
  if(text.includes('premio') || text.includes('origen') || text.includes('historia')) return aboutMagia();
  // fallback
  botMessage("Perdona, no entendí. Puedo mostrar: 🎄 Navideños, 📦 Catálogo General, 🚚 Delivery, 📱 Redes, 🏆 Premios.");
}

/* ---------- MENU PRINCIPAL (invocado manual y al finalizar categorías) ---------- */
function showMenu(){
  botMessage(`
<b>Hola — ¿en qué puedo ayudarte hoy?</b><br><br>
Puedes pedir que te muestre cualquier categoría o usar estas opciones:<br><br>

<span class="btn-option" onclick="startNavidad()">🎄 Productos Navideños</span>
<span class="btn-option" onclick="showCatalog()">📦 Catálogo General</span>
<span class="btn-option" onclick="socialMedia()">📱 Redes Sociales</span>
<span class="btn-option" onclick="deliveryInfo()">🚚 Delivery</span>
<span class="btn-option" onclick="aboutMagia()">🏆 Premios y Origen</span>
  `);
}

/* ---------- NAVIDAD (secuencial) ---------- */
let navIndex = 0;
function startNavidad(){
  navIndex = 0;
  botMessage(`<b>🎄 Colección Navideña</b><br><br>Tenemos 7 productos especiales para esta temporada. ¿Quieres verlos uno por uno?<br><br><span class="btn-option" onclick="showNavItem()">Sí, mostrar</span> <span class="btn-option secondary" onclick="botMessage('Perfecto, dime qué más necesitas o escribe un producto')">No, gracias</span>`);
}

function showNavItem(){
  if(navIndex >= 7){
    botMessage("🎄 Has visto toda la colección navideña. ¿Deseas ver otra cosa?");
    showCompactMenuParagraph();
    return;
  }
  const p = [
    {icon:'🍫', name:'Brownies arbolito', price:'S/8.00 c/u', desc:'Brownie con decoración navideña.'},
    {icon:'🍭', name:'Paletas navideñas', price:'S/7.00 c/u', desc:'Paleta de ganache con toppings festivos.'},
    {icon:'🍫', name:'Chocopionono', price:'S/28.00', desc:'Pionono relleno y cubierto en chocolate.'},
    {icon:'🍪', name:'Galletas decoradas', price:'S/6.00 c/u', desc:'Galletas temáticas, ideales como regalo.'},
    {icon:'🎂', name:'Mini tortas', price:'S/26.00', desc:'Mini tortas para celebraciones.'},
    {icon:'🍩', name:'Donitas festivas', price:'S/5.00 c/u', desc:'Mini donas con glasé festivo.'},
    {icon:'🍡', name:'Cakepops', price:'S/7.00 c/u', desc:'Cakepops decorados con motivos navideños.'}
  ][navIndex];

  botMessage(`<div class="product-card"><div class="product-row"><div class="product-icon">${p.icon}</div><div class="product-info"><div class="product-name">${p.name}</div><div class="product-desc">${p.desc}</div><div class="product-price">${p.price}</div></div></div></div><br><span class="btn-option" onclick="nextNav()">➡️ Siguiente</span> <span class="btn-option secondary" onclick="botMessage('Listo — si quieres ver otra cosa solo dime')">⏹️ Salir</span>`);
}

function nextNav(){
  navIndex++;
  showNavItem();
}

/* ---------- CATÁLOGO GENERAL: mostrar categoría (productos secuenciales con descripción) ---------- */

function showCatalog(){
  botMessage(`<b>📦 Catálogo General</b><br><br>Selecciona una categoría:<br><br>
    <span class="btn-option" onclick="displayCategory('Chocolatería')">🍫 Chocolatería</span>
    <span class="btn-option" onclick="displayCategory('Trufas')">🍄 Trufas</span>
    <span class="btn-option" onclick="displayCategory('Postres Fríos')">🍰 Postres Fríos</span>
    <span class="btn-option" onclick="displayCategory('Pasteles')">🎂 Pasteles</span>
    <span class="btn-option" onclick="displayCategory('Saludables')">🥑 Saludables</span>
    <span class="btn-option" onclick="displayCategory('Cuchareables')">🥄 Cuchareables</span>
    <span class="btn-option" onclick="displayCategory('Gustitos')">✨ Gustitos</span>`);
}

function displayCategory(catName){
  const items = CATEGORIES[catName];
  if(!items || items.length === 0){
    botMessage("No hay productos en esa categoría.");
    return;
  }

  botMessage(`<b>${catName}</b><br><i>Mostrando productos...</i>`);
  // mostrar cada producto con delay para que no se amontone
  items.forEach((p, i) => {
    setTimeout(() => {
      const html = `<div class="product-card">
        <div class="product-row">
          <div class="product-icon">${p.icon}</div>
          <div class="product-info">
            <div class="product-name">${p.name}</div>
            <div class="product-desc">${p.desc}</div>
            <div class="product-price">${p.price}</div>
          </div>
        </div>
      </div>`;
      botMessage(html);
    }, 350 * (i + 1));
  });

  // después de mostrar todos, mostramos el menú compacto con párrafo (opción 4)
  setTimeout(() => {
    showCompactMenuParagraph();
  }, 350 * (items.length + 1));
}

/* ---------- MENU COMPACTO (Formato 4) ---------- */
function showCompactMenuParagraph(){
  botMessage(`<div class="menu-compact"><b>Si deseas continuar explorando, puedo mostrarte más opciones de Magia Piura:</b><br><br>
    <span class="btn-option" onclick="showCatalog()">📦 Productos</span>
    <span class="btn-option" onclick="startNavidad()">🎄 Edición Navideña</span>
    <span class="btn-option" onclick="socialMedia()">📱 Redes Sociales</span>
    <span class="btn-option" onclick="deliveryInfo()">🚚 Delivery</span>
    <span class="btn-option" onclick="aboutMagia()">🏆 Premios y Origen</span>
    <div class="small-note">Si necesitas ayuda concreta (ej.: «quiero 2 brownies y 1 mini torta»), escríbelo y te apoyo con el pedido.</div>
  </div>`);
}

/* ---------- REDES ---------- */
function socialMedia(){
  botMessage(`<b>📱 Redes Sociales</b><br><br>
Compartimos fotos del taller, procesos, recetas y promociones. Encuéntranos en:<br><br>
<b>Instagram:</b> @magiapiura<br>
<b>Facebook:</b> Magia Piura<br><br>
Si quieres que te guiemos para pedir algo, escríbenos por aquí y te ayudo.`);
}

/* ---------- DELIVERY ---------- */
function deliveryInfo(){
  botMessage(`<b>🚚 Delivery</b><br><br>
Contamos con servicio a través de Rappi y PedidosYa para toda Piura. Son opciones rápidas y prácticas.  
Si quieres, dime qué productos te interesan y te ayudo a preparar el pedido para delivery.`);
}

/* ---------- PREMIOS Y ORIGEN ---------- */
function aboutMagia(){
  botMessage(`<b>🏆 Premios y Origen</b><br><br>
• Más de 20 premios nacionales e internacionales por calidad y sabor.  
• Reconocidos en concursos como International Chocolate Awards.  
• Trabajamos con cacao blanco del Alto Piura, elaborado artesanalmente.`);
}

/* ---------- default ---------- */
function defaultReply(){
  botMessage("Puedo ayudarte con: 🎄 Navideños, 📦 Catálogo, 🚚 Delivery, 📱 Redes o 🏆 Premios. ¿Qué deseas ver?");
}
