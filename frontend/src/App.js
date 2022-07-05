import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainContext } from "./contexts/MainContext";
import { Login } from "./pages/Login/Login";
import { ChooseLang } from "./pages/ChooseLang/ChooseLang";
import { Logo } from "./pages/Logo/Logo";
import { Form } from "./pages/Form/Form";
import { FirstPage } from "./pages/FirstPage";
import { SecondPage } from "./pages/SecondPage";
import { ThirdPage } from "./pages/ThirdPage";
import { FourthPage } from "./pages/FourthPage";
import { FifthPage } from "./pages/FifthPage";
import { SixthPage } from "./pages/SixthPage";
import { SeventhPage } from "./pages/SeventhPage";
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
          <Route path="/1" element={<FirstPage />} />
          <Route path="/2" element={<SecondPage />} />
          <Route path="/3" element={<ThirdPage />} />
          <Route path="/4" element={<FourthPage />} />
          <Route path="/5" element={<FifthPage />} />
          <Route path="/6" element={<SixthPage />} />
          <Route path="/7" element={<SeventhPage />} />
          <Route path="*" element={<h1>Not found - 404</h1>} />
        </Routes>
      </BrowserRouter>
    </MainContext.Provider>
  );
};

export default App;
