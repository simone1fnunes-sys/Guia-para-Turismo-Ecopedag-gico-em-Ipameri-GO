document.addEventListener('DOMContentLoaded', () => {
  async function carregarGaleria(containerId, caminhoPasta, extensao) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let i = 1;
    let buscando = true;

    while (buscando) {
      const nomeArquivo = i === 1 ? `image.${extensao}` : `image${i}.${extensao}`;
      const url = `${caminhoPasta}/${nomeArquivo}`;

      const existe = await verificarImagem(url);

      if (existe) {
        const img = document.createElement('img');
        img.src = url;
        img.alt = `Foto da trajetória de Simone Nunes - ${i}`;
        container.appendChild(img);
        i++;
      } else {
        buscando = false;
      }
    }
  }

  function verificarImagem(url) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  }

  carregarGaleria('galeria-fotos', '../image/autora', 'png');

  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 10);
    });
  }

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('active'); 
    });
  }
});