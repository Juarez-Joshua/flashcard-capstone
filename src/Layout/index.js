import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Home";
import CreateDeck from "./CreateDeck";
import Deck from "./Deck";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path ="/">
              <Home></Home>
          </Route>
        <Route path="/decks/new">
            <CreateDeck/>
        </Route>
        <Route path="/decks/:deckId">
            <Deck />
        </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
