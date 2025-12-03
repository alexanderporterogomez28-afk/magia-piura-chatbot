/* script.js - Chatbot Magia Piura (FINAL, inicia en blanco) */

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

/* 🔥 inicio en blanco */
document.addEventListener('DOMContentLoaded', () => {});


/* ---------------- HANDLER ---------------- */

function handleInput(text){
  if(text.includes("hola") || text.includes("buenas")) return showMenu();
  if(text.includes("navid")) return startNavidad();
  if(text.includes("producto") || text.includes("catalog")) return showCatalog();
  if(text.includes("redes") || text.includes("instagram") || text.includes("facebook")) return socialMedia();
  if(text.includes("delivery")) return deliveryInfo();
  if(text.includes("premio") || text.includes("origen") || text.includes("historia")) return aboutMagia();

  botMessage("Puedo ayudarte con: 🎄 Navideños, 📦 Productos, 🚚 Delivery, 📱 Redes o 🏆 Premios.");
}


/* ---------------- MENU PRINCIPAL ---------------- */

function showMenu(){
  botMessage(`
<b>¡Hola! Bienvenido a Magia Piura 🍫✨</b><br><br>
¿En qué puedo ayudarte hoy?<br><br>

<span class="btn-option" onclick="startNavidad()">🎄 Edición Navideña</span>
<span class="btn-option" onclick="showCatalog()">📦 Catálogo General</span>
<span class="btn-option" onclick="socialMedia()">📱 Redes Sociales</span>
<span class="btn-option" onclick="deliveryInfo()">🚚 Delivery</span>
<span class="btn-option" onclick="aboutMagia()">🏆 Premios y Origen</span>
  `);
}


/* ---------------------------------------------------
                      NAVIDAD
--------------------------------------------------- */

let navIndex = 0;
function startNavidad(){
  navIndex = 0;
  botMessage(`
<b>🎄 Colección Navideña</b><br><br>
Tenemos 7 productos especiales. ¿Deseas verlos uno por uno?<br><br>

<span class="btn-option" onclick="showNavItem()">Sí, mostrar</span>
<span class="btn-option secondary" onclick="botMessage('Perfecto 😊 ¿Qué más necesitas?')">No, gracias</span>
`);
}

function showNavItem(){
  const nav = [
    {icon:'🍫', name:'Brownies arbolito', price:'S/8.00 c/u', desc:'Brownies decorados con motivos navideños.'},
    {icon:'🍭', name:'Paletas navideñas', price:'S/7.00 c/u', desc:'Paletas de chocolate festivas.'},
    {icon:'🍫', name:'Chocopionono', price:'S/28.00', desc:'Pionono cubierto con chocolate.'},
    {icon:'🍪', name:'Galletas decoradas', price:'S/6.00 c/u', desc:'Galletas artesanales decoradas.'},
    {icon:'🎂', name:'Mini tortas navideñas', price:'S/26.00', desc:'Mini tortas temáticas.'},
    {icon:'🍩', name:'Donitas festivas', price:'S/5.00 c/u', desc:'Mini donas con decoración navideña.'},
    {icon:'🍡', name:'Cakepops navideños', price:'S/7.00 c/u', desc:'Cakepops decorados a mano.'}
  ];

  if(navIndex >= nav.length){
    botMessage("🎄 ¡Has visto toda la colección navideña!");
    showCompactMenu();
    return;
  }

  const p = nav[navIndex];

  botMessage(`
<div class="product-card">
  <div class="product-icon">${p.icon}</div>
  <div class="product-name">${p.name}</div>
  <div class="product-desc">${p.desc}</div>
  <div class="product-price">${p.price}</div>
</div>

<br>

<span class="btn-option" onclick="nextNav()">➡️ Siguiente</span>
<span class="btn-option secondary" onclick="botMessage('De acuerdo 😄 ¿Qué más deseas ver?')">Salir</span>
`);
}

function nextNav(){ navIndex++; showNavItem(); }


/* ---------------------------------------------------
                   CATÁLOGO GENERAL
--------------------------------------------------- */

function showCatalog(){
  botMessage(`
<b>📦 Catálogo General</b><br><br>
Elige una categoría:<br><br>

<span class="btn-option" onclick="displayCategory('Chocolatería')">🍫 Chocolatería</span>
<span class="btn-option" onclick="displayCategory('Trufas')">🍄 Trufas</span>
<span class="btn-option" onclick="displayCategory('Postres Fríos')">🍰 Postres Fríos</span>
<span class="btn-option" onclick="displayCategory('Pasteles')">🎂 Pasteles</span>
<span class="btn-option" onclick="displayCategory('Saludables')">🥑 Saludables</span>
<span class="btn-option" onclick="displayCategory('Cuchareables')">🥄 Cuchareables</span>
<span class="btn-option" onclick="displayCategory('Gustitos')">✨ Gustitos</span>
  `);
}

function displayCategory(cat){
  botMessage(`<b>${cat}</b><br><i>Mostrando productos...</i>`);
  
  const items = CATEGORIES[cat];
  let delay = 300;

  items.forEach((p,i)=>{
    setTimeout(()=>{
      botMessage(`
<div class="product-card">
  <div class="product-icon">${p.icon}</div>
  <div class="product-name">${p.name}</div>
  <div class="product-desc">${p.desc}</div>
  <div class="product-price">${p.price}</div>
</div>
`);
    }, delay*(i+1));
  });

  setTimeout(()=>showCompactMenu(), delay*(items.length+1));
}


/* ---------------------------------------------------
            MENÚ COMPACTO (continuar explorando)
--------------------------------------------------- */

function showCompactMenu(){
  botMessage(`
<b>¿Deseas continuar explorando?</b><br><br>

<span class="btn-option" onclick="showCatalog()">📦 Productos</span>
<span class="btn-option" onclick="startNavidad()">🎄 Edición Navideña</span>
<span class="btn-option" onclick="socialMedia()">📱 Redes Sociales</span>
<span class="btn-option" onclick="deliveryInfo()">🚚 Delivery</span>
<span class="btn-option" onclick="aboutMagia()">🏆 Premios y Origen</span>
`);
}


/* ---------------------------------------------------
                  REDES SOCIALES (MEJORADO)
--------------------------------------------------- */

function socialMedia(){
  botMessage(`
<b>📱 Redes Sociales</b><br><br>

En nuestras redes compartimos contenido creativo, recetas, lanzamientos  
y el proceso artesanal de nuestro chocolate.<br><br>

<b>Instagram:</b> @magiapiura<br>
<b>Facebook:</b> Magia Piura<br><br>

¿Quieres ver productos o necesitas ayuda con un pedido?
`);
}


/* ---------------------------------------------------
                     DELIVERY (MEJORADO)
--------------------------------------------------- */

function deliveryInfo(){
  botMessage(`
<b>🚚 Delivery Magia Piura</b><br><br>

Contamos con servicio mediante:<br><br>

• <b>Rappi</b><br>
• <b>PedidosYa</b><br><br>

Ambas plataformas ofrecen un servicio rápido y accesible  
en toda la ciudad de Piura.<br><br>

Si deseas, puedo ayudarte a elegir productos  
para armar tu pedido.
`);
}


/* ---------------------------------------------------
              PREMIOS Y ORIGEN (MEJORADO)
--------------------------------------------------- */

function aboutMagia(){
  botMessage(`
<b>🏆 Premios y Reconocimientos</b><br><br>

• Más de <b>20 premios nacionales e internacionales</b>  
  por calidad, sabor y excelencia en chocolatería.<br>
• Reconocidos por <b>International Chocolate Awards</b>  
  en categorías de barras, bombonería y cacao regional.<br><br>

<b>🌱 Origen</b><br><br>

Magia Piura trabaja con <b>cacao blanco del Alto Piura</b>,  
uno de los más finos del mundo.  
Elaboramos productos artesanales con identidad regional  
y un proceso cuidadoso desde el grano hasta el chocolate.<br><br>

¿Deseas ver nuestro catálogo o algo más?
`);
}
