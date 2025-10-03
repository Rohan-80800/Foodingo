import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import useGetCurrentuser from "./hooks/useGetCurrentuser.jsx";
import { useSelector } from "react-redux";
import Home from "./pages/Home.jsx";
import useGetCity from "./hooks/useGetCity.jsx";
import useGetMyshop from "./hooks/useGetMyShop.jsx";
import CreateEditShop from "./pages/CreateEditShop.jsx";
import AddItem from "./pages/AddItem.jsx";
import EditItem from "./pages/EditItem.jsx";
import useGetShopByCity from "./hooks/useGetShopByCity.jsx";
import useGetItemsByCity from "./hooks/useGetItemsByCity.jsx";

export const serverUrl = "http://localhost:8000";

function App() {
  useGetCurrentuser();
  useGetCity();
  useGetMyshop();
  useGetShopByCity();
  useGetItemsByCity();
  
  const { userData } = useSelector((state) => state.user);
  return (
    <>
      <Routes>
        <Route
          path="/signup"
          element={!userData ? <SignUp /> : <Navigate to={"/"} />}
        />
        <Route
          path="/signin"
          element={!userData ? <SignIn /> : <Navigate to={"/"} />}
        />
        <Route
          path="/forgot-password"
          element={!userData ? <ForgotPassword /> : <Navigate to={"/"} />}
        />
        <Route
          path="/"
          element={userData ? <Home /> : <Navigate to={"/signin"} />}
        />
        <Route
          path="/create-edit-shop"
          element={userData ? <CreateEditShop /> : <Navigate to={"/signin"} />}
        />
        <Route
          path="/add-item"
          element={userData ? <AddItem /> : <Navigate to={"/signin"} />}
        />{" "}
        <Route
          path="/edit-item/:itemId"
          element={userData ? <EditItem /> : <Navigate to={"/signin"} />}
        />
      </Routes>
    </>
  );
}

export default App;
