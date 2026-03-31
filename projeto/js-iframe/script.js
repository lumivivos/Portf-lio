function atualizarHora() {
    const msg = document.querySelector('#msg');
    const img = document.querySelector('#foto');
    const data = new Date();

    const hora = data.getHours();
    const min = data.getMinutes().toString().padStart(2, '0');
    const seg = data.getSeconds().toString().padStart(2, '0'); 

    msg.innerHTML = `Agora são ${hora}:${min}:${seg} horas.`;


    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manhafotosite.jpg';

    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tardefotosite.jpg';

    } else {
        img.src = 'imagens/noitefotosite.jpg';

    }
}


setInterval(atualizarHora, 1000);


atualizarHora();