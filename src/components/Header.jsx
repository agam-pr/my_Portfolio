const Header = () => {
    return (
      <header>
        <div className="left">
          <img src="/images/digital brain (2).png" alt="logo" />
          <h2>Hey, myself Agam Prakash</h2>
        </div>
  
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
  
        
        <div className="box-icons">
  <a
    href="https://github.com/agam-pr"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="bx bxl-github"></i>
  </a>

  <a
    href="https://www.linkedin.com/in/agam-prakash-490683278"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className="bx bxl-linkedin"></i>
  </a>
</div>

  
        <i className="bx bx-menu menu-icon"></i>
      </header>
    );
  };
  
  export default Header;
  