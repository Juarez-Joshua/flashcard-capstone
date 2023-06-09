import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function StudyCard({ card, totalCardNum, setCardNumber, cardNumber }) {
  const [showFrontSide, setShowFrontSide] = useState(true);
  const history = useHistory();
  const handleNext = () => {
    if (cardNumber + 1 === totalCardNum) {
      if (
        window.confirm("Restart Cards? Click cancel to return to home page.")
      ) {
        setCardNumber(0);
        setShowFrontSide(true);
      } else {
        history.push("/");
      }
    } else {
      setCardNumber(() => cardNumber + 1);
      setShowFrontSide(true);
    }
  };

  return (
    <div className="p-3">
      <h3>
        Card {cardNumber + 1} of {totalCardNum}
      </h3>
      <p>{showFrontSide ? card.front : card.back}</p>
      <button onClick={() => setShowFrontSide(!showFrontSide)} className="btn btn-secondary ml-2">Flip</button>
      {!showFrontSide && <button onClick={handleNext} className="btn btn-primary ml-2">Next</button>}
    </div>
  );
}

export default StudyCard;
