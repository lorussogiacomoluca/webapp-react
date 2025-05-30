import React from "react";

const RecensioneCard = ({ recensione }) => {
  const { nome, testo, voto } = recensione;
  return (
    <>
      <div className="row mt-4">
        <div className="col-12">
          <div className="card p-4">
            <div className="row d-flex justify-content-start">
              <div className="col-auto">
                <h1>{voto}</h1>
              </div>
              <div className="col">
                <div className="card-text">{testo}</div>
                <p>{nome}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecensioneCard;
