import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { listDecks } from "../utils/api";
import { useState } from "react";
import ListDecks from "./ListDecks";

function Home() {
  const [allDecks, setAllDecks] = useState([]);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    listDecks().then((data) => setAllDecks(data));
  }, [rerender]);

  return (
    <div>
      <button className="btn btn-secondary rounded mb-3">
        <Link to="/decks/new" className="text-white">
          + Create Deck
        </Link>
      </button>
      {allDecks.map((deck) => (
        <ListDecks deck={deck} key={deck.id} setRerender= {setRerender} rerender={rerender}/>
      ))}
    </div>
  );
}

export default Home;
