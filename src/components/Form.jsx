import React from "react";

const Form = () => {
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="newArticleInput" className="form-label">
            Titolo nuovo articolo
          </label>
          <input
            type="text"
            className="form-control"
            id="newArticleInput"
            placeholder="Inserisci il titolo del nuovo articolo"
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
            Inserisci
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
