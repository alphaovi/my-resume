import { Outlet } from "react-router-dom";
import Sidebar from "../Shared/Sidebar/Sidebar";

const Main = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="lg:ml-16.25 font-serif">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
