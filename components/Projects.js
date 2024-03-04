import React from 'react';
import { Container, Nav, Col, Row, Tab } from 'react-bootstrap';
import { ProjectCard } from "./ProjectCard"
import colorSharp2 from "../assets/images/color-sharp2.png"
import projImg1 from "../assets/images/projImage1.png"
import projImg2 from "../assets/images/projImage2.png"
import projImg3 from "../assets/images/projImage3.png"
import TrackVisibility from 'react-on-screen';
export const Projects = () => {
  const projects = [
    {
      title: "Automated Home Security System",
      description: "Arduino, Raspberry Pi, and Web Development",
      imgUrl: projImg1
    }
    ,
    {
      title: "Dinosaur Game",
      description: "Pygame replica of Google's famous game",
      imgUrl: projImg2
    }
    ,
    {
      title: "Personal Portfolio Website",
      description: "UI design with React",
      imgUrl: projImg3
    }
  ]
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Here are some of the projects I have worked on so far!</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>

  )

}