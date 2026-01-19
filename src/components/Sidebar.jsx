import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`sidebar ${open ? "open-sidebar" : "close-sidebar"}`}>
      <i className="bx bx-x close-icon" onClick={() => setOpen(false)}></i>

      <ul>
        <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
        <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
        <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>

      <div className="social-sidebar">
        <a href="https://github.com/agam-pr" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/agam-prakash-490683278" target="_blank">LinkedIn</a>
      </div>
    </div>
  );
};

export default Sidebar;
