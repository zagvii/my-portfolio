import React, {useState, useEffect} from 'react';
import '../../css/Experiences.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {

    const [experiencesData, setExperiencesData] = useState([]);

    useEffect(() => {
        fetch('../../assets/experiences.xlsx')
        .then((res) => res.arrayBuffer())
        .then((arrayBuffer) => {
            const workbook = XLSX.read(arrayBuffer, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);
            setExperiencesData(jsonData);
        })
        .catch((err) => {
            console.error('Erro ao carregar planilha:', err);
        });
    }, []);

    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);
    

    return (
        <section id="experiences-section" class="experiences-section">
            <h2 class="section-title">Work Experiences</h2>
            <div class="timeline">
                <ul>
                    {experiencesData.map((experiencesItem) => (
                        <li key={experiencesItem.id}>
                            <div class="timeline-item">
                                <div class="timeline-dot"></div>
                                <div class="timeline-content">
                                    <h3 class="timeline-title">{experiencesItem.Time} | {experiencesItem.Title}</h3>
                                    <p class="timeline-description">{experiencesItem.Description}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

        </section>
    );
}

export default Home;
