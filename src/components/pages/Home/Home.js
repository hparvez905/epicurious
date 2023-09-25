import React from "react";
import CookThisNow from "../../sharedPage/CookThisNow";
import TheBigGuideTop from "./HomeBigGuide";
import Banner from "./Banner";
import BookRelease from "./BookRelease";
import HomeCard from "./HomeCard";
import NewestRecipes from "./NewestRecipes";
import Newsletter from "./Newsletter";
import Products from "./Products";
import HomeBigGuide from "./HomeBigGuide";

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <BookRelease></BookRelease>
         <Products></Products>
         <HomeBigGuide></HomeBigGuide>
         <HomeCard></HomeCard>
         <NewestRecipes></NewestRecipes>
         <Newsletter></Newsletter>
         <CookThisNow></CookThisNow>
      </div>
   );
};

export default Home;
