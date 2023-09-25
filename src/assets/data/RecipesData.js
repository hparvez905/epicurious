import { v4 as uuidv4 } from "uuid";
import CandiedImg from "../Images/CandiedCitrus_RECIPE_080420_37712.jpg";
import CheaterImg2 from "../Images/cheaterRecipe.jpg";
import FortunateImg from "../Images/Fortune_Cookie_Magic_Shell_RECIPE_082522_39234.jpg";
import SesameImg from "../Images/TunaNoodleCasserole_RECIPE_090721_2033.jpg";

const recipesData = [
  {
    id: uuidv4(),
    heading: "epicurious",
    title: "Fortune Cookie Magic Shell Sundae",
    img: CandiedImg,
  },
  {
    id: uuidv4(),
    heading: "epicurious",
    title: "Easy Candied Orange Peel",
    img: CheaterImg2,
  },
  {
    id: uuidv4(),
    heading: "epicurious",
    title: "Tuna Noodle Casserole",
    img: FortunateImg,
  },
  {
    id: uuidv4(),
    heading: "Dinner In one",
    title: "Cheater's Instant Pot Chicken and Duplings",
    img: SesameImg,
  },
  {
    id: uuidv4(),
    heading: "The vegan Chines Kitchen",
    title: "Sesame Noodles",
    img: FortunateImg,
  },
];

export default recipesData;
