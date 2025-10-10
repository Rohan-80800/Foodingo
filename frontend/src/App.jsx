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
import CartPage from "./pages/CartPage.jsx";
import CheckOut from "./pages/CheckOut.jsx";
import OrderPlaced from "./pages/OrderPlaced.jsx";
import MyOrders from "./pages/MyOrders.jsx";
import useGetMyOrders from "./hooks/useGetMyOrders.jsx";
import useUpdateLocation from "./hooks/useUpdateLocation.jsx";
import TrackOrderPage from "./pages/TrackOrderPage.jsx";

export const serverUrl = "http://localhost:8000";

function App() {
  useGetCurrentuser();
  useUpdateLocation();
  useGetCity();
  useGetMyshop();
  useGetShopByCity();
  useGetItemsByCity();
  useGetMyOrders();
  
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
        />{" "}
        <Route
          path="/cart"
          element={userData ? <CartPage /> : <Navigate to={"/signin"} />}
        />
        <Route
          path="/checkout"
          element={userData ? <CheckOut /> : <Navigate to={"/signin"} />}
        />
        <Route
          path="/order-placed"
          element={userData ? <OrderPlaced /> : <Navigate to={"/signin"} />}
        />{" "}
        <Route
          path="/my-orders"
          element={userData ? <MyOrders /> : <Navigate to={"/signin"} />}
        />
        <Route
          path="/track-order/:orderId"
          element={userData ? <TrackOrderPage /> : <Navigate to={"/signin"} />}
        />
      </Routes>
    </>
  );
}

export default App;
