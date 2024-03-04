import { useState, useEffect } from "react";
import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/images/logo.png';
import navIcon1 from '../assets/images/nav-icon1.svg';
import githubicon from "../assets/images/githublogo.png";
import resume from '../assets/files/TechResume.pdf';
import resumeimg from '../assets/images/resumeImage.png';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle>
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>
              Home
            </Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href={resume} without rel="noopener noreferrer" target="_blank">
                <img src={resumeimg} />
              </a>
              <a href="https://www.linkedin.com/in/sanmit-singh" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="Linkedin" /></a>
              <a href="https://github.com/sxnmit/" target="_blank" rel="noopener noreferrer"><img src={githubicon} alt="" /></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')} ><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}