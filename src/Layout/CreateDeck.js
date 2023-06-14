import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min";
import { createDeck } from "../utils/api";
import DeckForm from "./DeckForm";
function CreateDeck() {
  const history = useHistory();
  const initialForm = {
    name: "",
    description: "",
  };
  const [formData, setFormData] = useState(initialForm);

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
      <DeckForm
        formData={formData}
        handleSubmit={handleSubmit}
        setFormData={setFormData}
        cancelHandler={cancelHandler}
      />
    </div>
  );
}

export default CreateDeck;
