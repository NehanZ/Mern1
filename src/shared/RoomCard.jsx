import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from "react-router-dom";
import './roomcard.css'

import calculateAvgRating from '../utils/avgRating';

const RoomCard = ({ room }) => {

    const { id, title, photo, price, featured, reviews } = room;

    const {totalRating,avgRating} = calculateAvgRating(reviews)

    return (
        <div className="room__card">
            <Card>
                <div className="room__img">
                    <img src={photo} alt="room-img" />
                    {featured && <span>Featured</span>}
                </div>
    
                <CardBody>
                    <div className="card__top  align-items-center">
                        <span className="room__rating d-flex align-items-center gap-1">
                            <i className="ri-star-fill"></i>
                            {avgRating === 0 ? null : avgRating}
                            {totalRating === 0 ? 'Not Rated' : <span>({reviews.length})</span>}
                        </span>
                    </div>
                    <h5 className="room__title">
                        <Link to={`/rooms/${id}`}>{title}</Link>
                    </h5>
                    <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                        <h5>
                            ${price} <span>/ per person</span>
                        </h5>
                        <button className="btnbook booking__btn">
                            <Link to={`/rooms/${id}`}>Book Now</Link>
                        </button>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};
export default RoomCard;
