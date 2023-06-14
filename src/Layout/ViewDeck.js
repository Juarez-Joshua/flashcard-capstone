import React, { useEffect, useState } from "react";
import {
  useParams,
  Link,
  useRouteMatch,
  useHistory
} from "react-router-dom/cjs/react-router-dom.min";
import { deleteDeck, readDeck } from "../utils/api";
import ListCards from "./ListCards";

function ViewDeck() {
  const [deck, setDeck] = useState({ cards: [] });
  const { deckId } = useParams();
  const { url } = useRouteMatch();
  const history = useHistory()
  useEffect(() => {
    const intId = Number(deckId);
    readDeck(intId).then(setDeck);
  }, [deckId]);
  const handleDelete = () => {
    if(window.confirm("Delete this deck? You will not be able to recover it.")){
        deleteDeck(deck.id)
        history.push("/")
    }
  };
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> / {deck.name}
      </nav>
      <div className="mt-2">
        <h4>{deck.name}</h4>
        <p>{deck.description}</p>
        <div className="d-flex justify-content-between">
          <Link to={`${url}/edit`} className="btn btn-secondary">
            Edit
          </Link>
          <Link to={`${url}/study`} className="btn btn-primary">
            Study
          </Link>
          <Link to={`${url}/cards/new`} className="btn btn-primary">
            Add Cards
          </Link>
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
        <h3 className="mt-3">Cards</h3>
        {deck.cards.map((card) => (
          <ListCards card={card} url={url} key={card.id}/>
        ))}
      </div>
    </div>
  );
}

export default ViewDeck;
