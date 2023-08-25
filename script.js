function calcularTotal(preco, quantidade) {
  return preco * quantidade;
}

function exibirMensagem() {
  alert("Obrigado por visitar nossa loja de tênis!");
}

const carousel = document.querySelector(".carousel");
let currentSlide = 0;

function showSlide(slideIndex) {
  carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % 3; // Assumindo 3 imagens no exemplo
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Troca de slide a cada 5 segundos

// Chama a função showSlide para exibir o primeiro slide ao carregar a página
showSlide(currentSlide);
