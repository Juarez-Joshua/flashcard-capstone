import React from "react";

function DeckForm({ formData, handleSubmit, setFormData, cancelHandler }) {
  const changeHandler = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label> <br />
        <input
          name="name"
          id="name"
          type="text"
          placeholder="Deck Name"
          onChange={changeHandler}
          value={formData.name}
          rows={4}
          style={{ width: "100%" }} // Set width to 100%
        ></input>
        <br></br>
        <label name="description" className="mt-3">
          Description
        </label>
        <br />
        <textarea
          name="description"
          id="description"
          type="text"
          placeholder="Brief description of Deck"
          onChange={changeHandler}
          value={formData.description}
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

export default DeckForm;
