import axios from "axios";
import React, { useState } from "react";

const PostReview = ({ movie_id, fetchMovie }) => {
  const initialData = { name: "", vote: "", text: "" };
  const [formData, setFormData] = useState(initialData);
  const [isFormValide, setIsFormValide] = useState(true);

  const setFieldValue = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validateForm = () => {
    if (formData.name === "" || formData.text === "" || formData.vote === "") {
      return false;
    }
    if (isNaN(formData.vote) || formData.vote < 0 || formData.vote > 5) {
      return false;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm() === false) {
      setIsFormValide(false);
      return;
    }
    axios
      .post(`http://localhost:3000/api/movies/${movie_id}/review`, formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then(() => {
        setFormData(initialData);
        fetchMovie();
      });
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div
        className="card shadow p-4"
        style={{ maxWidth: "600px", width: "100%", borderRadius: "1rem" }}
      >
        <h3 className="mb-4 text-center">Lascia una recensione</h3>
        <form onSubmit={handleSubmit}>
          {!isFormValide && (
            <div className="row">
              <div className="col-12">
                <div className="alert alert-danger" role="alert">
                  Tutti i campi sono necessari!
                </div>
              </div>
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nome
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Inserisci il tuo nome"
              name="name"
              value={formData.name}
              onChange={setFieldValue}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="text" className="form-label">
              Recensione
            </label>
            <textarea
              className="form-control"
              id="text"
              name="text"
              rows="4"
              placeholder="Scrivi la tua recensione"
              value={formData.text}
              onChange={setFieldValue}
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="vote" className="form-label">
              Voto
            </label>
            <select
              className="form-select"
              id="vote"
              value={formData.vote}
              onChange={setFieldValue}
              name="vote"
            >
              <option value="" disabled>
                Seleziona un voto
              </option>
              {[0, 1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Invia Recensione
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostReview;
