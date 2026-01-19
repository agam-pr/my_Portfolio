const Projects = () => {
    const handleMouseEnter = (e) => {
      const box = e.currentTarget;
      const video = box.querySelector("video");
      const hoverSign = box.querySelector(".hover-sign");
  
      video.play();
      hoverSign.classList.add("active"); // 👈 hide finger
    };
  
    const handleMouseLeave = (e) => {
      const box = e.currentTarget;
      const video = box.querySelector("video");
      const hoverSign = box.querySelector(".hover-sign");
  
      video.pause();
      hoverSign.classList.remove("active"); // 👈 show finger again
    };
  
    return (
      <section className="my-project autoDisplay" id="projects">
        <h1 className="section-title">My Projects</h1>
  
        {/* PROJECT 1 */}
        <div className="project-card">
          <div
            className="project-vidbox"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <video src="/videos/project1.mp4" muted loop />
            <div className="hover-sign"></div>
          </div>
  
          <div className="project-info">
            <h1>Tic-Tac-Toe</h1>
            <p>A fully interactive Tic Tac Toe game built with HTML, CSS, and JavaScript. It features both Player vs Player and Player vs AI modes, a clean neon-inspired UI, and real-time win detection with an option to restart the game. This project helped me strengthen my knowledge of DOM manipulation, game logic, and state management in JavaScript.</p>
            <a
            href="https://github.com/agam-pr/tic-tac-toe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View Project Code</button>
          </a>

          </div>
        </div>
  
        {/* PROJECT 2 */}
        <div className="project-card">
          <div
            className="project-vidbox"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <video src="/videos/project2.mp4" muted loop />
            <div className="hover-sign"></div>
          </div>
  
          <div className="project-info">
            <h1>My Portfolio</h1>
            <p>A clean, responsive front-end portfolio built using React to showcase my projects, skills, and achievements as a fresher Front-End Developer.</p>
            <a
                href="https://github.com/agam-pr/my_Portfolio.git"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button>View Project Code</button>
            </a>
          </div>
        </div>
  
        {/* PROJECT 3 */}
        <div className="project-card">
          <div
            className="project-vidbox"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <video src="/videos/project3.mp4" muted loop />
            <div className="hover-sign"></div>
          </div>
  
          <div className="project-info">
            <h1>Movie Landing Page</h1>
            <p>A sleek, animated responsive landing page built with HTML, CSS and JavaScript featuring a dynamic movie carousel, changing background images, and interactive elements like search and navigation, fully optimized for all screen sizes.</p>
            <a
            href="https://github.com/agam-pr/movie-landing-page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>View Project Code</button>
          </a>          
          </div>
        </div>
  

      </section>
    );
  };
  
  export default Projects;
  
  
  