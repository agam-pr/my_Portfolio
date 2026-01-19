const InfoSection = () => {
  return (
    <section className="info-section autoDisplay">
      <h1 className="section-title">Hello There 👋</h1>

      <div className="info-cards">
        <div className="card">
          <h1>Hi there, I'm Agam Prakash</h1>
          <p>a fresh Front-End Engineer passionate about creating clean and responsive interfaces. I’m practicing React, HTML, CSS, JavaScript, DSA, and C++, eager to grow my skills and contribute to exciting projects.</p>
          <img src="/images/grid1.png" />
        </div>

        <div className="card">
          <h1>Tech Stack</h1>
          <p>I work with modern front-end technologies including React, JavaScript, HTML, CSS, and also practice Data Structures & Algorithms in C++. These skills help me craft responsive, efficient, and scalable web applications.</p>
          <img src="/images/grid2.png" />
        </div>

        <div className="card">
          <h1>I’m open and ready for Remote work</h1>
          <p>I'm based in India and open to work remotely and eager to contribute as a Front-End Developer.</p>
          <video autoPlay muted loop src="/videos/glob.mp4"></video>
        </div>

        <div className="card">
          <h1>My Passion for Coding</h1>
          <p>I love solving problems and building things through code. Programming isn't just my profession—it's my passion. I enjoy exploring new technologies, and enhancing my skills..</p>
          <img src="/images/grid4.png" />
        </div>
      </div>

    </section>
  );
};

export default InfoSection;

