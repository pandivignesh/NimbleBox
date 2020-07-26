import React from "react";

//Import Loader Image
import LoaderImage from "../../assets/img/loader.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={LoaderImage} alt="loader" />
    </div>
  );
};

export default Loader;
