import React from 'react';
import '../../css/Home.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';

function Home() {
  return (
    <section className="home-page" id="home-page">
      <div className="text-block">
          <h1>Hi, I'm <span className="name">Mirian_</span></h1>
          <p>
            Hi, there! My name is Mirian Moreira and I’m a Full Stack Developer
            based in Latin America. I’m very passionate in Front-end Development
            and I love creating sophisticated and efficient Web Designs.
          </p>
          <div className="socials">
            <a href="https://www.linkedin.com/in/zagvii" target="_blank" className="social-link">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/zagvii" target="_blank" className="social-link">
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div className="picture-block">
          <div className="picture-frame">
            <img src={`${import.meta.env.BASE_URL}assets/profile-picture-mini.jpeg`} alt="profile-picture" />
          </div>
        </div>
    </section>
  );
}

export default Home;
