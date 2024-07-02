import MainBottom from "./MainBottom";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import "./style.css";

const Main = () => {
  return (
    <div className="mainSection">
      <MainHeader />
      <MainBottom />
      <MainFooter />
    </div>
  );
};

export default Main;
