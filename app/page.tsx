import Image from "next/image";

export default function Home() {
  return (
    <div className="main">
      {/* api for weather, stock? */}
      <nav>
        <div className="logo">
          <a href="/">Mia Truong</a>
        </div>

        <div className="navlink">
          <ul>
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero">
        <div className="note">
          <div className="circle"></div>
          {/* Write script for time */}
          <p>GOOD EVENING · OPEN TO NEW ROLES</p>
        </div>

        <div className="intro">
          <h1>I build fast, accessible interfaces that feel considered.</h1>
          <p>[One sentence on what you build and who it is for.] Currently looking for a [role] where I can [what you want to do].</p>
          <div className="hero-btn">
            <a href="#work" className="work-btn">View Work →</a>
            <a href="#contact" className="contact-btn">Get in touch</a>
          </div>
        </div>
      </header>
      
      <section id="work" className="section">
        <h1>Selected Work</h1>
      </section>

      <section id="about" className="section">
        <h1>About</h1>
      </section>
      
      <section id="contact" className="section">
          <h1>Contact</h1>
      </section>
    </div>
  );
}
