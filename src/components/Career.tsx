import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Wordpress Developer</h4>
                <h5>Brauch Solutions</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed and customized client websites using WordPress, PHP, and JavaScript. Built responsive UI components, implemented custom features, and assisted with backend functionality while ensuring performance, usability, and smooth deployment across multiple projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>TailorEase</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed responsive interfaces using Next.js and React, building dashboards and interactive modules for a tailoring platform. Integrated Firebase services for authentication, real-time updates, and data management while ensuring a smooth user experience.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Developer</h4>
                <h5>Khastech Solutions</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Working on modern web applications using Next.js, React, and backend technologies. Building scalable features, integrating APIs, and contributing to production-ready platforms while focusing on performance, maintainability, and clean architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
