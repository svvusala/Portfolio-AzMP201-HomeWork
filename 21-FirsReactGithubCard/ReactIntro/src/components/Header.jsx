import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import "./style.css";

const Header = () => {
  return (
    <div className="layout">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default Header;
