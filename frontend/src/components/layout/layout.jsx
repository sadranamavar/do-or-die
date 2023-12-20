import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Style from "./style";
import Footer from "../footer/footer";
import AddBtn from "../addBtn/addBtn";


const Layout = () => {
  return (
    <div className="bg-1 vh-100 main-dev">
      <Style />
      {/* <Header /> */}
      <Outlet />
      <Footer />
      <AddBtn />
    </div>
  );
};

export default Layout;
