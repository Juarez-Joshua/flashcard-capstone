import React, { useState, useEffect } from "react";
import CardForm from "./CardForm";
import {
  Link,
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom";
import { createCard, readDeck } from "../utils/api";
function CreateCard() {
  const { deckId } = useParams();
  const history = useHistory();
  const [deck, setDeck] = useState({});

  useEffect(() => {
    readDeck(deckId).then((fetchedDeck) => setDeck(fetchedDeck));
  }, [deckId]);

  const initialForm = {
    front: "",
    back: "",
  };

  const [formData, setFormData] = useState({ ...initialForm });

  const handleSubmit = (e) => {
    e.preventDefault();
    createCard(deck.id, formData)
    setFormData({...initialForm});
  };
  const cancelHandler = () => {
    history.push(`/decks/${deck.id}`)
  };
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> /{" "}
        <Link to={`/decks/${deck.id}`}>{deck.name}</Link> / <span>Add Card</span>
      </nav>
      <CardForm
        handleSubmit={handleSubmit}
        cancelHandler={cancelHandler}
        formData={formData}
        setFormData={setFormData}
      />
    </div>
  );
}

export default CreateCard;
