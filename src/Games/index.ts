import React from "react";
import BullsNCows from "./BullsNCows";
import Tictactoe from "./TicTacToe";

export interface GameDescription {
  code: string;
  name: string;
  background: string;
  component: React.ComponentType<any>;
  description?: string;
  underConstruction?: boolean;
}

const games: GameDescription[] = [BullsNCows, Tictactoe];

export default games;
