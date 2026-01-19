const Skills = () => {
    return (
      <section className="skills-section autoDisplay" id="skills">
  
        <h1 className="section-title">My Skills</h1>
  
        <div className="skills-box">
  
          {/* CENTER IMAGE */}
          <img
            src="/images/grid2.png"
            alt="skills"
            className="skills-image"
          />
  
          {/* DESIGNER */}
          <div className="Designer">
            <h1>Designer</h1>
            <p>UI/UX focused designs.</p>
          </div>
  
          {/* CODER */}
          <div className="coder">
            <h1>Coder</h1>
            <p>React, JS, CSS expert.</p>
          </div>
  
          {/* SLIDER */}
          <div
            className="slider"
            style={{
              "--width": "120px",
              "--height": "100px",
              "--quantity": 6,
            }}
          >
            <div className="list">
  
              <div className="item" style={{ "--position": 1 }}>
                <img src="/images/2.png" />
              </div>
  
              <div className="item" style={{ "--position": 2 }}>
                <img src="/images/5.png" />
              </div>
  
              <div className="item" style={{ "--position": 3 }}>
                <img src="/images/6.png" />
              </div>
  
              <div className="item" style={{ "--position": 4 }}>
                <img src="/images/7.png" />
              </div>
  
              <div className="item" style={{ "--position": 5 }}>
                <img src="/images/8.png" />
              </div>
  
              <div className="item" style={{ "--position": 6 }}>
                <img src="/images/10.png" />
              </div>
  
            </div>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Skills;
  





  
  