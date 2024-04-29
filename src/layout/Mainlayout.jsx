// react-router-dom
import { Outlet } from "react-router-dom";

// components
import Navbar from "../components/Navbar";

function Mainlayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Mainlayout;
