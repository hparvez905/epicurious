import React, { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home/Home";
import Signin from "./components/pages/Register/Signin";
import SignUp from "./components/pages/SignUp/SignUp";
import Video from "./components/pages/Video/Video";
import Footer from "./components/sharedPage/Footer";
import Navbar from "./components/sharedPage/Navbar";
import NotFound from "./components/sharedPage/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Ingredients from "./components/pages/Ingredients/Ingredients";
import RecipesMenus from "./components/pages/RecipesMenus/RecipesMenus";

import ExpertAdvices from "./components/pages/Expert-advices/ExpertAdvices";
import IngrediantsDetails from "./components/pages/Ingredients/IngrediantsDetails";
import HolidayEvent from "./components/pages/Home/HolidayEvent";

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();

    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <div className="App">
      <Wrapper>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/recipes-menus"
            element={<RecipesMenus></RecipesMenus>}
          ></Route>
           <Route
            path="/holidays-events"
            element={<HolidayEvent/>}
          ></Route>
          <Route path="/videos" element={<Video></Video>}></Route>
          <Route path="/signin" element={<Signin></Signin>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route
            path="/expert-advice"
            element={<ExpertAdvices></ExpertAdvices>}
          ></Route>
          <Route
            path="/ingredients"
            element={<Ingredients></Ingredients>}
          ></Route>
          <Route
            path="/ingredients/details/:id"
            element={<IngrediantsDetails></IngrediantsDetails>}
          ></Route>
          <Route
            path="/expert-advice/details/:id"
            element={<IngrediantsDetails></IngrediantsDetails>}
          ></Route>
          <Route
            path="details/:id"
            element={<IngrediantsDetails></IngrediantsDetails>}
          ></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <ToastContainer></ToastContainer>
        <Footer></Footer>
      </Wrapper>
    </div>
  );
}

export default App;
