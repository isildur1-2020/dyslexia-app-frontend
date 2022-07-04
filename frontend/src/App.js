import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainContext } from "./contexts/MainContext";
import { Login } from "./pages/Login/Login";
import { ChooseLang } from "./pages/ChooseLang/ChooseLang";
import { Logo } from "./pages/Logo/Logo";
import { Form } from "./pages/Form/Form";
import { FirstPage } from "./pages/FirstPage/FirstPage";
import { SecondPage } from "./pages/SecondPage/SecondPage";
import { ThirdPage } from "./pages/ThirdPage/ThirdPage";
import { FourthPage } from "./pages/FourthPage/FourthPage";
import { FifthPage } from "./pages/FifthPage/FifthPage";
import { SixthPage } from "./pages/SixthPage/SixthPage";
import { SevenPage } from "./pages/SevenPage/SevenPage";
import { languajes } from "./languajes/languajes";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "animate.css";

const App = () => {
  const [state, setState] = useState({
    // MAIN STATE
    languaje: 0,
    navigate: () => {},
    // LOGIN
    username: "",
    password: "",
    showPassword: false,
    //FORM
    name: "",
    age: "",
    dateOfBirth: "",
    nationality: "",
    bloodType: "",
    gender: null,
    // CURRENT LANGUAJE
    currentLanguaje: languajes["english"],
  });

  return (
    <MainContext.Provider value={{ state, setState }}>
      <BrowserRouter>
        <Routes>
          <Route index element={<ChooseLang />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/form" element={<Form />} />
          <Route path="/firstPage" element={<FirstPage />} />
          <Route path="/secondPage" element={<SecondPage />} />
          <Route path="/thirdPage" element={<ThirdPage />} />
          <Route path="/fourthPage" element={<FourthPage />} />
          <Route path="/fifthPage" element={<FifthPage />} />
          <Route path="/sixthPage" element={<SixthPage />} />
          <Route path="/sevenPage" element={<SevenPage />} />
          <Route path="*" element={<ChooseLang />} />
        </Routes>
      </BrowserRouter>
    </MainContext.Provider>
  );
};

export default App;
