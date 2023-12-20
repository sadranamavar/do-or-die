import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Style from "./style";

const Layout = () => {
  return (
    <div className="bg-1 vh-100 main-dev">
      <Style />
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
