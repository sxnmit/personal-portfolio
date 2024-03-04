import Carousel from "react-multi-carousel";
import React from 'react';
import "react-multi-carousel/lib/styles.css";
import PythonOriginal from 'devicons-react/lib/icons/PythonOriginal';
import { Container, Col, Row } from 'react-bootstrap';
import ReactOriginal from 'devicons-react/lib/icons/ReactOriginal';
import COriginal from 'devicons-react/lib/icons/COriginal';
import JavaOriginal from 'devicons-react/lib/icons/JavaOriginal';
import colorSharp from "../assets/images/color-sharp.png"
import ElmOriginalWordmark from 'devicons-react/lib/icons/ElmOriginalWordmark';
import HaskellOriginal from 'devicons-react/lib/icons/HaskellOriginal';
import CssOriginal from 'devicons-react/lib/icons/Css3Original';
import HTMLOriginal from 'devicons-react/lib/icons/Html5Original'
import Cplusplus from 'devicons-react/lib/icons/CplusplusOriginal'
import Matlab from 'devicons-react/lib/icons/MatlabOriginal'
import MatlabPlot from 'devicons-react/lib/icons/MatplotlibOriginal'
import JavaScript from 'devicons-react/lib/icons/JavascriptOriginal'


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <p>Here are a few of my skills that I have developed through personal projects and my educational career.</p>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <PythonOriginal size='150' />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <ReactOriginal size='150' />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <JavaOriginal size='150' />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <CssOriginal size='150' />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <HTMLOriginal size='150' />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <JavaScript size='150' />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <COriginal size='150' />
                  <h5>C</h5>
                </div>
                <div className="item">
                  <Cplusplus size='150' />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <ElmOriginalWordmark size='150' />
                  <h5>Elm</h5>
                </div>
                <div className="item">
                  <HaskellOriginal size='150' />
                  <h5>Haskell</h5>
                </div>
                <div className="item">
                  <Matlab size='150' />
                  <h5>Matlab</h5>
                </div>
                <div className="item">
                  <MatlabPlot size='150' />
                  <h5>Matlab Plot</h5>
                </div>

              </Carousel>
            </div>
          </Col>
        </Row>
      </Container >
      <img className="background-image-left" src={colorSharp}></img>
    </section >
  )


}