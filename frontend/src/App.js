import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainContext } from "./contexts/MainContext";
import { ClocksContext } from "./contexts/ClocksContext";
import { useReactMediaRecorder } from "react-media-recorder";
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
import { SendData } from "./pages/SendData/SendData";
import { PrivateRoute } from "./Routers/PrivateRoute";
import { OnlyAdminRoute } from "./Routers/OnlyAdminRoute";
import { appState } from "./states/appState";
import { clocksState } from "./states/clocksState";

const App = () => {
  const [state, setState] = useState(appState);
  const [clocks, setClocks] = useState(clocksState(240));
  const {
    status: statusVideo,
    startRecording: startRecordingVideo,
    stopRecording: stopRecordingVideo,
    mediaBlobUrl: mediaBlobUrlVideo,
  } = useReactMediaRecorder({ video: true });
  const {
    status: statusScreen,
    startRecording: startRecordingScreen,
    stopRecording: stopRecordingScreen,
    mediaBlobUrl: mediaBlobUrlScreen,
  } = useReactMediaRecorder({ screen: true });

  useEffect(() => {
    const { secondsPerQuestion } = state;
    setClocks(clocksState(secondsPerQuestion));
  }, [state.secondsPerQuestion]);

  return (
    <MainContext.Provider value={{ state, setState }}>
      <ClocksContext.Provider value={{ clocks, setClocks }}>
        <BrowserRouter>
          <Routes>
            <Route index element={<ChooseLang />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/form"
              element={
                <OnlyAdminRoute>
                  <Form />
                </OnlyAdminRoute>
              }
            />
            <Route
              path="/logo"
              element={
                <OnlyAdminRoute>
                  <Logo />
                </OnlyAdminRoute>
              }
            />
            <Route
              path="/1"
              element={
                <PrivateRoute>
                  <FirstPage
                    statusVideo={statusVideo}
                    statusScreen={statusScreen}
                    startRecordingVideo={startRecordingVideo}
                    startRecordingScreen={startRecordingScreen}
                  />
                </PrivateRoute>
              }
            />
            <Route
              path="/2"
              element={
                <PrivateRoute>
                  <SecondPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/3"
              element={
                <PrivateRoute>
                  <ThirdPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/4"
              element={
                <PrivateRoute>
                  <FourthPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/5"
              element={
                <PrivateRoute>
                  <FifthPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/6"
              element={
                <PrivateRoute>
                  <SixthPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/7"
              element={
                <PrivateRoute>
                  <SeventhPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/sendData"
              element={
                <PrivateRoute>
                  <SendData
                    stopRecordingVideo={stopRecordingVideo}
                    stopRecordingScreen={stopRecordingScreen}
                    mediaBlobUrlVideo={mediaBlobUrlVideo}
                    mediaBlobUrlScreen={mediaBlobUrlScreen}
                  />
                </PrivateRoute>
              }
            />
            {/* <Route path="*" element={<h1>Not found - 404</h1>} /> */}
          </Routes>
        </BrowserRouter>
      </ClocksContext.Provider>
    </MainContext.Provider>
  );
};

export default App;
