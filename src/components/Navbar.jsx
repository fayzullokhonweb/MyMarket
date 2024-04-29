import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { IoSunnyOutline, IoMoonSharp } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

import { GlobalContext } from "../context/useGlobal";

function Navbar() {
  const { dispatch, user } = useContext(GlobalContext);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "winter"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dracula");
    } else setTheme("winter");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const locaTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", locaTheme);
  }, [theme]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOG_OUT" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" bg-base-300 py-4 mb-10">
      <div className="navbar align-content">
        <div className="navbar-start">
          <Link
            to="/"
            className="btn  btn-primary link no-underline hidden md:flex "
          >
            MyMarket
          </Link>

          <div className="dropdown md:hidden">
            <div tabIndex={0} role="button" className="btn  btn-primary m-1">
              MyMarket
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden md:flex">
          <NavLinks />
        </div>
        <div className="navbar-end flex gap-5 items-center">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={theme === "winter" ? false : true}
            />

            {/* sun icon */}
            <IoSunnyOutline className="swap-on fill-current w-8 h-8" />

            {/* moon icon */}
            <IoMoonSharp className="swap-off fill-current w-8 h-8" />
          </label>
          {user && <p>{user.displayName}</p>}

          <div className="avatar">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user.photoURL} />
            </div>
          </div>

          <button onClick={handleLogout} className="btn btn-primary">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
