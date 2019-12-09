import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Welcome extends React.Component {

  render() {
    return (
      <section id="welcome" className="text-center text-white">
          <div className="container">
              <div id="content-wrapper" className="row" data-aos="fade-down" data-aos-delay="500">
                  <div className="col-xs-12 col-md-12">
                      <h1 className="text-uppercase">
                          <strong>Welcome to My Page</strong>
                      </h1>
                      <hr/>
                  </div>
                  <div className="col-xs-12 col-md-12">
                      <p className="text-faded">This is my personal website. It will explain about Who am i, What skills that i have, and What i have done!</p>
                      <p className="text-faded"> Click button below to find out more about me!</p>
                      <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}

class About extends React.Component {

  render() {
    return (
      <section id="about" className="text-center">
          <div className="container">
              <div id="content-wrapper" className="row" data-aos="flip-left" data-aos-offset="300">
                  <div className="col-md-12">
                      <h1>About Me</h1>
                      <hr />
                  </div>
                  <div className="col-md-12">
                      <p>Hello! My name is Mohammed El Faza. You can call me Faza. I was born in Jakarta on 20 November 1996. Currently I am studying Information Technology at SGU.</p>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}

class Education extends React.Component {

  render() {
    return (
      <section id="education" className="text-center">
          <div className="container">
              <div id="content-wrapper" className="row">
                  <div className="col-md-12">
                      <h1>Education</h1>
                      <hr />
                  </div>
                  <div className="col-md-6" data-aos="fade-up">
                      <div className="list-education">
                          <div className="row">
                              <div className="col-md-12 edu-img">
                                  <a href="http://annajah-jkt.sch.id/" target="_blank"><img className="img-responsive" src="/img/education/annajah_logo.png" /></a>
                              </div>
                              <div className="col-md-12">
                                  <h3>MA. Annajah Islamic School</h3>
                                  <h5>Science</h5>
                                  <p>2011 - 2014</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6" data-aos="fade-up">
                      <div className="list-education">
                          <div className="row">
                              <div className="col-md-12 edu-img">
                                  <a href="http://www.sgu.ac.id/" target="_blank"><img className="img-responsive" src="/img/education/sgu_logo.png" /></a>
                              </div>
                              <div className="col-md-12">
                                  <h3>Swiss German University</h3>
                                  <h5>Information Technology</h5>
                                  <p>2014 - 2018</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}

class Skills extends React.Component {

  render() {
    return (
      <section id="skills" className="text-center text-white">
          <div className="container">
              <div id="content-wrapper" className="row">
                  <div className="col-md-12">
                      <h1>Skills</h1>
                      <hr />
                  </div>
                  <div className="col-md-12">
                      <div className="progress skill-bar">
                          <div className="progress-bar bg-tomato" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                              <span className="skill">HTML <i className="val">80%</i></span>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-12">
                      <div className="progress skill-bar">
                          <div className="progress-bar bg-tomato" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                              <span className="skill">CSS <i className="val">80%</i></span>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-12">
                      <div className="progress skill-bar">
                          <div className="progress-bar bg-tomato" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                              <span className="skill">JAVASCRIPT <i className="val">70%</i></span>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-12">
                      <div className="progress skill-bar">
                          <div className="progress-bar bg-tomato" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                              <span className="skill">PHP <i className="val">70%</i></span>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-12">
                      <div className="progress skill-bar">
                          <div className="progress-bar bg-tomato" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                              <span className="skill">MySQL <i className="val">60%</i></span>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-12">
                      <div className="progress skill-bar">
                          <div className="progress-bar bg-tomato" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                              <span className="skill">JAVA <i className="val">50%</i></span>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-12">
                      <div className="progress skill-bar">
                          <div className="progress-bar bg-tomato" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                              <span className="skill">C++ <i className="val">30%</i></span>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-12">
                      <div className="progress skill-bar">
                          <div className="progress-bar bg-tomato" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                              <span className="skill">LARAVEL FRAMEWORK <i className="val">80%</i></span>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-12">
                      <div className="progress skill-bar">
                          <div className="progress-bar bg-tomato" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                              <span className="skill">WORDPRESS (CMS) <i className="val">70%</i></span>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-12">
                      <div className="progress skill-bar">
                          <div className="progress-bar bg-tomato" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                              <span className="skill">MAGENTO (CMS)  <i className="val">65%</i></span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}

class Projects extends React.Component {

  render() {

    return (
        <section id="projects" className="text-center">
          <div className="container">
              <div id="content-wrapper" className="row">
                  <div className="col-md-12">
                      <h1>Projects</h1>
                      <hr />
                  </div>
                  <div className="col-lg-10 col-lg-offset-1 text-center">
                      <div className="row">
                          <div className="list-project">
                              <div className="col-md-6" data-aos="zoom-in" data-aos-delay="300">
                                  <div className="portfolio-item">
                                      <a href="img/portfolio/sgu-w.png" data-lightbox="project" data-title="SGU-W (Finished) https://sgu-westphalia.com/">
                                          <img className="img-portfolio img-responsive" src="img/portfolio/sgu-w.png" />
                                          <div className="portfolio-box-caption">
                                              <div className="portfolio-box-caption-content">
                                                  <div className="project-category text-faded">
                                                      Website Design & Development
                                                  </div>
                                                  <div className="project-name">
                                                      SGU-W
                                                  </div>
                                              </div>
                                          </div>
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div className="list-project">
                              <div className="col-md-6"  data-aos="zoom-in">
                                  <div className="portfolio-item">
                                      <a href="img/portfolio/jags-kuliner.png" data-lightbox="project" data-title="Jag's Kitchen (Under Development)">
                                          <img className="img-portfolio img-responsive" src="img/portfolio/jags-kuliner.png" />
                                          <div className="portfolio-box-caption">
                                              <div className="portfolio-box-caption-content">
                                                  <div className="project-category text-faded">
                                                      Website Design & Development
                                                  </div>
                                                  <div className="project-name">
                                                      Jag's Kitchen
                                                  </div>
                                              </div>
                                          </div>
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div className="list-project">
                              <div className="col-md-6" data-aos="zoom-in" data-aos-delay="300">
                                  <div className="portfolio-item">
                                      <a href="img/portfolio/wangkam-media.png" data-lightbox="project" data-title="Wangkam Media (Finished) http://wangkam.media/">
                                          <img className="img-portfolio img-responsive" src="img/portfolio/wangkam-media.png" />
                                          <div className="portfolio-box-caption">
                                              <div className="portfolio-box-caption-content">
                                                  <div className="project-category text-faded">
                                                      Website Design & Development
                                                  </div>
                                                  <div className="project-name">
                                                      Wangkam Media
                                                  </div>
                                              </div>
                                          </div>
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div className="list-project">
                              <div className="col-md-6" data-aos="zoom-in" data-aos-delay="300">
                                  <div className="portfolio-item">
                                      <a href="img/portfolio/sess.png" data-lightbox="project" data-title="Simulation Energy Supply System (Finished)">
                                          <img className="img-portfolio img-responsive" src="img/portfolio/sess.png" />
                                          <div className="portfolio-box-caption">
                                              <div className="portfolio-box-caption-content">
                                                  <div className="project-category text-faded">
                                                      Website Design & Development
                                                  </div>
                                                  <div className="project-name">
                                                      Simulation Energy Supply System
                                                  </div>
                                              </div>
                                          </div>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}

class WorkingExperience extends React.Component {

  render() {

    return (
      <section id="working-experience" className="text-center">
          <div className="container">
              <div id="content-wrapper" className="row">
                  <div className="col-md-12">
                      <h1>Working Experience</h1>
                      <hr />
                  </div>
                  <div className="col-md-6" data-aos="fade-up">
                      <div className="list-working-experience">
                          <div className="row">
                              <div className="col-md-12 work-img">
                                  <a href="https://www.infomedia.co.id/" target="_blank"><img className="img-responsive" src="/img/working-experience/infomedia_logo.png" /></a>
                              </div>
                              <div className="col-md-12">
                                  <h3>PT. Infomedia Nusantara</h3>
                                  <h5>Internship as System Analyst</h5>
                                  <p>Sep 2015 - Feb 2016</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6" data-aos="fade-up">
                      <div className="list-working-experience">
                          <div className="row">
                              <div className="col-md-12 work-img">
                                  <a href="http://www4.fh-swf.de/de/home/ueber_uns/standorte/so/campus/sgu/sguw.php" target="_blank"><img className="img-responsive" src="/img/working-experience/sguw_logo.png" /></a>
                              </div>
                              <div className="col-md-12">
                                  <h3>Swiss German University Westphalia (Germany)</h3>
                                  <h5>Internship as Web Developer</h5>
                                  <p>Aug 2017 - Feb 2018</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    );
  }
}

class Body extends React.Component {

  render() {
    return (
      <div id="page-wrapper">
        <Welcome />
        <About />
        <Education />
        <Skills />
        <Projects />
        <WorkingExperience />
      </div>
    );
  }
}
// ========================================

ReactDOM.render(
  <Body />,
  document.getElementById('root')
);