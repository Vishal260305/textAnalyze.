import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#091e39";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.background = "url('https://th.bing.com/th/id/R.ca62350d12edc080dc1d2f9666eb3fcd?rik=228nFtb5RHpApw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f09%2fFree-Download-All-White-Background.jpg&ehk=6eUWGbLbl2R1kBLjJoSV5LxiC5%2fQH9mz%2bqVt93Aq2Ao%3d&risl=&pid=ImgRaw&r=0')";
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <>
      <Main>
        <Navbar title="TextAnalyze" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextAnalyze"
                  mode={mode}
                />
              }
            />

            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Main>
    </>
  );
}

export default App;
