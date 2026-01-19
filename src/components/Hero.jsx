const Hero = () => {
    return (
      <section className="hero" id="home">
        <div className="hero-info">
          <p className="hero-info-title">Front-end Developer</p>
  
          <h1>
            Building <span className="gradient">my Coding Journey.</span>
          </h1>
  
          <p>
          I’m a fresher front-end developer passionate about coding and learning new technologies. Explore my projects and skills as I grow into a professional developer.
          </p>
  
          <a
            href="/Agam_Prakash_CV.pdf"
            download="Agam_Prakash_CV"
            target="_blank"
            rel="noopener noreferrer"
            >
                <button className="download-btn">Download CV</button>
            </a>

        </div>
  
        <div className="skills-video-box">
          <video
            className="skills-video"
            autoPlay
            muted
            loop
            playsInline
            src="/videos/hero-video.mp4"
          />
        </div>
  
        <div className="scroll-down"></div>
      </section>
    );
  };
  
  export default Hero;
  