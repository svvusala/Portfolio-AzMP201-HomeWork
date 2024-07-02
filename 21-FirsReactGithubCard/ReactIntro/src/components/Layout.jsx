import Header from "./Header";
import Main from "./Main";
import MainBottom from "./MainBottom";
import Navbar from "./Navbar";
import "./style.css";

const Layout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Main />
    </div>
  );
};

export default Layout;
