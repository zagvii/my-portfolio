import React from 'react';
import '../../css/AboutMe.css'; 

function AboutMe() {
  return (
    <section className="about-me-section" id="about-me-section">
      <h2 class="section-title">About Me</h2>
        <div class="image-text-block">
          <div class="image-with-lines">
            <div class="picture-frame">
              <img src="/assets/profile-picture-land.jpeg" alt="Minha Foto" />
            </div>
            <p><i class="fa-solid fa-location-dot"></i>RS, Brazil</p>
            <p><i class="fa-solid fa-envelope"></i>mirian.vieira.moreira@gmail.com</p>
            <a href="assets/resume-EN.pdf" download class="resume-button">MY RESUME</a>
          </div>

          <div class="text-and-info">
            <div class="text-content">
              <p>
                Junior Front-End Developer with nearly 2 years of professional experience in web, mobile, and cross-platform development. Strong foundation in HTML, CSS, JavaScript, PHP, and SQL, with experience building responsive user interfaces and consuming RESTful APIs. Demonstrated ability to solve complex bugs, collaborate in agile teams (SCRUM), and contribute to scalable features across multiple platforms (Web, Android, and iOS). Passionate about clean code, inclusive design, and continuous learning.
              </p>
            </div>

            <div class="info-block">
              <h3 class="info-title">Skills Set</h3>
              <div class="columns-container">
                <ul class="column">
                  <li><b>Languages & Technologies:</b> HTML, CSS, JavaScript, PHP, SQL, Java, Objective-C, C</li>
                  <li><b>Frameworks:</b> React.js (in progress) and Tailwind CSS (in progress)</li>
                  <li><b>Tools:</b> Git, Postman, Swagger, Figma, Canva, Google Sheets, Miro, WordPress (in progress)</li>
                  <li><b>Concepts:</b> Relational Databases, Object-Oriented Programming (OOP), Programming Logic, Responsive Design, REST APIs, Agile (SCRUM)</li>
                  <li><b>Soft Skills:</b> Teamwork, Communication, Adaptability, Self-management, Problem-solving,  Decision-Making and Project Leadership</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default AboutMe;
