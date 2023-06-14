import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom/cjs/react-router-dom.min";
import { readDeck } from "../utils/api";
import CheckCardLength from "./CheckCardLength";
function StudyDeck() {
  const [deck, setDeck] = useState({cards:[]});
  const { deckId } = useParams();

  useEffect(() => {
    const intId = Number(deckId);
    readDeck(intId)
    .then(setDeck)
  },[deckId]);

  return (
  <div>
    <nav><Link to= "/">Home</Link> / <Link to={`/decks/${deck.id}`}>{deck.name}</Link> / Study</nav>
    <h2>{deck.name}: Study</h2>
    <CheckCardLength cards = {deck.cards} deckId={deck.id}/>
  </div>
  );
}

export default StudyDeck;
