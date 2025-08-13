import { Outlet } from "react-router";

function DashboardLayout() {
  return (
    <>
      <div className="text-3xl text-red-500">DashboardLayout</div>
      <Outlet />
    </>
  );
}

export default DashboardLayout;
