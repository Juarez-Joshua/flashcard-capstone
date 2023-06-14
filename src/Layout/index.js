import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Home";
import CreateDeck from "./CreateDeck";
import EditDeck from "./EditDeck";
import StudyDeck from "./StudyDeck";
import ViewDeck from "./ViewDeck";
import CreateCard from "./CreateCard";
import EditCard from "./EditCard";
function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard></EditCard>
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <CreateCard></CreateCard>
          </Route>
          <Route path="/decks/:deckId/study">
            <StudyDeck></StudyDeck>
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck></EditDeck>
          </Route>
          <Route path="/decks/:deckId">
            <ViewDeck></ViewDeck>
          </Route>
          <Route exact path="/">
            <Home></Home>
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
