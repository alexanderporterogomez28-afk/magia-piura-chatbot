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

/* inicio en blanco */
document.addEventListener('DOMContentLoaded', () => {});

/* ---------- DATA CATEGORIES ---------- */
const CATEGORIES = {
  /* (AQUÍ VA TODO TU CATÁLOGO COMPLETO IGUALITO, NO SE MODIFICA NADA) */
};

/* ---------- handler de palabras ---------- */
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

/* ---------- MENÚ PRINCIPAL ---------- */
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
/* (SIN CAMBIOS, IGUAL A LO QUE YA TENÍAS) */

/* ---------- CATALOGO GENERAL ---------- */
/* (SIN CAMBIOS TAMPOCO) */

/* ---------- MENÚ COMPACTO ---------- */
function showCompactMenuParagraph(){
  botMessage(`
<b>¿Deseas seguir explorando algo más?</b><br><br>

<span class="btn-option" onclick="showCatalog()">📦 Productos</span>
<span class="btn-option" onclick="startNavidad()">🎄 Edición Navideña</span>
<span class="btn-option" onclick="socialMedia()">📱 Redes Sociales</span>
<span class="btn-option" onclick="deliveryInfo()">🚚 Delivery</span>
<span class="btn-option" onclick="aboutMagia()">🏆 Premios y Origen</span>

<div class="small-note" style="margin-top:12px;">
Si necesitas ayuda con un pedido, solo escríbelo y te apoyo.
</div>
`);
}

/* ------------------------------------------------------------- */
/* 🔥🔥🔥  SECCIÓN 1 — REDES SOCIALES (VERSION MEJORADA + ESPACIOS) */
/* ------------------------------------------------------------- */

function socialMedia(){
  botMessage(`
<b>📱 Redes Sociales</b><br><br>

Nos encanta compartir contenido creativo, recetas, novedades y parte del proceso
artesanal detrás de cada creación que hacemos en Magia Piura.  
Es un espacio donde puedes conocernos mejor y mantenerte al día con promociones
o lanzamientos especiales.<br><br>

<b>Instagram:</b> @magiapiura<br>
<b>Facebook:</b> Magia Piura<br><br>

¿Te gustaría continuar viendo productos o revisar otra sección?
`);
}

/* ------------------------------------------------------------- */
/* 🔥🔥🔥  SECCIÓN 2 — DELIVERY (VERSION MEJORADA + ESPACIOS) */
/* ------------------------------------------------------------- */

function deliveryInfo(){
  botMessage(`
<b>🚚 Delivery Disponible</b><br><br>

Contamos con los servicios de entrega mediante <b>Rappi</b> y <b>PedidosYa</b>,
lo que permite recibir tus productos de forma rápida, segura y accesible
en diferentes zonas de Piura.<br><br>

Si deseas una recomendación según lo que buscas, puedo ayudarte a armar tu pedido.
También puedes preguntarme por productos específicos si lo prefieres.<br><br>

¿Quieres que te muestre opciones ideales para delivery?
`);
}

/* ------------------------------------------------------------- */
/* 🔥🔥🔥  SECCIÓN 3 — PREMIOS Y ORIGEN (VERSION MEJORADA + ESPACIOS) */
/* ------------------------------------------------------------- */

function aboutMagia(){
  botMessage(`
<b>🏆 Premios y Origen</b><br><br>

Magia Piura ha recibido más de <b>20 premios nacionales e internacionales</b>
gracias a la calidad y el sabor característico de nuestros productos artesanales.<br><br>

Entre ellos destacan reconocimientos en certámenes como:<br>
• International Chocolate Awards<br>
• Premios a barras de origen<br>
• Competencias de bombonería fina<br><br>

Nuestro trabajo se basa en el uso del <b>cacao blanco del Alto Piura</b>,
considerado uno de los más finos del mundo.  
Este cacao es cultivado por pequeños productores locales que mantienen prácticas tradicionales,
y es el corazón del sabor que nos distingue.<br><br>

Si deseas conocer nuestros productos o buscar algo en especial, puedo ayudarte.
`);
}
