import { useState } from "react";
import { DropdownProjects, DropdownResumes} from "./NavbarDrop";

export default function Navbar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return <nav class="nav">
    <div class="left_section">
      <img class="sitelogo" src={require('./logo512_w.png')} />
      <p class="title">SQUARE-1</p>
    </div>
    <div class="right_section">

      <div class="drop_button">
        <a href="/">Home</a>
      </div>

      <div class="drop_button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Projects
        {/* <DropdownMenu /> */}
        {isDropdownVisible && <DropdownProjects />}
      </div>
      
      <div class="drop_button" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Resumes
        {/* <DropdownMenu /> */}
        {isDropdownVisible && <DropdownResumes />}
      </div>

      <div class="drop_button">
        <a href="/contact">Contact</a>
      </div>

    </div>
  </nav>
}
