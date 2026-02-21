/**
 * Carrega imagens sequenciais (image.png, image2.png, ...) até não encontrar mais.
 * @param {string} idContainer - O ID do elemento HTML
 * @param {string} pasta - O caminho da pasta das imagens
 * @param {string} extensao - Extensão do arquivo (ex: 'png' ou 'jpg')
 * @param {number} max - Número máximo de imagens a tentar (ex: 20)
 */
function galeriaSequencial(idContainer, pasta, extensao = 'png', max = 20) {
  const container = document.getElementById(idContainer);
  if (!container) return;

  let idx = 1;
  let carregadas = 0;

  function tentarCarregarProxima() {
    const nome = idx === 1 ? `image.${extensao}` : `image${idx}.${extensao}`;
    const img = new Image();
    img.src = `${pasta}/${nome}`;
    img.alt = "Foto da Trilha";
    img.classList.add('galeria-item');
    img.loading = "lazy";
    img.onload = function() {
      container.appendChild(img);
      carregadas++;
      idx++;
      if (carregadas < max) tentarCarregarProxima();
    };
    img.onerror = function() {
    };
  }

  tentarCarregarProxima();
}