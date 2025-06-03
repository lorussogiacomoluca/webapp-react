import React from "react";

const Rating = ({ avg }) => {
  const avgRounded = Math.round(avg * 2) / 2;
  const renderStar = (n) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= avgRounded) {
        stars.push(<i key={i} className="fa-solid text-warning fa-star"></i>);
      } else if (i - 0.5 === avgRounded) {
        stars.push(
          <i key={i} className="fa-solid text-warning fa-star-half-stroke"></i>
        );
      } else {
        stars.push(<i key={i} className="fa-regular text-warning fa-star"></i>);
      }
    }
    return stars;
  };
  return <div>{renderStar(avgRounded)}</div>;
};

export default Rating;
