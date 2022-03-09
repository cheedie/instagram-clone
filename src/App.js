import React, { useEffect, createContext, useReducer, useContext } from "react";
import { reducer, initialState } from "./reducers/userReducer";
import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import SplashScreen from "./pages/SplashScreen";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
export const UserContext = createContext();

const Routing = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setTimeout(() => {
      if (user) {
        dispatch({ type: "USER", payload: user });
      } else {
        navigate("/signup");
      }
    }, 3000);
  }, []);
  return (
    <Routes>
      <Route path="/" exact={true} element={<SplashScreen />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
    </Routes>
  );
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
