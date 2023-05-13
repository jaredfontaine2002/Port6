import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'I am a data analyst with a passion for using data to solve problems. I have experience working with a variety of data sources, including SQL databases, Excel spreadsheets, and Python. I am proficient in using data analysis techniques to identify trends, make predictions, and communicate findings. '}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    ' I have a proven track record of success in using data to improve business outcomes. In my previous role as a data analyst for Tim Day for Ward 5 DC Council race in 2008, I used SQL to query the voter registration database to identify potential voters. I also created reports and presentations to communicate my findings to the campaign staff. This work resulted in an increase in voter turnout in the Ward 5 election.. '}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || '  As a former data analyst for the Marketing Department at Wheeling Jesuit University, I use Excel to create pivot tables and other Microsoft Excel features to track marketing campaigns. I also use Python to create interactive dashboards using Pandas, Matplotlib, and Dash. This work has resulted in an increase in the effectiveness of marketing campaigns at Wheeling Jesuit University. I am a cyclist and I love data. I am always looking for new ways to use data to improve the world. I am confident that my skills and experience would be a valuable asset to any organization'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
