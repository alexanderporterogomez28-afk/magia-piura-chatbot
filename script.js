async function sendMessage(){
    let input = document.getElementById("user-input");
    let box = document.getElementById("chat-box");

    let question = input.value.trim();
    if(!question) return;

    box.innerHTML += `<div class='user'>${question}</div>`;
    input.value = "";

    let response = getResponse(question.toLowerCase());
    box.innerHTML += `<div class='bot'>${response}</div>`;
}

function getResponse(q){
    if(q.includes("precio") || q.includes("cuánto")){
        return "Nuestros precios varían según presentación. ¿Qué producto deseas saber?";
    }
    if(q.includes("origen") || q.includes("cacao")){
        return "Magia Piura trabaja con cacao blanco nativo del Alto Piura, premiado internacionalmente.";
    }
    if(q.includes("productos")){
        return "Tenemos bombones, barras artesanales, chocotejas y más. ¿Qué te gustaría ver?";
    }
    return "¡Qué buena pregunta! Escríbeme más detalle para ayudarte mejor.";
}
