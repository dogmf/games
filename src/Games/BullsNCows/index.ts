import { GameDescription } from "../index";
import BullsNCowsPage from "./BullsNCowsPage";
import img from "./cattle-like-mammal-cow-goat-family-dairy-holstein-friesian.jpg";

const index: GameDescription = {
  code: "bulls_n_cows",
  name: "Bulls and Cows",
  component: BullsNCowsPage,
  background: img,
  description: "Classic game of guessing numbers.",
  // underConstruction: true,
};

export default index;
