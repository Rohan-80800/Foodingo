import axios from "axios";
import React, { useEffect } from "react";
import { setCity } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

function useGetCity() {
  const dispatch = useDispatch();
  const apikey = import.meta.env.VITE_GEOAPIKEY;
  const { userData } = useSelector((state) => state.user);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const result = await axios.get(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${apikey}`
      );
      dispatch(setCity(result.data.results[0].city));
    });
  }, [userData]);
}

export default useGetCity;
