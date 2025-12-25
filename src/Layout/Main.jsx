import { Outlet } from "react-router-dom";
import Sidebar from "../Shared/Sidebar/Sidebar";

const Main = () => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="ml-5 mt-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
