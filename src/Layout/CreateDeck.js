import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { createDeck } from "../utils/api";
function CreateDeck() {
  const history = useHistory();
  const initialForm = {
    name: "",
    description: "",
  };
  const [formData, setFormData] = useState(initialForm);
  const changeHandler = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createDeck(formData).then((data) => history.push(`/decks/${data.id}`));
    setFormData({ ...initialForm });
  };
  const cancelHandler = () => {
    history.push("/");
  };
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> / Create Deck
      </nav>
      <h1>Create Deck</h1>
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

export default CreateDeck;
