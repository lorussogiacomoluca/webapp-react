import React from "react";

const RecensioneCard = ({ review }) => {
  const { name, text, vote } = review;
  return (
    <>
      <div className="row mt-4">
        <div className="col-12">
          <div className="card p-4">
            <div className="row d-flex justify-content-start">
              <div className="col-auto">
                <h1>{vote}</h1>
              </div>
              <div className="col">
                <div className="card-text">{text}</div>
                <p>{name}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecensioneCard;
