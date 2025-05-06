// script.js

document.addEventListener("DOMContentLoaded", function () {
  // --- Mobile Menu Toggle ---
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  // Seleciona o ícone dentro do botão
  const menuIcon = menuToggle ? menuToggle.querySelector("i") : null;

  if (menuToggle && mobileMenu && menuIcon) {
    menuToggle.addEventListener("click", function () {
      mobileMenu.classList.toggle("translate-x-full"); // Alterna a classe de transformação

      // Alterna o ícone do menu
      if (mobileMenu.classList.contains("translate-x-full")) {
        // Menu está fechado (ou vai fechar)
        menuIcon.classList.remove("ri-close-line");
        menuIcon.classList.add("ri-menu-line");
      } else {
        // Menu está aberto (ou vai abrir)
        menuIcon.classList.remove("ri-menu-line");
        menuIcon.classList.add("ri-close-line");
      }
    });

    // Fecha o menu mobile ao clicar em um link dentro dele
    const mobileLinks = mobileMenu.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", function () {
        // Verifica se o clique foi em um link (para não fechar clicando no espaço vazio do menu)
        mobileMenu.classList.add("translate-x-full"); // Esconde o menu
        // Garante que o ícone volte ao estado de menu
        menuIcon.classList.remove("ri-close-line");
        menuIcon.classList.add("ri-menu-line");
      });
    });

    // Opcional: Fechar menu se redimensionar para desktop enquanto aberto
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) {
        // 768px é o breakpoint 'md' padrão do Tailwind
        if (!mobileMenu.classList.contains("translate-x-full")) {
          mobileMenu.classList.add("translate-x-full"); // Garante que esteja fechado no desktop
          // Garante que o ícone volte ao estado de menu
          if (menuIcon) {
            // Adicionado check para menuIcon
            menuIcon.classList.remove("ri-close-line");
            menuIcon.classList.add("ri-menu-line");
          }
        }
      }
    });
  }

  // --- Portfolio Modal ---
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  const modal = document.getElementById("portfolioModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalTech = document.getElementById("modalTech");
  const modalResult = document.getElementById("modalResult");
  const closeModalButton = document.getElementById("closeModal");
  const body = document.body;

  // Função para abrir o modal
  function openModal(item) {
    // Pega os dados dos data attributes
    const title = item.getAttribute("data-title");
    const image = item.getAttribute("data-image");
    const tech = item.getAttribute("data-tech");
    const result = item.getAttribute("data-result");

    // Popula o modal
    modalImage.src = image;
    modalImage.alt = title; // Melhorar acessibilidade
    modalTitle.textContent = title;
    modalTech.textContent = tech;
    modalResult.textContent = result;

    // Mostra o modal
    modal.classList.remove("hidden");
    // Desabilita o scroll do body
    body.classList.add("modal-open");
  }

  // Função para fechar o modal
  function closeModal() {
    modal.classList.add("hidden");
    // Habilita o scroll do body
    body.classList.remove("modal-open");
    // Opcional: Limpar o conteúdo do modal para performance, embora não estritamente necessário aqui
    // modalImage.src = '';
    // modalTitle.textContent = '';
    // modalTech.textContent = '';
    // modalResult.textContent = '';
  }

  // Adiciona evento de clique em cada item do portfólio
  portfolioItems.forEach((item) => {
    item.addEventListener("click", function () {
      openModal(this); // 'this' se refere ao item clicado
    });
  });

  // Adiciona evento de clique no botão de fechar
  if (closeModalButton) {
    closeModalButton.addEventListener("click", closeModal);
  }

  // Adiciona evento de clique no overlay para fechar (mas não no conteúdo do modal)
  if (modal) {
    modal.addEventListener("click", function (event) {
      // Fecha se o clique foi no overlay (o próprio modal)
      if (event.target === modal) {
        closeModal();
      }
    });
  }

  // --- Lazy Loading Elements (Images and others) ---
  const lazyElements = document.querySelectorAll(".lazy-load"); // Seleciona todos com a classe lazy-load

  if ("IntersectionObserver" in window) {
    const lazyLoadObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target;

            // Verifica se o elemento é uma tag IMG
            if (element.tagName === "IMG") {
              const imgUrl = element.getAttribute("data-img-src");
              if (imgUrl) {
                element.src = imgUrl; // Define o src real da imagem
                // Opcional: esperar carregar para adicionar 'loaded'
                element.onload = () => {
                  element.classList.add("loaded");
                };
                element.onerror = () => {
                  console.error("Falha ao carregar imagem lazy:", imgUrl);
                  element.classList.add("load-error"); // Opcional: classe de erro
                  // Adiciona 'loaded' mesmo com erro para a transição de opacidade ocorrer
                  element.classList.add("loaded");
                };
                // Adiciona 'loaded' imediatamente se não precisar esperar o load/error
                // element.classList.add('loaded');
              } else {
                // Se não tem data-img-src, apenas adiciona a classe 'loaded' para o fade-in
                element.classList.add("loaded");
              }
            } else {
              // Para outros elementos (como o div na seção hero ou outros que usem lazy-load para opacity)
              element.classList.add("loaded");
            }

            observer.unobserve(element); // Para de observar o elemento
          }
        });
      },
      {
        // Opcional: rootMargin ou threshold para ajustar quando o carregamento acontece
        // rootMargin: '0px 0px 50px 0px', // Carrega quando o elemento estiver a 50px do viewport bottom
        threshold: 0.1, // Carrega quando 10% do elemento estiver visível
      }
    );

    lazyElements.forEach((element) => {
      lazyLoadObserver.observe(element);
    });
  } else {
    // Fallback para navegadores sem IntersectionObserver
    lazyElements.forEach((element) => {
      if (element.tagName === "IMG") {
        const imgUrl = element.getAttribute("data-img-src");
        if (imgUrl) {
          element.src = imgUrl; // Define o src diretamente no fallback
        }
      }
      element.classList.add("loaded"); // Adiciona a classe loaded para o estilo padrão
    });
  }

  // --- Smooth Scroll ---
  // Ajustado para usar a altura do header fixo
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      // Verifica se o link não é apenas "#" (evita rolar para o topo se o href for apenas '#')
      const href = this.getAttribute("href");
      if (href && href.length > 1 && href !== "#") {
        // Adicionado check para != '#'
        e.preventDefault(); // Previne o comportamento padrão apenas se o link tiver um target válido

        const targetId = href;
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          // Calcula a posição de rolagem, ajustando para a altura do header fixo
          const header = document.querySelector("header");
          const headerHeight = header ? header.offsetHeight : 0; // Pega a altura do header, ou 0 se não encontrar
          const targetPosition = targetElement.offsetTop - headerHeight - 20; // Ajusta pelo header e adiciona um pequeno padding

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });

          // Fecha o menu mobile se estiver aberto (ao clicar em um link do menu)
          // Verifica se o menu mobile existe e está aberto
          if (
            mobileMenu &&
            !mobileMenu.classList.contains("translate-x-full")
          ) {
            mobileMenu.classList.add("translate-x-full");
            // Garante que o ícone volte ao estado de menu
            if (menuIcon) {
              // Adicionado check para menuIcon
              menuIcon.classList.remove("ri-close-line");
              menuIcon.classList.add("ri-menu-line");
            }
          }
        }
      }
    });
  });

  // --- Navbar Scroll Effect ---
  const header = document.querySelector("header");
  // Define quantos pixels para rolar antes de mudar a navbar
  const scrollThreshold = 50;

  function handleScroll() {
    if (window.scrollY > scrollThreshold) {
      // Adiciona a classe 'scrolled' se rolou mais que o limite
      header.classList.add("scrolled");
    } else {
      // Remove a classe 'scrolled' se voltou para o topo ou perto dele
      header.classList.remove("scrolled");
    }
  }

  // Adiciona o listener para o evento de scroll
  window.addEventListener("scroll", handleScroll);

  // Executa a função uma vez no carregamento da página
  // Isso garante que a navbar tenha o estado correto mesmo se a página for carregada já rolada
  handleScroll();

  // --- Fim do Navbar Scroll Effect ---
});
