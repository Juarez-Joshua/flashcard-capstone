import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import StudyCard from "./StudyCard";
function CheckCardLength({ cards, deckId }) {
  const [cardNumber, setCardNumber] = useState(0);

  return (
    <div>
      {cards.length >= 3 ? (
        <div className="border">
          <StudyCard
            card={cards[cardNumber]}
            totalCardNum={cards.length}
            setCardNumber={setCardNumber}
            cardNumber={cardNumber}
          />
        </div>
      ) : (
        <div>
          <p>
            <span>Not enough cards</span>.You need at least 3 cards to study. There are {cards.length} cards
            in the deck
          </p>
          <button className="btn btn-primary">
            <Link className="text-white" to={`/decks/${deckId}/cards/new`}>
              Create card
            </Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default CheckCardLength;
