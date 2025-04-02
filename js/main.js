// Seleciona todas as bolinhas e as seções correspondentes
const dots = document.querySelectorAll('.dot');
const sections = document.querySelectorAll('.home-page, .second-page');

// Atualiza a bolinha ativa com base na rolagem
function updateActiveDot() {
    let scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Verifica se o usuário está dentro da seção atual
        if (scrollPosition >= sectionTop - window.innerHeight / 2 && 
            scrollPosition < sectionTop + sectionHeight - window.innerHeight / 2) {
            
            // Remove a classe 'active' de todas as bolinhas
            dots.forEach(dot => dot.classList.remove('active'));

            // Adiciona a classe 'active' na bolinha correspondente à seção visível
            dots[index].classList.add('active');
        }
    });
}

// Adiciona o evento de scroll
window.addEventListener('scroll', updateActiveDot);

// Executa a função ao carregar a página para marcar a seção inicial
updateActiveDot();
