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
    {icon:'🎂', name:'RED VELVET (mini)', price:'S/26.00', desc:'Mini torta deco
