import React, {useState, useEffect} from 'react';
import '../../css/Experiences.css'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {

    const [experiencesData, setExperiencesData] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}assets/experiences.xlsx`)
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
        <section id="experiences-section" className="experiences-section">
            <h2 className="section-title">Work Experiences</h2>
            <div className="timeline">
                <ul>
                    {experiencesData.map((experiencesItem) => (
                        <li key={experiencesItem.id}>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h3 className="timeline-title">{experiencesItem.Time} | {experiencesItem.Title}</h3>
                                    <p className="timeline-description">{experiencesItem.Description}</p>
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
