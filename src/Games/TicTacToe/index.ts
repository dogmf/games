import { GameDescription } from "../index";
import TicTacToe from "./TicTacToe";
import img from "./Tic_tac_toe.svg.png";

const index: GameDescription = {
  code: "tic_tac_toe",
  name: "Tic-tac-toe",
  component: TicTacToe,
  background: img,
  underConstruction: true,
};

export default index;
