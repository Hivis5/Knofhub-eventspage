import React from "react";
import octopusLogo from "./Octopus.svg";
const Home = () => {
  return (
    <div className="Home">
      <div className="Home_contents">
        <h3>Events</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim
          diam quis enim lobortis scelerisque fermentum dui faucibus in ornare
          quam viverra
        </p>
      </div>
      <div className="Home_image">
        <img src={octopusLogo} alt="Octopus" />
      </div>
    </div>
  );
};

export default Home;
