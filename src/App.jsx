import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Home from "./Pages/Home/home";
import LoginPage from "./Pages/Auth/login";
import SignupPage from "./Pages/Auth/signUp";
import ForgotPasswordPage from "./Pages/Auth/forgetPassword";
import ResetPasswordPage from "./Pages/Auth/resetPassword";
import VerifyEmailPage from "./Pages/Auth/confirmEmail";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";




function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="SignUp" element={<SignupPage />} />
            <Route path="forgetPassword" element={<ForgotPasswordPage />} />
            <Route path="resetPassword" element={<ResetPasswordPage />} />
            <Route path="confirmEmail" element={<VerifyEmailPage />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
