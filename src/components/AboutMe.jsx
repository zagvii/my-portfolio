import React from 'react';
import '../../css/AboutMe.css'; 

const miroIcon = `${import.meta.env.BASE_URL}assets/miro.png`;
const sheetsIcon = `${import.meta.env.BASE_URL}assets/googlesheets.png`;

function AboutMe() {
  return (
    <section className="about-me-section" id="about-me-section">
      <h2 className="section-title">About Me</h2>
        <div className="image-text-block">
          <div className="image-with-lines">
            <div className="picture-frame">
              <img src={`${import.meta.env.BASE_URL}assets/profile-picture-land.jpeg`} alt="Minha Foto" />
            </div>
            <p><i className="fa-solid fa-location-dot"></i>RS, Brazil</p>
            <p><i className="fa-solid fa-envelope"></i>mirian.vieira.moreira@gmail.com</p>
            <a href={`${import.meta.env.BASE_URL}assets/resume-EN.pdf`} download className="resume-button">MY RESUME</a>
          </div>

          <div className="text-and-info">
            <div className="text-content">
              <p>
                Junior Front-End Developer with nearly 2 years of professional experience in web, mobile, and cross-platform development. Strong foundation in HTML, CSS, JavaScript, PHP, and SQL, with experience building responsive user interfaces and consuming RESTful APIs. Demonstrated ability to solve complex bugs, collaborate in agile teams (SCRUM), and contribute to scalable features across multiple platforms (Web, Android, and iOS). Passionate about clean code, inclusive design, and continuous learning.
              </p>
            </div>

            <div className="info-block">
              <h3 className="info-title">Skills Set</h3>
              <div className='info-columns techColumns'>
                <div className='columnInfo'>
                  <b>Languages & Technologies:</b> 
                  <ul className="column tech">
                    <li><i className="devicon-html5-plain colored"></i></li>
                    <li><i className="devicon-css3-plain colored"></i></li>
                    <li><i className="devicon-javascript-plain colored"></i></li>
                    <li><i className="devicon-php-plain colored"></i></li>
                    <li><i className="devicon-c-plain colored"></i></li>
                    <li><i className="devicon-mysql-plain colored"></i></li>
                    <li><i className="devicon-java-plain colored"></i></li>
                    <li><i className="devicon-objectivec-plain"></i></li>
                  </ul>
                </div>
                <div className='columnInfo'>
                  <b>Frameworks (learning in progress):</b> 
                  <ul className="column tech">
                    <li><i className="devicon-react-plain colored"></i></li>
                    <li><i className="devicon-tailwindcss-plain colored"></i></li>
                  </ul>
                </div>
                <div className='columnInfo'>
                  <b>Tools:</b> 
                  <ul className="column tech">
                    <li><i className="devicon-git-plain colored"/></li>
                    <li><i className="devicon-postman-plain colored"/></li>
                    <li><i className="devicon-swagger-plain colored"/></li>
                    <li><i className="devicon-figma-plain colored"/></li>
                    <li><i className="devicon-canva-plain colored"/></li>
                    <li><img src={miroIcon} alt="Miro" className="custom-icon"/></li>
                    <li><img src={sheetsIcon} alt="Google Sheets" className="custom-icon"/></li>
                    <li><i className="devicon-wordpress-plain colored"/></li>
                  </ul>
                </div>
              </div>
              <br></br>
              <div className='info-columns'>
                <div className='columnInfo'>
                  <b>Concepts:</b> 
                  <ul className="column">
                    <li>Relational Databases</li>
                    <li>Object-Oriented Programming (OOP)</li>
                    <li>Programming Logic</li>
                    <li>Responsive Design</li>
                    <li>REST APIs</li>
                    <li>Agile (SCRUM)</li>
                  </ul>
                </div>
                <div className='columnInfo'>
                  <b>Soft Skills:</b> 
                  <ul className="column">
                    <li>Teamwork</li>
                    <li>Communication</li>
                    <li>Adaptability</li>
                    <li>Self-management</li>
                    <li>Problem-solving</li>
                    <li>Decision-Making</li>
                    <li>Project Leadership</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default AboutMe;
