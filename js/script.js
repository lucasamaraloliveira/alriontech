document.addEventListener('DOMContentLoaded', () => {
    // --- Existing code for Mobile Menu and Scroll to Top ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenuButton = document.querySelector('.close-menu');
    const body = document.body;
    const scrollTopButton = document.querySelector('.scroll-top');
    const siteHeader = document.querySelector('.site-header');

    // --- Mobile Menu Functionality ---
    const toggleMenu = () => {
        mobileMenu.classList.toggle('is-open');
        body.classList.toggle('no-scroll'); // Prevent scrolling on body
    };

    if (menuToggle) menuToggle.addEventListener('click', toggleMenu);
    if (closeMenuButton) closeMenuButton.addEventListener('click', toggleMenu);


    // --- Scroll to Top Button ---
    const toggleScrollTopButton = () => {
        if (window.scrollY > 300) { // Show button after scrolling down 300px
            if (scrollTopButton) scrollTopButton.classList.add('visible');
        } else {
             if (scrollTopButton) scrollTopButton.classList.remove('visible');
        }
    };

    window.addEventListener('scroll', toggleScrollTopButton);

    if (scrollTopButton) {
        scrollTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Smooth scroll effect
            });
        });
    }

    // Initial check for scroll-top button on page load
    toggleScrollTopButton();

    // --- Stats Counter Animation ---
    const statsSection = document.querySelector('.stats-section');
    const statNumbers = document.querySelectorAll('.stats-section .stat-number');
    let statsAnimated = false; // Flag para garantir que a animação só rode uma vez

    // Função para animar um único número
    const animateNumber = (element) => {
        const text = element.textContent;
        const hasPlus = text.includes('+');
        const targetNumber = parseInt(text.replace('+', ''), 10);
        const duration = 2000; // Duração da animação em milissegundos (2 segundos)
        let start = 0;
        let startTime = null;

        const updateNumber = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1); // Progresso de 0 a 1

            // Use Math.round para evitar números estranhos em contagens baixas
            const currentValue = Math.round(progress * targetNumber);

            element.textContent = (hasPlus ? '+' : '') + currentValue;

            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            } else {
                element.textContent = (hasPlus ? '+' : '') + targetNumber; // Garante o valor final exato
            }
        };

        requestAnimationFrame(updateNumber);
    };

    // Função para verificar se a seção de estatísticas está visível
    const checkStatsSection = () => {
        if (statsAnimated || !statsSection || statNumbers.length === 0) return; // Sai se já animou, seção não existe ou não há números

        const sectionRect = statsSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

         // Anima quando o topo da seção estiver a até 150px do final da viewport
        const isVisible = sectionRect.top < viewportHeight - 150 && sectionRect.bottom > 0;


        if (isVisible) {
            statsAnimated = true; // Marca como animado
            statNumbers.forEach(stat => {
                animateNumber(stat); // Inicia a animação para cada número
            });
            // Opcional: window.removeEventListener('scroll', checkStatsSection); // Remove listener após animar
        }
    };

    window.addEventListener('scroll', checkStatsSection);
    checkStatsSection(); // Verifica no carregamento também


    // --- Portfolio Data (Seus Projetos) ---
    // Adicione seus projetos aqui
    const portfolioProjects = [
        {
            id: 0, // Mapeia para data-project-id="0" no HTML
            title: "Cris Diniz Depilação", // SUBSTITUIR
            image: "img/portifolio1.png", // SUBSTITUIR Pela imagem real do modal (pode ser diferente da do carrossel)
            technologies: ["HTML", "CSS", "JavaScript", "Responsivo"], // SUBSTITUIR
            siteUrl: "https://crisdinizdepilacao-eta.vercel.app/" // SUBSTITUIR Pela URL real, use '#' se não tiver URL
        },
        {
            id: 1, // Mapeia para data-project-id="1" no HTML
            title: "Fator Crochê", // SUBSTITUIR
            image: "img/portifolio2.png", // SUBSTITUIR
            technologies: ["HTML", "CSS", "JavaScript", "Responsivo"], // SUBSTITUIR
            siteUrl: "https://www.exemplo2.com.br" // SUBSTITUIR
        },
         {
            id: 2, // Mapeia para data-project-id="2" no HTML
            title: "Seu Ponto de Retirada", // SUBSTITUIR
            image: "img/portifolio3.png", // SUBSTITUIR
            technologies: ["HTML", "CSS", "JavaScript", "Responsivo"], // SUBSTITUIR
            siteUrl: "https://www.exemplo3.com.br" // SUBSTITUIR
        },
         {
            id: 3, // Mapeia para data-project-id="3" no HTML
            title: "Nome do Projeto 4", // SUBSTITUIR
            image: "img/portfolio-placeholder.png", // SUBSTITUIR
            technologies: ["Node.js", "Express", "React", "MongoDB", "Sistema Web"], // SUBSTITUIR
            siteUrl: "https://www.exemplo4.com.br" // SUBSTITUIR
        },
        // Adicione mais projetos aqui com IDs sequenciais: 4, 5, 6...
    ];


    // --- Portfolio Carousel & Modal Setup ---
    const portfolioSection = document.querySelector('.portfolio-section');
    const carouselTrack = portfolioSection ? portfolioSection.querySelector('.carousel-track') : null;
    let portfolioItems = portfolioSection ? portfolioSection.querySelectorAll('.portfolio-item') : [];
    const prevButton = portfolioSection ? portfolioSection.querySelector('.carousel-control.prev') : null;
    const nextButton = portfolioSection ? portfolioSection.querySelector('.carousel-control.next') : null;

    const modalOverlay = document.querySelector('.portfolio-modal-overlay');
    const modalContent = modalOverlay ? modalOverlay.querySelector('.portfolio-modal-content') : null;
    const modalCloseButton = modalOverlay ? modalOverlay.querySelector('.modal-close-btn') : null;
    const modalProjectImage = modalOverlay ? modalOverlay.querySelector('.modal-project-image') : null;
    const modalProjectTitle = modalOverlay ? modalOverlay.querySelector('.modal-project-title') : null;
    const modalTechList = modalOverlay ? modalOverlay.querySelector('.modal-tech-list') : null;
    const modalVisitSiteButton = modalOverlay ? modalOverlay.querySelector('.modal-visit-site-btn') : null;

    // Variável para controlar se a funcionalidade do carrossel está ativa
    let isCarouselActive = false;


    // Verifica se os elementos essenciais para o Portfólio (carrossel ou apenas itens clicáveis) existem
    if (portfolioSection && portfolioItems.length > 0 && modalOverlay && modalContent && modalCloseButton && modalProjectTitle && modalTechList && modalVisitSiteButton) {

        // --- Carousel Functionality (Only if track and buttons exist) ---
        if (carouselTrack && prevButton && nextButton) {
             isCarouselActive = true; // Ativa a flag do carrossel

             // Função para obter a largura exata de um item incluindo o gap
            const getSlideStep = () => {
                 // Recalcula portfolioItems caso o DOM mude ou no resize
                portfolioItems = portfolioSection.querySelectorAll('.portfolio-item');
                if (portfolioItems.length === 0) return 0;

                // Pega a largura renderizada do primeiro item
                const itemWidth = portfolioItems[0].getBoundingClientRect().width;
                const trackStyle = window.getComputedStyle(carouselTrack);
                 // Pega o gap calculado pelo CSS
                const gap = parseFloat(trackStyle.getPropertyValue('gap')) || 0;

                // O passo para scroll-snap-align: center pode ser a largura do item + gap
                return itemWidth + gap;
            };

            // Função para atualizar o estado dos botões Prev/Next
            const updateCarouselControls = () => {
                 if (!carouselTrack || !prevButton || !nextButton) return;

                // Calcula a posição máxima de scroll
                const maxScrollLeft = carouselTrack.scrollWidth - carouselTrack.clientWidth;

                 // Desabilita o Anterior se estiver no início ou próximo dele (margem de 1px)
                prevButton.disabled = carouselTrack.scrollLeft <= 1;

                 // Desabilita o Próximo se já rolou até o final ou próximo dele (margem de 1px)
                nextButton.disabled = carouselTrack.scrollLeft >= maxScrollLeft - 1;
            };

            // Event Listeners para os botões
            nextButton.addEventListener('click', () => {
                 const slideStep = getSlideStep();
                 if (slideStep > 0) {
                     // Calcula a próxima posição de scroll baseada no passo
                     let nextScrollLeft = carouselTrack.scrollLeft + slideStep;

                     carouselTrack.scrollTo({
                         left: nextScrollLeft,
                         behavior: 'smooth'
                     });

                     // A atualização dos controles é feita no listener de scroll do track
                 }
            });

            prevButton.addEventListener('click', () => {
                 const slideStep = getSlideStep();
                 if (slideStep > 0) {
                     // Calcula a próxima posição de scroll baseada no passo
                     let nextScrollLeft = carouselTrack.scrollLeft - slideStep;

                     carouselTrack.scrollTo({
                         left: nextScrollLeft,
                         behavior: 'smooth'
                     });

                     // A atualização dos controles é feita no listener de scroll do track
                 }
            });

            // Adiciona listener para scroll nativo do track (se o usuário arrastar ou usar wheel)
            // Atualiza os controles sempre que o carrossel for rolado
            carouselTrack.addEventListener('scroll', updateCarouselControls);


            // Atualiza controles e posição no carregamento e resize
            const initializeCarousel = () => {
                 // Recarrega os itens do DOM caso tenham sido adicionados dinamicamente
                 portfolioItems = portfolioSection.querySelectorAll('.portfolio-item');
                 // Garante que o track existe antes de tentar scrollar
                 if (carouselTrack) {
                     // Usa scrollTo instantâneo para ir para o início (0) no resize
                     carouselTrack.scrollTo({
                          left: 0,
                          behavior: 'instant'
                     });
                 }
                 // Atualiza botões após o reset de scroll
                 updateCarouselControls();
            }

            window.addEventListener('resize', initializeCarousel);

             // Inicializa no carregamento
             initializeCarousel();

        } else {
             // Oculta os controles do carrossel se eles não forem encontrados
             if (portfolioSection) {
                  const controlsContainer = portfolioSection.querySelector('.carousel-controls');
                  if (controlsContainer) {
                      controlsContainer.style.display = 'none';
                  }
             }
             console.warn("Elementos do Carrossel do Portfólio (track/buttons) não encontrados. Apenas a abertura do modal funcionará ao clicar nos itens.");
        }


         // --- Modal Functionality ---
        const openModal = (projectId) => {
             const project = portfolioProjects.find(p => p.id === projectId);

             if (!project) {
                 console.error("Project not found with ID:", projectId);
                 return;
             }

             // Preenche o modal com os dados do projeto
             if (modalProjectImage) { // Se a imagem no modal for usada
                 modalProjectImage.src = project.image;
                 modalProjectImage.alt = `Imagem do projeto ${project.title}`;
                 modalProjectImage.style.display = project.image ? 'block' : 'none'; // Oculta se não houver imagem
             }
             modalProjectTitle.textContent = project.title;

             // Limpa a lista de tecnologias existente
             modalTechList.innerHTML = '';
             // Adiciona as novas tecnologias
             const techParagraph = modalTechList.previousElementSibling; // O parágrafo "Tecnologias Utilizadas:"
             if (project.technologies && project.technologies.length > 0) {
                 project.technologies.forEach(tech => {
                     const li = document.createElement('li');
                     li.textContent = tech;
                     modalTechList.appendChild(li);
                 });
                 // Mostra o parágrafo e a lista de tecnologias
                  techParagraph.style.display = 'block';
                  modalTechList.style.display = 'flex'; // Usa flex para o layout pill
             } else {
                  // Oculta o parágrafo e a lista se não houver techs
                  techParagraph.style.display = 'none';
                  modalTechList.style.display = 'none'; // Oculta a lista UL
             }


             // Configura o link do botão "Visitar Site"
             modalVisitSiteButton.href = project.siteUrl || '#'; // Usa '#' se for nulo/vazio
             // Garante que abre em nova aba
             modalVisitSiteButton.target = "_blank";
             // Desabilita o botão se não houver URL válida
             if (!project.siteUrl || project.siteUrl === '#') {
                 modalVisitSiteButton.style.display = 'none'; // Oculta
             } else {
                 modalVisitSiteButton.style.display = 'inline-flex'; // Mostra (usando flex para o ícone)
             }


             // Exibe o modal
             modalOverlay.classList.add('is-visible');
             body.classList.add('no-scroll'); // Impede scroll do body
        };

        const closeModal = () => {
             modalOverlay.classList.remove('is-visible');
             body.classList.remove('no-scroll'); // Restaura scroll do body

              // Opcional: Limpar o conteúdo do modal ao fechar para evitar flashes de conteúdo antigo
              if (modalProjectImage) modalProjectImage.src = '';
              modalProjectTitle.textContent = '';
              modalTechList.innerHTML = '';
               const techParagraph = modalTechList.previousElementSibling;
               if (techParagraph) techParagraph.style.display = 'none';
               modalTechList.style.display = 'none';
              modalVisitSiteButton.href = '#';
               modalVisitSiteButton.style.display = 'none';
        };

        // Adiciona listeners aos itens do portfólio para abrir o modal
         // Isso deve ser feito APÓS garantir que portfolioItems está populado
         portfolioItems.forEach(item => {
             item.addEventListener('click', () => {
                 const projectId = parseInt(item.dataset.projectId, 10); // Pega o ID do data-attribute
                 // Verifica se o ID é um número válido antes de abrir
                 if (!isNaN(projectId)) {
                     openModal(projectId);
                 } else {
                      console.error("Invalid project ID on element:", item);
                 }
             });
         });


        // Adiciona listeners para fechar o modal
        modalCloseButton.addEventListener('click', closeModal);

        // Fecha o modal clicando no overlay (mas não no conteúdo do modal)
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) { // Verifica se o clique foi diretamente no overlay
                closeModal();
            }
        });

        // Opcional: Fechar modal com a tecla ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modalOverlay.classList.contains('is-visible')) {
                closeModal();
            }
        });

    } else {
         // Este bloco é executado se a seção portfolio NÃO existe OU se não há itens OU se os elementos do modal não existem
         console.warn("Seção Portfólio, itens do portfólio ou elementos do Modal não encontrados. Funcionalidade de Portfólio/Modal não será ativada.");

         // Oculta o container do carrossel e muda o texto se a seção portfolio existe mas não tem itens ou elementos de modal
         if(portfolioSection) {
              const carouselContainer = portfolioSection.querySelector('.carousel-container');
              if(carouselContainer) carouselContainer.style.display = 'none';
              // Oculta os controles também
              const controlsContainer = portfolioSection.querySelector('.carousel-controls');
              if (controlsContainer) {
                  controlsContainer.style.display = 'none';
              }

               portfolioSection.querySelector('h3').textContent = "Portfólio em breve..."; // Ou outra mensagem
               if(portfolioSection.querySelector('p')) portfolioSection.querySelector('p').style.display = 'none';
         }

         // Define uma função closeModal básica caso os elementos do modal não existam mas a função seja chamada
         window.closePortfolioModal = () => {
             console.warn("closePortfolioModal called, but modal elements not found.");
         };
    }


    // --- Smooth Scrolling for Navigation Links ---
    // (This overrides the browser's default jump behavior for # links)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // Verifica se o link NÃO é um link do modal (que não deve acionar smooth scroll)
        // nem um link dentro de um item de carrossel clicável (o clique no item abre o modal)
        if (!anchor.closest('.portfolio-modal-content') && !anchor.closest('.portfolio-item')) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    // Adjust scroll position to account for fixed header
                    // Get the current header height dynamically
                    const headerHeight = siteHeader ? siteHeader.offsetHeight : 0;
                    // Add a little extra padding if needed, e.g., 20px
                    const extraPadding = 20;
                    // Calcula a posição final levando em conta o topo da seção e a rolagem atual
                    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - extraPadding;

                    // Use requestAnimationFrame para esperar por potential menu closing animation frame
                    requestAnimationFrame(() => {
                         window.scrollTo({
                             top: targetPosition,
                             behavior: 'smooth' // Smooth scroll effect
                         });
                    });


                    // Fecha o menu mobile se o link clicado estiver dentro dele
                    if (mobileMenu && mobileMenu.classList.contains('is-open') && this.closest('.mobile-menu')) {
                         // Aguarda um pouco (opcional) antes de fechar para dar tempo de iniciar o scroll
                         // Usa requestAnimationFrame para esperar a rolagem iniciar, então fecha o menu
                         requestAnimationFrame(() => {
                             // Timeout para garantir que a rolagem começou visivelmente
                             setTimeout(toggleMenu, 300); // Fecha após 300ms
                         });
                    }
                }
            });
        }
    });

});