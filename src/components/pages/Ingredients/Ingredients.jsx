
import React from 'react';
import IngredientsTop from './IngredientsTop';
import CardBottom from './CardBottom';
import IngredientsBigGuide from './IngredientsBigGuide';

const ingredients = () => {
  // const [singalDetails, SetSingalDetails] = useState([]);
  // console.log(details);
  fetch("Ingridiants.json")
    .then((response) => response.json())
    //.then((data) => SetSingalDetails(data))
    .catch(() => {
      ///Exception occured do something
    });

  return (
    <>
        <IngredientsTop></IngredientsTop>
        <IngredientsBigGuide></IngredientsBigGuide>
        <CardBottom></CardBottom>
    </>
  );
};

export default ingredients;
