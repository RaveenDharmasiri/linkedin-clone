import React from "react";
import { useEffect } from "react";
import "./App.css";

//firebase
import { auth } from "./firebase";

// Redux
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { login, logout } from "./features/userSlice";

// Components
import Header from "./components/Header/Header";
import Feed from "./components/Home/Feed/Feed";
import LeftSide from "./components/Home/LeftSide/LeftSide";
import Login from "./components/Login/Login";
import RightSide from "./components/Home/RightSide/RightSide";

function App() {
  const user = useSelector(selectUser);
  const dispath = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispath(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl,
          })
        );
      } else {
        dispath(logout);
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <LeftSide />
          <Feed />
          <RightSide />
        </div>
      )}
    </div>
  );
}

export default App;
