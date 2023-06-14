import React, { useState, useEffect } from "react";
import { updateDeck, readDeck } from "../utils/api";
import DeckForm from "./DeckForm";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

function EditDeck() {
  const { deckId } = useParams();
  const [deck, setDeck] = useState({ name: '', description: '', id: '' });
  const history = useHistory();

  useEffect(() => {
    readDeck(deckId)
      .then((fetchedDeck) => setDeck(fetchedDeck))
      .catch((error) => console.log(error));
  }, [deckId]);

  useEffect(() => {
    setFormData({ ...deck });
  }, [deck]);

  const [formData, setFormData] = useState({ ...deck });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateDeck(formData).then(() => history.push(`/decks/${deck.id}`));
    setFormData({ ...formData });
  };

  const cancelHandler = () => {
    history.push(`/decks/${deck.id}`);
  };

  const changeHandler = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  return (
    <div>
      <DeckForm
        formData={formData}
        handleSubmit={handleSubmit}
        changeHandler={changeHandler}
        cancelHandler={cancelHandler}
        createDeck={false}
        deck={deck}
      />
    </div>
  );
}

export default EditDeck;
