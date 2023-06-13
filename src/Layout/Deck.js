import React from "react";
import {
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom/cjs/react-router-dom.min";
import EditDeck from "./EditDeck";
import StudyDeck from "./StudyDeck";
import ViewDeck from "./ViewDeck";
import CreateCard from "./CreateCard";
import EditCard from "./EditCard";

function Deck() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path}>
        <ViewDeck></ViewDeck>
      </Route>
      <Route path={`${path}/edit`}>
        <EditDeck></EditDeck>
      </Route>
      <Route path={`${path}/study`}>
        <StudyDeck></StudyDeck>
      </Route>
      <Route path={`${path}/cards/new`}>
        <CreateCard></CreateCard>
      </Route>
      <Route path={`${path}/cards/:cardId/edit`}>
        <EditCard></EditCard>
      </Route>
    </Switch>
  );
}

export default Deck;
