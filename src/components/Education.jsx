import React, {useState, useEffect} from 'react';
import '../../css/Education.css'; 
import AOS from 'aos';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'aos/dist/aos.css';

function Education() {

    const [educationData, setEducationData] = useState([]);

    useEffect(() => {
        fetch('../../assets/education.xlsx')
        .then((res) => res.arrayBuffer())
        .then((arrayBuffer) => {
            const workbook = XLSX.read(arrayBuffer, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);
            setEducationData(jsonData);
        })
        .catch((err) => {
            console.error('Erro ao carregar planilha:', err);
        });
    }, []);

    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);

    return (
        <section id="education-section" className="education-section">
            <h2 className="section-title">Education</h2>
            <div className="education-columns-container">
                <ul class="education-list">
                    {educationData.map((educationItem) => (
                        <li className='education-item' key={educationItem.id}>
                            <a 
                                href={educationItem.Link} 
                                target="_blank" 
                                data-aos="fade-up" 
                                data-aos-delay="0"
                                className="education-card" 
                                style={{
                                    backgroundImage: `url('/assets/${educationItem.Image}')`,
                                }}>
                                <div className="overlay" />
                                <div className="edu-content">
                                    <div className="edu-title-div">
                                        <h3 className="edu-title">{educationItem.Major}</h3>
                                        {/* <i className="fa-solid fa-laptop-code edu-icon"></i> */}
                                    </div>
                                    <hr/>
                                    <span className="edu-time"><i class="fa-regular fa-clock"/>{educationItem.Time}</span>
                                    <p className="edu-school"><i class="fa-solid fa-school"/>{educationItem.School}</p>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Education;
