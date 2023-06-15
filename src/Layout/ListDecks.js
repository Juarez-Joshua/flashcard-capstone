import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { deleteDeck } from "../utils/api";

function ListDecks({ deck, setRerender, rerender }) {

    const handleDelete = () =>{
        if( window.confirm("Delete this deck? You will not be able to recover it")){
            deleteDeck(deck.id).then(()=>setRerender(!rerender))
        }
    }
  return (
    <div className="border border-3px p-3">
      <div className="d-flex justify-content-between">
        <h3>{deck.name}</h3>
        <p>{deck.cards.length} cards</p>
      </div>
      <p>{deck.description}</p>
      <div className="d-flex justify-content-between">
        <Link to={`/decks/${deck.id}`} className="btn btn-secondary text-white">
          View
        </Link>
        <Link
          to={`/decks/${deck.id}/study`}
          className="btn btn-primary text-white"
        >
          Study
        </Link>
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default ListDecks;
