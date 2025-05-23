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

// fetch('assets/education.xlsx')
// .then(res => res.arrayBuffer())
//     .then(buffer => {
//         const workbook = XLSX.read(buffer, { type: "array" });
//         const sheet = workbook.Sheets[workbook.SheetNames[0]];
//         const data = XLSX.utils.sheet_to_json(sheet); 

//         const container = document.querySelector('.education-list');

//         data.forEach(entry => {
//             const item = document.createElement('li');
//             item.classList.add('education-item');

//             item.innerHTML = `
//                 <a href="${entry.Link}" target="_blank" class="education-card">
//                     <i class="fa-solid fa-laptop-code edu-icon"></i>
//                     <h3 class="edu-title">${entry.Major}</h3>
//                     <span class="edu-time">${entry.Time}</span>
//                     <p class="edu-school">${entry.School}</p>
//                 </a>
//             `;

//             container.appendChild(item);
//         });
//     })
// .catch(err => console.error("Erro ao carregar planilha:", err));

// fetch('assets/experiences.xlsx')
// .then(res => res.arrayBuffer())
//     .then(buffer => {
//         const workbook = XLSX.read(buffer, {type: "array"});
//         const sheet = workbook.Sheets[workbook.SheetNames[0]];
//         const data = XLSX.utils.sheet_to_json(sheet);  

//         const container = document.querySelector('.timeline');

//         data.forEach(entry => {
//             const item = document.createElement('li');

//             item.innerHTML = `<div class="timeline-item">
//                                 <div class="timeline-dot"></div>
//                                 <div class="timeline-content">
//                                     <h3 class="timeline-title">${entry.Time} | ${entry.Title}</h3>
//                                     <p class="timeline-description">${entry.Description}</p>
//                                 </div>
//                             </div>`;

//             container.appendChild(item);
//         });
//     })
// .catch(err => console.error("Erro ao carregar planilha:", err));

// window.addEventListener('scroll', () => {
//     const header = document.querySelector('header');
//     if (window.scrollY > 10) {
//       header.classList.add('scrolled');
//     } else {
//       header.classList.remove('scrolled');
//     }
// });
  
