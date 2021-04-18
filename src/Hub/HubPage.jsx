import React from "react";
import PageLayout from "../Layouts/PageLayout";
import GamesList from "./GamesList";

function HubPage() {
  return (
    <PageLayout>
      <p>Look at all these games!</p>
      <GamesList />
    </PageLayout>
  );
}

export default HubPage;
