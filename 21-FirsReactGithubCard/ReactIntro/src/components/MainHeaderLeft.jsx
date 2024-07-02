import "./style.css";
import logo from "./github.jpg";

const MainHeaderLeft = () => {
  return (
    <div className="leftandright">
      
      <div className="imgBox">
        <img src={logo} alt="" className="gitImg" />
      </div>

      <div className="lefttxt">
        <p>The Octocat</p>
        <p className="blueoctocat">@octocat</p>
        <p>This profile has no bio</p>
      </div>

      <div className="righttxt">
          <p>Joined 25 Jan 2011</p>
      </div>

    </div>
  );
};

export default MainHeaderLeft;
