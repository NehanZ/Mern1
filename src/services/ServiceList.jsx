import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import wellnessImg from "../assets/images/weather.png";
import WorkshopImg from "../assets/images/guide.png";
import FacilitiesImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: wellnessImg,
    title: "Wellness Treatments & Activities",
    desc: "Wide range of treatments & activities to enhance your health and wellbeing."
  },
  {
    imgUrl: WorkshopImg,
    title: "Workshops",
    desc: "Learn and be inspired to continue your better and healthier lifestyle."
  },
  {
    imgUrl: FacilitiesImg,
    title: "Facilities",
    desc: "Enjoy every moment of your stay with well-rounded services & facilities"
  },
  
];

const ServiceList = () => {
    return (
      <>
        {servicesData.map((item, index) => (
          <Col lg="3" key={index}>
            <ServiceCard item={item} />
          </Col>
        ))}
      </>
    );
  };
  

export default ServiceList;
