import React from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Form } from "./pages/Form/Form";
import { Logo } from "./pages/Logo/Logo";
import { Login } from "./pages/Login/Login";
import { NotFound } from "./pages/NotFound";
import { Dashboard } from "./pages/Dashboard";
import { FirstPage } from "./pages/FirstPage";
import { ThirdPage } from "./pages/ThirdPage";
import { FifthPage } from "./pages/FifthPage";
import { SixthPage } from "./pages/SixthPage";
import { SecondPage } from "./pages/SecondPage";
import { FourthPage } from "./pages/FourthPage";
import { SeventhPage } from "./pages/SeventhPage";
import { SendData } from "./pages/SendData/SendData";
import { PrivateRoute } from "./Routers/PrivateRoute";
import { OnlyAdminRoute } from "./Routers/OnlyAdminRoute";
import { ChooseLang } from "./pages/ChooseLang/ChooseLang";
import { useReactMediaRecorder } from "react-media-recorder";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
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

  const startProps = {
    statusVideo,
    statusScreen,
    startRecordingVideo,
    startRecordingScreen,
  };

  const finishProps = {
    stopRecordingVideo,
    stopRecordingScreen,
    mediaBlobUrlVideo,
    mediaBlobUrlScreen,
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<ChooseLang />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={<Form />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/1" element={<FirstPage {...startProps} />} />
          <Route path="/2" element={<SecondPage />} />
          <Route path="/3" element={<ThirdPage />} />
          <Route path="/4" element={<FourthPage />} />
          <Route path="/5" element={<FifthPage />} />
          <Route path="/6" element={<SixthPage />} />
          <Route path="/7" element={<SeventhPage />} />
          <Route path="/sendData" element={<SendData {...finishProps} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
