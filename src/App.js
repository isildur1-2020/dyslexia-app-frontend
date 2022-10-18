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
import { UserRoute } from "./Routers/UserRoute";
import { ChooseTime } from "./pages/ChooseTime";
import { AdminRoute } from "./Routers/AdminRoute";
import { SeventhPage } from "./pages/SeventhPage";
import { SendData } from "./pages/SendData/SendData";
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
          <Route
            path="/dashboard"
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          />
          <Route
            path="/form"
            element={
              <UserRoute>
                <Form />
              </UserRoute>
            }
          />
          <Route
            path="/logo"
            element={
              <UserRoute>
                <Logo />
              </UserRoute>
            }
          />
          <Route
            path="/time"
            element={
              <UserRoute>
                <ChooseTime />
              </UserRoute>
            }
          />
          <Route
            path="/1"
            element={
              <UserRoute>
                <FirstPage {...startProps} />
              </UserRoute>
            }
          />
          <Route
            path="/2"
            element={
              <UserRoute>
                <SecondPage />
              </UserRoute>
            }
          />
          <Route
            path="/3"
            element={
              <UserRoute>
                <ThirdPage />
              </UserRoute>
            }
          />
          <Route
            path="/4"
            element={
              <UserRoute>
                <FourthPage />
              </UserRoute>
            }
          />
          <Route
            path="/5"
            element={
              <UserRoute>
                <FifthPage />
              </UserRoute>
            }
          />
          <Route
            path="/6"
            element={
              <UserRoute>
                <SixthPage />
              </UserRoute>
            }
          />
          <Route
            path="/7"
            element={
              <UserRoute>
                <SeventhPage />
              </UserRoute>
            }
          />
          <Route
            path="/sendData"
            element={
              <UserRoute>
                <SendData {...finishProps} />
              </UserRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
