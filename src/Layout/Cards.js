import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import CreateCard from "./CreateCard";
import EditCard from "./EditCard";

function Cards(){
    const {path} = useRouteMatch()
    return(
        <Switch>
            <Route path={`${path}/new`}>
                <CreateCard></CreateCard>
            </Route>
            <Route path={`${path}/:cardId/edit`}>
                <EditCard></EditCard>
            </Route>
        </Switch>
    )
}

export default Cards;