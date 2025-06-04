import React from "react";

const PostReview = () => {
  return (
    <div className="container mt-4">
      <h3>Lascia una recensione</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nome
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Inserisci il tuo nome"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            Recensione
          </label>
          <textarea
            className="form-control"
            id="text"
            rows="4"
            placeholder="Scrivi la tua recensione"
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="vote" className="form-label">
            Voto
          </label>
          <select className="form-select" id="vote" defaultValue="">
            <option value="" disabled>
              Seleziona un voto
            </option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Invia Recensione
        </button>
      </form>
    </div>
  );
};

export default PostReview;
