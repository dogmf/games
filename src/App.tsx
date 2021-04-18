import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Breadcrumbs from "./Components/Breadcrumbs/Breadcrumbs";
import getGamesRoutes from "./Games/getGamesRoutes";
import HubPage from "./Hub/HubPage";
import PageLayout from "./Layouts/PageLayout";
import { homepage } from "./config.json";

const App = () => {
  return (
    <PageLayout title="dogmf/games"  header={<Breadcrumbs />}>
      <Switch>
        <Route path={homepage}>
          <Switch>
            <Route exact path={homepage} component={HubPage} />
            {getGamesRoutes({ path: homepage })}
            <Redirect to={homepage} />
          </Switch>
        </Route>
        <Redirect to={homepage} />
      </Switch>
    </PageLayout>
  );
};

export default App;
