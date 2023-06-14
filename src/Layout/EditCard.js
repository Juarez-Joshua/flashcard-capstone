import React, { useState, useEffect } from "react";
import CardForm from "./CardForm";
import { Link, useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { updateCard, readDeck, readCard } from "../utils/api";

function EditCard() {
  const { deckId, cardId } = useParams();
  const history = useHistory();
  const [deck, setDeck] = useState({});
  const [formData, setFormData] = useState({});
  useEffect(() => {
    readDeck(deckId).then((fetchedDeck) => setDeck(fetchedDeck));
  }, [deckId]);

  useEffect(() => {
    readCard(cardId).then((fetched) => setFormData(fetched));
  }, [cardId]);
  const handleSubmit = (e) => {
      e.preventDefault()
      updateCard(formData)
      history.push(`/decks/${deck.id}`)
  };
  const cancelHandler = () => {
    history.push(`/decks/${deck.id}`)
  };
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> / <Link to={`/decks/${deck.id}`}>{deck.name}</Link> / Edit Card {formData.id}
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

export default EditCard;
