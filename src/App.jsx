import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/mainLayout";
import { Main } from "./pages/Main";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import ProtectedRoute from "./routers/ProtectedRoute";

function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MainLayout>
                  <Main />
                </MainLayout>
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
