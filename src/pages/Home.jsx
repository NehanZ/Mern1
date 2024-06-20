import React from "react";
import '../styles/home.css';

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import experienceImg from '../assets/images/experience.png';

import Subtitle from '../shared/Subtitle';

import SearchBar from "../shared/SearchBar.jsx";
import ServiceList from "../services/ServiceList";
import FeaturedRoomList from "../components/Featuredrooms/FeaturedRoomList";
import ImgLayout from "../components/imggallery/ImgLayout";
import HomeReview from "../components/Homereview/HomeReview";
import NewsLetter from "../shared/NewsLetter";

const Home = () => {
  return (

    <>

    {/* Section */}
    
    <section>
    <div className="hero__bg">
    <h1>
              Overlooking the turquoise <br/>waters of the<br/><span className="highlight">Andaman Sea</span>
              </h1>
    </div>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before You Go'} />
              </div>
              
              <p>
              Nothing soothes the soul and helps you ease <br/>into relax mode like the ocean. Every one of our Suites 
              or villas<br/> takes in a view of blue and opens to the sea air.<br/> Fall asleep to the beat of the ocean,<br/> 
              and wake up to her sparkling tease of a great day ahead!
              </p>
            </div>
          </Col>
              <Col lg='2'>
                <div className="hero__img-box">
                  <img src={heroImg} alt="" /> 
                </div>
              </Col>
              <Col lg='2'>
                <div className="hero__img-box">
                  <video src={heroVideo} alt="" controls />
                </div>
              </Col>
              <Col lg='2'>
                <div className="hero__img-box">
                  <img src={heroImg02} alt="" />
                </div>
              </Col>  
              <SearchBar/>
        </Row>
      </Container>
    </section>

    {/* Section */}

    <section>
      <Container>
        <Row>
          <Col lg="3">
            <h2 className="services__title">We offer our best services</h2>
          </Col>
          <ServiceList />
          </Row>
      </Container>
    </section>

    {/*new section*/}

    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2 className="featured__tour-title">Our featured tours</h2>
          </Col>
          <FeaturedRoomList />
        </Row>
      </Container>
    </section>

    {/*new section*/}

    {/*new section*/}
    
    {/* <section>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="experience__content">
                        <h3 className="subtitle">{"experience"}</h3>
                            <h2>
                                With our all experience <br /> we will serve you
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                                Quas aliquam, hic tempora inventore suscipit unde.
                            </p>
                        </div>
                        <div className="counter__wrapper d-flex align-items-center gap-5">
                            <div className="counter__box">
                                <span>12k+</span>
                                <h6>Successful Trip</h6>
                            </div>
                            <div className="counter__box">
                                <span>11k+</span>
                                <h6>Successful Trip</h6>
                            </div>
                            <div className="counter__box">
                                <span>10k+</span>
                                <h6>Successful Trip</h6>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6">
                        <div className="experience__img">
                          <img src={experienceImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section> */}
    
    {/*new section*/}

    {/*new section*/}
    
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <h3 className="subtitle">{"GALLERY"}</h3>
            <h2 className="gallery__title">Check  The Experiences</h2>
          </Col>
          <Col lg="12">
            <ImgLayout />
          </Col>
        </Row>
      </Container>
    </section>

    {/*new section*/}

    {/*new section*/}

    <section>
      <Container> 
        <Row>
          <Col lg='12'>
            <h3 className="subtitle">{"About Us"}</h3>
            <h2 className="testimonial___title">What our custormers say about us</h2>
          </Col>
          <Col lg="12">
            <HomeReview />
          </Col>
        </Row>
      </Container>
    </section>

    {/*new section*/}

    <NewsLetter />

    </>
  );
};

export default Home;
