import { GlobalContext } from "../context/useGlobal";
import React from "react";
import { GrGoogle } from "react-icons/gr";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

// context
import { useContext } from "react";

function Signup() {
  const { dispatch } = useContext(GlobalContext);

  const handleSignup = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        dispatch({ type: "LOG_IN", payload: user });
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error.message);
        // ...
      });
  };

  return (
    <div className="hero min-h-screen ">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-8xl font-bold mb-5">Login Now</h1>

          <button
            onClick={handleSignup}
            type="button"
            className="btn btn-secondary "
          >
            <span
              className="flex items-center gap-1
"
            >
              <GrGoogle className="w-5 h-5" />
              <span>Signup</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
