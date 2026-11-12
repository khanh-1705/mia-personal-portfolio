import React from 'react';
import { Suspense } from 'react'
import { connection } from 'next/server'

import workExperience from "../app/data/work-experience.json"
import logo from "../public/mia-logo.png"

// Selected Work component
interface SelectedWork {
  id: number; 
  company: string; 
  role: string; 
  type: string; 
  location: string; 
  startDate: string; 
  endDate: string | null; 
  current: boolean; 
  highlights: string[]; 
  skills: string[]; 
}

const SelectedWorkList: React.FC = () => {
  const selectedWorks: SelectedWork[] = workExperience as SelectedWork[];

  return (
    <div>
      <ul className="work-experience">
        {selectedWorks.map((work) => (
          <li key={work.id} className="work-list-items">
            <p>{work.role}</p>
            <p>{work.company} • {work.type}</p>
            <p>{work.startDate} - {work.current ? "Present" : work.endDate}</p>     
            <p>{work.location}</p>     
            <ul>
              {work.highlights.map((highlight, hIndex) => (
                <li key={hIndex}>{highlight}</li>
              ))}
            </ul>
            <ul>
              {work.skills.map((skill, sIndex) => (
                <li key={sIndex}>{skill}</li>
              ))}
            </ul>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

// Footer component
async function Footer() {
  await connection(); 
  const currentYear = new Date().getFullYear();

  return (
    <p>© {currentYear} Mia (Gia-Khanh Truong) · Built with Next.js, TypeScript and a little sunshine 😊🌟</p>
  )
}; 

async function FallbackFooter() {
  return (
    <p>© 2026 Mia Truong · Built with Next.js, TypeScript and a little sunshine 😊🌟</p>
  ); 
};

// Greeting Component
async function Greetings() {
  await connection(); 
  let myDate = new Date();
  let hours= myDate.getHours();
  let greet;

  if (hours >= 5 && hours < 12)
    greet =  "MORNING";
  else if (hours >= 12 && hours < 17)
    greet = "AFTERNOON";
  else if (hours >= 17 && hours < 21)
    greet = "EVENING";
  else
    greet = "NIGHT"

  return <span>GOOD {greet} · OPEN TO NEW ROLES</span>
}

async function FallbackGreetings() {
    return <span>GREAT DAY · OPEN TO NEW ROLES</span>
}

// Main component
export default function Home() {
  return (
    <div className="main">
      {/* api for weather, stock? */}
      <nav>
        <div className="logo">
          <a href="/">
            <img src={logo.src} alt="Mia Truong" />
          </a>
        </div>

        <div className="navlink">
          <ul>
            <li><a href="#work">Selected Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <header className="hero">
        <div className="note">
          <div className="circle"></div>
          <Suspense fallback={<FallbackGreetings />}>
            <Greetings />
          </Suspense>
        </div>

        <div className="intro">
          <h1>I build fast, accessible interfaces that feel considered.</h1>
          <p>[One sentence on what you build and who it is for.] Currently looking for a [role] where I can [what you want to do].</p>
          <div className="hero-btn">
            <a href="#work" className="work-btn">View Work →</a>
            <a href="#" className="contact-btn">Download my resume!</a>
          </div>
        </div>
      </header>
      
      <section id="project" className="section">
        <p>01 / WORK</p>
        <h1>Selected Work</h1>
        <p>03 PROJECTS · CASE STUDIES INSIDE</p>
      </section>
      <hr />

      <section id="about" className="section">
        <p>02 / ABOUT</p>
      </section>
      <hr />

      <section id="experience" className="section">
        <p>03 / EXPERIENCE</p>
        <h1>Relevant Experience</h1>
        <SelectedWorkList />
      </section>
      <hr />
      
      <section id="contact" className="section">
          <p>04 / CONTACT</p>
          <h1>Let's build something that glows.</h1>
          <a href="mailto:giakhanhtruong.ca@gmail.com">giakhanhtruong.ca@gmail.com</a><br />
          <a href="https://github.com/khanh-1705">GitHub</a><br />
          <a href="https://www.linkedin.com/in/mia-gia-khanh-truong-4a70642ab">LinkedIn</a><br />
        </section>
        <hr />

        <section id="footer" className="section">
          <Suspense fallback={<FallbackFooter />}>
            <Footer />
          </Suspense>
        </section>
    </div>
  );
}
