import { Button } from "@material-ui/core";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth, provider } from "./Firebase";
import "./Login.css";
export default function Login() {
    const dispatch = useDispatch()

  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL
      }))
    }).catch(err => alert(err));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.jing.fm/clipimg/full/136-1361267_gmail-calendar-docs-sheets-slide-drawing-maps-gmail.png"
          alt=""
        />
        <Button onClick={signIn} variant="contained" color="primary">
          Login
        </Button>
      </div>
    </div>
  );
}
