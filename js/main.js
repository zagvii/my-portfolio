// // Seleciona todas as bolinhas e as seções correspondentes
// const dots = document.querySelectorAll('.dot');
// const sections = document.querySelectorAll('.home-page, .about-me-section, .education-section, .experiences-section');

// // Atualiza a bolinha ativa com base na rolagem
// function updateActiveDot() {
//     let scrollPosition = window.scrollY;

//     sections.forEach((section, index) => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.offsetHeight;

//         // Verifica se o usuário está dentro da seção atual
//         if (scrollPosition >= sectionTop - window.innerHeight / 2 && 
//             scrollPosition < sectionTop + sectionHeight - window.innerHeight / 2) {
            
//             // Remove a classe 'active' de todas as bolinhas
//             dots.forEach(dot => dot.classList.remove('active'));

//             // Adiciona a classe 'active' na bolinha correspondente à seção visível
//             dots[index].classList.add('active');
//         }
//     });
// }

// // Adiciona o evento de scroll
// window.addEventListener('scroll', updateActiveDot);

// Executa a função ao carregar a página para marcar a seção inicial
// updateActiveDot();

fetch('assets/education.xlsx') // ou 'assets/education.csv'
.then(res => res.arrayBuffer())
    .then(buffer => {
        const workbook = XLSX.read(buffer, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const data = XLSX.utils.sheet_to_json(sheet); // transforma em array de objetos

        const container = document.querySelector('.education-list');

        data.forEach(entry => {
            const item = document.createElement('li');
            item.classList.add('education-item');

            item.innerHTML = `
                <div class="top-line">
                <h2 class="major">${entry.Major}</h2>
                <div class="line"></div>
                <span class="time">${entry.Time}</span>
                </div>
                <p class="school">${entry.School}</p>
            `;

            container.appendChild(item);
        });
    })
.catch(err => console.error("Erro ao carregar planilha:", err));

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
});
  
