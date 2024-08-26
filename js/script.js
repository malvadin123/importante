const simButton = document.getElementById('sim');
const naoButton = document.getElementById('nao');
const animacaoDiv = document.getElementById('animacao');

function moverBotaoNao() {
  const maxX = window.innerWidth - naoButton.offsetWidth - 10;
  const maxY = window.innerHeight - naoButton.offsetHeight - 10;
  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  naoButton.style.left = `${newX}px`;
  naoButton.style.top = `${newY}px`;
}

function criarCoracao(x, y) {
  const coracao = document.createElement('div');
  coracao.classList.add('coracao');

  const cores = ['vermelho', 'azul', 'verde'];
  const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
  coracao.classList.add(corAleatoria);

  const emojis = ['❤️', '🩷', '🧡', '💛', '💚', '💙', '🩵', '💜', '🤎', '🖤', '🩶', '🤍', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '❤️‍🔥', '❤️‍🩹', '🫶', '♥️', '💌'];
  const emojiAleatorio = emojis[Math.floor(Math.random() * emojis.length)];
  coracao.textContent = emojiAleatorio;

  coracao.style.left = `${x}px`;
  coracao.style.top = `${y}px`;

  document.body.appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 1500);
}

document.body.style.backgroundImage = "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fheart%2Bbackground&psig=AOvVaw2o0bQ1r99W_zZ8jI_N2O8d&ust=1700525176907000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNjk99G16_4CFQAAAAAdAAAAABAD')";

let timer = setTimeout(() => {       
   alert("Você está demorando muito para responder! 😅"); 
}, 15000);

simButton.addEventListener('click', () => {
  simButton.style.display = 'none';
  naoButton.style.display = 'none';
  animacaoDiv.style.display = 'block';
  clearTimeout(timer);

  setTimeout(() => {
    window.location.href = 'https://music.youtube.com/watch?v=izGwDsrQ1eQ'; 
  }, 3000);
});


naoButton.style.left = `${simButton.offsetLeft + simButton.offsetWidth + 10}px`;
naoButton.style.top = `${simButton.offsetTop}px`;

document.addEventListener('click', (e) => {
  criarCoracao(e.clientX, e.clientY);
});

document.addEventListener('mousemove', (event) => {
  if (naoButton.style.display !== 'none') {
    const rect = naoButton.getBoundingClientRect();
    const x = event.clientX;
    const y = event.clientY;

    if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
      moverBotaoNao();
      criarCoracao(x, y);
    }
  }
});

naoButton.addEventListener('click', moverBotaoNao);
