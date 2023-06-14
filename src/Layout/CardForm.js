import React from "react";

function CardForm({ handleSubmit, cancelHandler, formData, setFormData }) {
  const changeHandler = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Front</label> <br />
        <textarea
          name="front"
          id="front"
          type="text"
          placeholder="Front side of card"
          onChange={changeHandler}
          value={formData.front}
          rows={4}
          style={{ width: "100%" }} // Set width to 100%
        ></textarea>
        <br></br>
        <label name="description" className="mt-3">
          Back
        </label>
        <br />
        <textarea
          name="back"
          id="back"
          type="text"
          placeholder="Back side of card"
          onChange={changeHandler}
          value={formData.back}
          rows={4}
          style={{ width: "100%" }} // Set width to 100%
        ></textarea>
        <br></br>
        <button onClick={cancelHandler} className="mr-2 btn btn-secondary">
          Cancel
        </button>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default CardForm;
