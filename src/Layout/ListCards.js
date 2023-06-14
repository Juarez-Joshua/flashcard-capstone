import React from "react";
import { deleteCard } from "../utils/api";
import { Link } from "react-router-dom/cjs/react-router-dom";

function ListCards({ card, url }) {
    const DeleteHandler =()=>{
        if(window.confirm("Delete this card? You will not be able to recover it.")){
            deleteCard(card.id);
        }
    }
  return (
    <div className="border p-3 d-flex">
      <div className="col-6">
        <p>{card.front}</p>
      </div>
      <div className="col-6">
        <p>{card.back}</p>
        <div className="text-right">
          <Link className="btn btn-secondary mr-2" to={`${url}/cards/${card.id}/edit`}>Edit</Link>
          <button className="btn btn-danger" onClick={DeleteHandler}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ListCards;
