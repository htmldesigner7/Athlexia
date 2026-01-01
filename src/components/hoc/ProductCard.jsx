import React from "react";
import "../../styles/ProductCard.css";
import venueImg from "../../assets/images/popular-venues1.png";
import awardIcon from "../../assets/images/awards.png";

function ProductCard() {
    return (
        <div className="venue-card">

            {/* Image */}
            <div className="venue-card__image">
                <img src={venueImg} alt="Striker Football Turf" />
            </div>

            {/* Content */}
            <div className="venue-card__content">

                {/* Top */}
                <div className="venue-card__header">
                    <div>
                        <h4 className="venue-card__title">Striker Football Turf</h4>
                        <p className="venue-card__price">From ₹1,000/hr</p>
                    </div>

                    <img
                        className="venue-card__badge"
                        src={awardIcon}
                        alt="Award"
                    />
                </div>

                <hr className="venue-card__divider" />

                {/* Location */}
                <div className="venue-card__location">
                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.9852 6.99258C13.9852 9.43418 11.1908 13.6922 9.13652 16.493C8.88991 16.829 8.56764 17.1023 8.19578 17.2907C7.82392 17.479 7.41294 17.5772 6.99609 17.5772C6.57925 17.5772 6.16826 17.479 5.79641 17.2907C5.42455 17.1023 5.10227 16.829 4.85566 16.493C2.79844 13.6934 0 9.43359 0 6.99258C2.76349e-08 5.13803 0.736716 3.35944 2.04808 2.04808C3.35944 0.736716 5.13803 0 6.99258 0C8.84713 0 10.6257 0.736716 11.9371 2.04808C13.2484 3.35944 13.9852 5.13803 13.9852 6.99258Z" fill="#DDDDDD" />
                        <path d="M6.99277 10.3537C8.84897 10.3537 10.3537 8.84897 10.3537 6.99277C10.3537 5.13658 8.84897 3.63184 6.99277 3.63184C5.13658 3.63184 3.63184 5.13658 3.63184 6.99277C3.63184 8.84897 5.13658 10.3537 6.99277 10.3537Z" fill="white" />
                    </svg>

                    <p>
                        <span>Ahmedabad - </span> Prahlad Nagar
                    </p>
                </div>

                {/* Rating */}
                <div className="venue-card__rating">
                    <div className="venue-card__stars">
                        {[...Array(5)].map(() => (
                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.13293 0L9.55754 4.1628L14.2659 5.18237L11.056 8.7747L11.5413 13.5676L7.13293 11.625L2.72454 13.5676L3.20982 8.7747L2.86102e-06 5.18237L4.70831 4.1628L7.13293 0Z" fill="#40AC44" />
                            </svg>

                        ))}
                    </div>

                    <p className="venue-card__reviews">4.9 (180 Reviews)</p>
                </div>

                {/* Button */}
                <a href="#" className="com_btn">
                    View Details
                </a>
            </div>
        </div>
    );
}

export default ProductCard;
