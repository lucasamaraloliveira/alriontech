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

    // Fechar menu quando um link mobile menu é clicado (listener movido para o smooth scroll global)


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
        if (statsAnimated || !statsSection) return; // Sai se já animou ou seção não existe

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
            title: "Site Cris Diniz Depilação", // SUBSTITUIR
            image: "img/portifolio1.png", // SUBSTITUIR Pela imagem real do modal (pode ser diferente da do carrossel)
            technologies: ["HTML", "CSS", "JavaScript", "Responsivo"], // SUBSTITUIR
            siteUrl: "https://crisdinizdepilacao-eta.vercel.app/" // SUBSTITUIR Pela URL real, use '#' se não tiver URL
        },
        {
            id: 1, // Mapeia para data-project-id="1" no HTML
            title: "Nome do Projeto 2", // SUBSTITUIR
            image: "img/portfolio-placeholder.png", // SUBSTITUIR
            technologies: ["HTML", "CSS", "Bootstrap", "Marketing Digital"], // SUBSTITUIR
            siteUrl: "https://www.exemplo2.com.br" // SUBSTITUIR
        },
         {
            id: 2, // Mapeia para data-project-id="2" no HTML
            title: "Nome do Projeto 3", // SUBSTITUIR
            image: "img/portfolio-placeholder.png", // SUBSTITUIR
            technologies: ["HTML", "CSS", "JavaScript", "E-commerce", "API"], // SUBSTITUIR
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


    // --- Portfolio Carousel ---
    const portfolioSection = document.querySelector('.portfolio-section');
    const carouselTrack = portfolioSection ? portfolioSection.querySelector('.carousel-track') : null;
    let portfolioItems = portfolioSection ? portfolioSection.querySelectorAll('.portfolio-item') : []; // Pode ser populado via JS depois
    const prevButton = portfolioSection ? portfolioSection.querySelector('.carousel-control.prev') : null;
    const nextButton = portfolioSection ? portfolioSection.querySelector('.carousel-control.next') : null;

    // Verifica se os elementos do carrossel existem antes de tentar usá-los
    if (carouselTrack && portfolioItems.length > 0 && prevButton && nextButton) {
        let currentIndex = 0; // Índice visual atual (aproximado)
        const totalItems = portfolioItems.length;
        let itemsPerPage = 1; // Default for mobile


        // Função para obter a largura exata de um item incluindo o gap
        const getSlideStep = () => {
             if (portfolioItems.length === 0) return 0;

             // Recalcula portfolioItems caso o DOM mude ou no resize
             portfolioItems = portfolioSection.querySelectorAll('.portfolio-item');
             if (portfolioItems.length === 0) return 0;


            // Pega a largura renderizada do primeiro item
            const itemWidth = portfolioItems[0].getBoundingClientRect().width;
            const trackStyle = window.getComputedStyle(carouselTrack);
             // Pega o gap calculado pelo CSS
            const gap = parseFloat(trackStyle.getPropertyValue('gap')) || 0;

            // Se houver scroll-snap, a rolagem para no início de cada item, então o "passo" é a largura do item + gap
            // Se não, seria apenas a largura visível ou uma largura fixa.
            // Com scroll-snap-align: start, o passo é itemWidth + gap.
            return itemWidth + gap;
        };

        // Função para atualizar o estado dos botões Prev/Next
        const updateCarouselControls = () => {
             if (!carouselTrack || !prevButton || !nextButton) return; // Sai se elementos não existem

            // Calcula a posição máxima de scroll
            const maxScrollLeft = carouselTrack.scrollWidth - carouselTrack.clientWidth;

             // Desabilita o Anterior se estiver no início ou próximo dele (margem de 1px)
            prevButton.disabled = carouselTrack.scrollLeft <= 1;

             // Desabilita o Próximo se já rolou até o final ou próximo dele (margem de 1px)
            nextButton.disabled = carouselTrack.scrollLeft >= maxScrollLeft - 1;

             // Opcional: Atualizar o currentIndex visual (se necessário para outra lógica)
             // currentIndex = Math.round(carouselTrack.scrollLeft / getSlideStep());
             // currentIndex = Math.max(0, Math.min(currentIndex, totalItems - itemsPerPage));
        };

        // Event Listeners para os botões
        if (nextButton) {
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
        }

        if (prevButton) {
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
        }

        // Adiciona listener para scroll nativo do track (se o usuário arrastar ou usar wheel)
        // Atualiza os controles sempre que o carrossel for rolado
        if (carouselTrack) {
            carouselTrack.addEventListener('scroll', updateCarouselControls);
        }


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

         // --- Modal Functionality (Adicionado aqui, dentro da verificação se a seção portfolio existe) ---
         const modalOverlay = document.querySelector('.portfolio-modal-overlay');
         const modalContent = modalOverlay ? modalOverlay.querySelector('.portfolio-modal-content') : null;
         const modalCloseButton = modalOverlay ? modalOverlay.querySelector('.modal-close-btn') : null;
         const modalProjectImage = modalOverlay ? modalOverlay.querySelector('.modal-project-image') : null; // Opcional
         const modalProjectTitle = modalOverlay ? modalOverlay.querySelector('.modal-project-title') : null;
         const modalTechList = modalOverlay ? modalOverlay.querySelector('.modal-tech-list') : null;
         const modalVisitSiteButton = modalOverlay ? modalOverlay.querySelector('.modal-visit-site-btn') : null;

         // Verifica se os elementos do modal existem antes de adicionar listeners
        if (modalOverlay && modalContent && modalCloseButton && modalProjectTitle && modalTechList && modalVisitSiteButton) {

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
                 if (project.technologies && project.technologies.length > 0) {
                     project.technologies.forEach(tech => {
                         const li = document.createElement('li');
                         li.textContent = tech;
                         modalTechList.appendChild(li);
                     });
                     // Mostra o parágrafo "Tecnologias Utilizadas:"
                      modalTechList.previousElementSibling.style.display = 'block';

                 } else {
                      // Oculta o parágrafo "Tecnologias Utilizadas:" e a lista se não houver techs
                      modalTechList.previousElementSibling.style.display = 'none';
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

                  // Opcional: Limpar o conteúdo do modal ao fechar
                  if (modalProjectImage) modalProjectImage.src = '';
                  modalProjectTitle.textContent = '';
                  modalTechList.innerHTML = '';
                  if (modalTechList.previousElementSibling) modalTechList.previousElementSibling.style.display = 'none';
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
             console.warn("Elementos do Modal não encontrados. Funcionalidade do modal não será ativada.");
              // Esconde o container do carrossel e muda o texto se a seção portfolio existe mas não tem itens ou modal
             if(portfolioSection) {
                  const carouselContainer = portfolioSection.querySelector('.carousel-container');
                  if(carouselContainer) carouselContainer.style.display = 'none';
                   portfolioSection.querySelector('h3').textContent = "Portfólio em breve..."; // Ou outra mensagem
                   if(portfolioSection.querySelector('p')) portfolioSection.querySelector('p').style.display = 'none';
             }
        }


    } else {
        // Se a seção portfolio, carrossel ou controles não existirem
         console.warn("Elementos do Carrossel do Portfólio não encontrados ou não há itens. Funcionalidade do carrossel não será ativada.");
        // Oculta o container de botões se ele existir
        if (portfolioSection) {
             const controlsContainer = portfolioSection.querySelector('.carousel-controls');
             if (controlsContainer) {
                 controlsContainer.style.display = 'none';
             }
             // Adiciona mensagem se não houver itens do portfólio
             if(portfolioItems.length === 0) {
                  const carouselContainer = portfolioSection.querySelector('.carousel-container');
                  if(carouselContainer) carouselContainer.style.display = 'none';
                  portfolioSection.querySelector('h3').textContent = "Portfólio em breve..."; // Ou outra mensagem
                  if(portfolioSection.querySelector('p')) portfolioSection.querySelector('p').style.display = 'none';
             }
        }
         // Continua verificando se o modal existe independentemente do carrossel
         const modalOverlay = document.querySelector('.portfolio-modal-overlay');
         const modalContent = modalOverlay ? modalOverlay.querySelector('.portfolio-modal-content') : null;
         const modalCloseButton = modalOverlay ? modalOverlay.querySelector('.modal-close-btn') : null;
         const modalProjectImage = modalOverlay ? modalOverlay.querySelector('.modal-project-image') : null; // Opcional
         const modalProjectTitle = modalOverlay ? modalOverlay.querySelector('.modal-project-title') : null;
         const modalTechList = modalOverlay ? modalOverlay.querySelector('.modal-tech-list') : null;
         const modalVisitSiteButton = modalOverlay ? modalOverlay.querySelector('.modal-visit-site-btn') : null;

         // Verifica se os elementos do modal existem (redundante, mas seguro)
        if (modalOverlay && modalContent && modalCloseButton && modalProjectTitle && modalTechList && modalVisitSiteButton) {

            // Define as funções closeModal e openModal (simplificada se não houver itens clicáveis)
             const closeModal = () => {
                 modalOverlay.classList.remove('is-visible');
                 body.classList.remove('no-scroll');
                  // Opcional: Limpar o conteúdo do modal ao fechar
                  if (modalProjectImage) modalProjectImage.src = '';
                  modalProjectTitle.textContent = '';
                  modalTechList.innerHTML = '';
                   if (modalTechList.previousElementSibling) modalTechList.previousElementSibling.style.display = 'none';
                   modalTechList.style.display = 'none';
                  modalVisitSiteButton.href = '#';
                   modalVisitSiteButton.style.display = 'none';
            };

            // Adiciona listeners para fechar o modal, mesmo que não haja itens para abri-lo
            modalCloseButton.addEventListener('click', closeModal);
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) {
                    closeModal();
                }
            });
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modalOverlay.classList.contains('is-visible')) {
                    closeModal();
                }
            });

             console.warn("Funcionalidade de Abertura do Modal não será ativada pois não há itens de portfólio clicáveis.");

        } else {
             console.warn("Elementos do Modal não encontrados. Funcionalidade do modal não será ativada (verificação secundária).");
        }

    }


    // --- Smooth Scrolling for Navigation Links ---
    // (This overrides the browser's default jump behavior for # links)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // Verifica se o link NÃO é um link do modal (que não deve acionar smooth scroll)
        // nem um link dentro de um item de carrossel clicável
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