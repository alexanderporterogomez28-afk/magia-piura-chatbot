/* script.js - Chatbot Magia Piura (FINAL - inicia en blanco) */

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

/* 🔥 inicio en blanco – sin mensaje de bienvenida */
document.addEventListener('DOMContentLoaded', () => {});

/* ---------- data: categorías con icono + descripción objetiva ---------- */
const CATEGORIES = {
  "Chocolatería": [
    {icon:'🍫', name:'CHOCOCREAM', price:'S/10.00', desc:'Chocolate 72% relleno de crema de avellanas con trozos de maní.'},
    {icon:'🍬', name:'BOMBONES (Caja x6)', price:'S/27.00', desc:'Bombones con rellenos surtidos: fresa, maracuyá, menta, ron pasas.'},
    {icon:'🍬', name:'BOMBONES (Caja x12)', price:'S/50.00', desc:'Caja de 12 bombones con sabores surtidos.'},
    {icon:'🥜', name:'CHOCOPECANS (Unidad)', price:'S/10.00', desc:'Barrita de toffee con pecanas cubierta en chocolate 49%.'},
    {icon:'📦', name:'CHOCOPECANS (Caja x4)', price:'S/40.00', desc:'Caja con 4 barritas de pecanas y toffee.'},
    {icon:'💋', name:'BESO DE MOZA (Maracuyá 49%)', price:'S/8.00', desc:'Cobertura 49% relleno de ganache de maracuyá.'},
    {icon:'💋', name:'BESO DE MOZA (Lúcuma 72%)', price:'S/8.00', desc:'Cobertura 72% relleno de lúcuma.'},
    {icon:'💋', name:'BESO DE MOZA (Mora 72%)', price:'S/10.00', desc:'Cobertura 72% relleno de mora.'},
    {icon:'🥥', name:'BARRITA DE COCO', price:'S/12.00', desc:'Coco con yogurt griego, stevia y chocolate con nibs.'},
    {icon:'🦕', name:'DINOSAURIOS CON KANIWA (100g)', price:'S/16.00', desc:'Figuras de chocolate 49% con kañiwa pop.'},
    {icon:'🧂', name:'CHOCOLATE CON SAL DE MARAS (100g)', price:'S/15.00', desc:'Chocolate 49% con sal de maras.'},
    {icon:'🍃', name:'HOJAS DE CHOCOLATE', price:'S/20.00', desc:'Hojas de chocolate finas, presentación individual.'},
    {icon:'🍣', name:'CHOCO SUSHI (Caja 5)', price:'S/37.00', desc:'Caja con 5 sabores: coco, maracuyá, piña, limón y maní.'}
  ],

  "Trufas": [
    {icon:'⚪', name:'Trufa (unidad)', price:'S/5.00', desc:'Trufa artesanal, variedad de sabores.'},
    {icon:'🎁', name:'Trufa (caja x2)', price:'S/10.00', desc:'Dos trufas surtidas.'},
    {icon:'🎁', name:'Trufa (caja x6)', price:'S/29.00', desc:'Seis trufas surtidas.'},
    {icon:'🎁', name:'Trufa (caja x12)', price:'S/55.00', desc:'Caja con doce trufas.'}
  ],

  "Postres Fríos": [
    {icon:'🧀', name:'CHEESECAKE NEW YORK (porción)', price:'S/18.00', desc:'Tarta horneada con coulis de fresa.'},
    {icon:'🍓', name:'MERENGADO DE FRESA (porción)', price:'S/17.00', desc:'Merengue con crema de leche, manjar y fresas.'},
    {icon:'🍮', name:'TRES LECHES (porción)', price:'S/17.00', desc:'Bizcocho de cacao humedecido con tres leches.'},
    {icon:'🍫', name:'CHEESECAKE DE BROWNIE (porción)', price:'S/17.00', desc:'Cheesecake con base de brownie 72%.'},
    {icon:'🍋', name:'PIE DE LIMÓN (porción)', price:'S/18.00', desc:'Crema de limón con chocolate 49%.'},
    {icon:'☕', name:'TIRAMISÚ (porción)', price:'S/17.00', desc:'Bizcotela humedecida con café y vino.'},
    {icon:'🥭', name:'PIE DE MARACUYÁ (porción)', price:'S/18.00', desc:'Tarta de cacao rellena de maracuyá.'},
    {icon:'🍍', name:'TROPICAL DE PIÑA (porción)', price:'S/17.00', desc:'Bizcocho con mousse de chocolate blanco.'},
    {icon:'🍌', name:'PIONONO CHOCOLATE/CHIRIMOYA (porción)', price:'S/17.00', desc:'Bizcocho enrollado con manjar y chirimoya.'},
    {icon:'🍫', name:'MOUSSE DE CHOCOLATE (porción)', price:'S/18.00', desc:'Mousse con crumble de cacao.'},
    {icon:'🥭', name:'MOUSSE DE LÚCUMA (porción)', price:'S/17.00', desc:'Relleno cremoso de lúcuma.'},
    {icon:'🫐', name:'MOUSSE DE MORA (porción)', price:'S/18.00', desc:'Mousse de mora con brownie.'},
    {icon:'🍸', name:'CHEESECAKE PISCO SOUR (mediano)', price:'S/85.00', desc:'Cheesecake sabor pisco sour.'}
  ],

  "Pasteles": [
    {icon:'🍰', name:'RED VELVET (porción)', price:'S/17.00', desc:'Pastel en capas con frosting de queso.'},
    {icon:'🎂', name:'RED VELVET (mini)', price:'S/26.00', desc:'Mini torta decorativa.'},
    {icon:'🎂', name:'RED VELVET (mediana)', price:'S/62.00', desc:'Tamaño intermedio.'},
    {icon:'🎂', name:'RED VELVET (grande)', price:'S/105.00', desc:'Ideal para compartir.'},
    {icon:'🥧', name:'PIE DE PECANAS', price:'S/17.00', desc:'Cacao con miel de maple y pecanas.'},
    {icon:'🍫', name:'TORTA DE CHOCOLATE', price:'S/28.00', desc:'Bizcocho con fudge y nibs.'},
    {icon:'🌊', name:'TSUNAMI DE CHOCOLATE', price:'S/70.00', desc:'Pastel con baño líquido.'},
    {icon:'🍫', name:'TURRÓN DE CHOCOLATE', price:'S/65.00', desc:'Brownie con fudge.'},
    {icon:'🌰', name:'TORTA PRALINÉ DE PECANAS', price:'S/70.00', desc:'Cubierta de pecanas caramelizadas.'}
  ],

  "Saludables": [
    {icon:'🥑', name:'DONUTS SALUDABLES', price:'S/10.00', desc:'Base de quinoa pop y frutos secos.'},
    {icon:'🌱', name:'TORTA VEGANA (grande)', price:'S/130.00', desc:'Bizcocho con palta y panela.'},
    {icon:'🚫', name:'TORTA SIN AZÚCAR (grande)', price:'S/165.00', desc:'Endulzada sin azúcar añadida.'}
  ],

  "Cuchareables": [
    {icon:'🥣', name:'CAPRICHO', price:'S/14.00', desc:'Bizcocho humedecido con capas cremosas.'},
    {icon:'🍯', name:'DULCE FUSIÓN', price:'S/14.00', desc:'Brownie con crema y fresas.'},
    {icon:'🥧', name:'PAVLOVA', price:'S/14.00', desc:'Merengue con chantilly y pecanas.'},
    {icon:'🍮', name:'DERRUMBADO DE CHIRIMOYA', price:'S/18.00', desc:'Chirimoya con brownie y merengue.'},
    {icon:'☕', name:'TEATULA (porción)', price:'S/17.00', desc:'Bizcocho con crema de manjar.'},
    {icon:'🍨', name:'HELADO DE CAFÉ (porción)', price:'S/18.00', desc:'Cafe + chocolate 72%.'}
  ],

  "Gustitos": [
    {icon:'🍪', name:'BROWNIE', price:'S/8.00', desc:'Brownie artesanal con cacao 72%.'},
    {icon:'🍍', name:'FRUTA DESHIDRATADA (15g)', price:'S/6.00', desc:'Fruta con chocolate 72%.'},
    {icon:'🍬', name:'ALFAJOR (unidad)', price:'S/7.00', desc:'Galleta con chocomanjar.'},
    {icon:'🎁', name:'ALFAJOR (caja x3)', price:'S/21.00', desc:'Caja con 3 unidades.'},
    {icon:'🍘', name:'PAQUETE DE GALLETAS', price:'S/8.00', desc:'Galletas crujientes de cacao.'},
    {icon:'🧁', name:'MINI QUEQUE', price:'S/10.00', desc:'Bizcocho bañado en chocolate.'},
    {icon:'🍪', name:'GALLETONES', price:'S/8.00', desc:'Galletas rellenas de manjar.'},
    {icon:'🍥', name:'SUSPIROS', price:'S/8.50', desc:'Merengue con cacao.'},
    {icon:'💄', name:'LABIALES (pack x3)', price:'S/6.50', desc:'Mini chocolates en forma de labial.'}
  ]
};

/* ---------- handler: entrada texto ---------- */
function handleInput(text){
  if(!text) return;
  if(text.includes('hola') || text.includes('buenas')) return showMenu();
  if(text.includes('navid') || text.includes('navide')) return startNavidad();
  if(text.includes('producto') || text.includes('catalog')) return showCatalog();
  if(text.includes('redes') || text.includes('instagram') || text.includes('facebook')) return socialMedia();
  if(text.includes('delivery')) return deliveryInfo();
  if(text.includes('premio') || text.includes('origen') || text.includes('historia')) return aboutMagia();

  botMessage("Puedo ayudarte con: 🎄 Navideños, 📦 Catálogo, 🚚 Delivery, 📱 Redes o 🏆 Premios.");
}

/* ---------- MENU PRINCIPAL ---------- */
function showMenu(){
  botMessage(`
<b>¿En qué puedo ayudarte hoy?</b><br><br>
<span class="btn-option" onclick="startNavidad()">🎄 Edición Navideña</span>
<span class="btn-option" onclick="showCatalog()">📦 Catálogo General</span>
<span class="btn-option" onclick="socialMedia()">📱 Redes Sociales</span>
<span class="btn-option" onclick="deliveryInfo()">🚚 Delivery</span>
<span class="btn-option" onclick="aboutMagia()">🏆 Premios y Origen</span>
  `);
}

/* ---------- NAVIDAD ---------- */
let navIndex = 0;
function startNavidad(){
  navIndex = 0;
  botMessage(`<b>🎄 Colección Navideña</b><br><br>
Tenemos 7 productos especiales para esta temporada. ¿Deseas verlos uno por uno?<br><br>
<span class="btn-option" onclick="showNavItem()">Sí, mostrar</span>
<span class="btn-option secondary" onclick="botMessage('Perfecto, dime qué más necesitas.')">No, gracias</span>`);
}

function showNavItem(){
  if(navIndex >= 7){
    botMessage("🎄 Has visto toda la colección navideña.");
    showCompactMenuParagraph();
    return;
  }
  const p = [
    {icon:'🍫', name:'Brownies arbolito', price:'S/8.00 c/u', desc:'Brownies decorados con motivos navideños.'},
    {icon:'🍭', name:'Paletas navideñas', price:'S/7.00 c/u', desc:'Paletas de chocolate con toppings festivos.'},
    {icon:'🍫', name:'Chocopionono', price:'S/28.00', desc:'Pionono cubierto de chocolate.'},
    {icon:'🍪', name:'Galletas decoradas', price:'S/6.00 c/u', desc:'Galletas temáticas de temporada.'},
    {icon:'🎂', name:'Mini tortas navideñas', price:'S/26.00', desc:'Mini tortas decoradas.'},
    {icon:'🍩', name:'Donitas festivas', price:'S/5.00 c/u', desc:'Mini donas con decoración navideña.'},
    {icon:'🍡', name:'Cakepops navideños', price:'S/7.00 c/u', desc:'Cakepops decorados a mano.'}
  ][navIndex];

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
<span class="btn-option secondary" onclick="botMessage('De acuerdo, ¿qué más te gustaría revisar?')">⏹️ Salir</span>
`);
}

function nextNav(){
  navIndex++;
  showNavItem();
}

/* ---------- CATÁLOGO GENERAL ---------- */
function showCatalog(){
  botMessage(`<b>📦 Catálogo General</b><br><br>
Selecciona una categoría:<br><br>
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
  if(!items){
    botMessage("No encontré esa categoría.");
    return;
  }

  botMessage(`<b>${catName}</b><br><i>Mostrando productos...</i>`);

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
    }, 350 * (i + 1));
  });

  setTimeout(() => { showCompactMenuParagraph(); }, 350 * (items.length + 1));
}

/* ---------- MENU COMPACTO PARAGRAPH (OPCIÓN 4) ---------- */
function showCompactMenuParagraph(){
  botMessage(`
<b>Si deseas continuar explorando, puedo mostrarte más opciones de Magia Piura:</b><br><br>
<span class="btn-option" onclick="showCatalog()">📦 Productos</span>
<span class="btn-option" onclick="startNavidad()">🎄 Edición Navideña</span>
<span class="btn-option" onclick="socialMedia()">📱 Redes Sociales</span>
<span class="btn-option" onclick="deliveryInfo()">🚚 Delivery</span>
<span class="btn-option" onclick="aboutMagia()">🏆 Premios y Origen</span>
<div class="small-note">Si necesitas ayuda con un pedido, solo escríbelo y te apoyo.</div>
`);
}

/* ---------- REDES ---------- */
function socialMedia(){
  botMessage(`
<b>📱 Redes Sociales</b><br><br>
Publicamos contenido creativo y variado para que conozcas más de nuestra propuesta artesanal.<br><br>
<b>Instagram:</b> @magiapiura<br>
<b>Facebook:</b> Magia Piura<br><br>
Si deseas ver un producto en específico, puedo mostrártelo.`);
}

/* ---------- DELIVERY ---------- */
function deliveryInfo(){
  botMessage(`
<b>🚚 Delivery</b><br><br>
Contamos con servicio mediante Rappi y PedidosYa para toda Piura.<br>
Es una opción rápida y accesible.  
Si deseas, puedo ayudarte a elegir productos para tu pedido.`);
}

/* ---------- PREMIOS Y ORIGEN ---------- */
function aboutMagia(){
  botMessage(`
<b>🏆 Premios y Origen</b><br><br>
• Más de 20 premios nacionales e internacionales por calidad y sabor.<br>
• Reconocidos en concursos como International Chocolate Awards.<br>
• Elaborado con cacao blanco del Alto Piura, uno de los más finos del mundo.<br><br>
¿Deseas ver productos o consultar algo más?`);
}
