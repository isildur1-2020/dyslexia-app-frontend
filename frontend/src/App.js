import React from "react";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import { NotFound } from "./pages/NotFound";
import { PrivateRoute } from "./Routers/PrivateRoute";
import { OnlyAdminRoute } from "./Routers/OnlyAdminRoute";

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

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<ChooseLang />} />
          <Route path="/login" element={<Login />} />
          <Route path="/form" element={<Form />} />
          <Route path="/logo" element={<Logo />} />
          <Route
            path="/1"
            element={
              <FirstPage
                statusVideo={statusVideo}
                statusScreen={statusScreen}
                startRecordingVideo={startRecordingVideo}
                startRecordingScreen={startRecordingScreen}
              />
            }
          />
          <Route path="/2" element={<SecondPage />} />
          <Route path="/3" element={<ThirdPage />} />
          <Route path="/4" element={<FourthPage />} />
          <Route path="/5" element={<FifthPage />} />
          <Route path="/6" element={<SixthPage />} />
          <Route path="/7" element={<SeventhPage />} />
          <Route
            path="/sendData"
            element={
              <SendData
                stopRecordingVideo={stopRecordingVideo}
                stopRecordingScreen={stopRecordingScreen}
                mediaBlobUrlVideo={mediaBlobUrlVideo}
                mediaBlobUrlScreen={mediaBlobUrlScreen}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
