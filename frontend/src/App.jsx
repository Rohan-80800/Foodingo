import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import useGetCurrentuser from "./hooks/useGetCurrentuser.jsx";

export const serverUrl = "http://localhost:8000";

function App() {
  useGetCurrentuser();
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUp />} />{" "}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
