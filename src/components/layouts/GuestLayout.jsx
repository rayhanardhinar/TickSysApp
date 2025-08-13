import { Outlet } from "react-router";
import Navbar from "./Navbar";

function GuestLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default GuestLayout;
