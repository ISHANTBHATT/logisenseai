import React from "react";
import SwingingElement from "./SwingingElement";

const objectImage = "/images/container.png";

const SwingingObject = ({
  imageSrc = objectImage,
  altText = "Shipping Container",
  width = 400,
  height = 300,
}) => {
  return (
    <div className="swinging-object-container relative z-0">
      {/* <div className="cable h-[60px] w-[2px] bg-gray-500 absolute left-1/2 -translate-x-1/2"></div> */}
      <SwingingElement maxRotation={8} sensitivity={0.01} damping={0.05}>
        <div className="object-wrapper relative inline-block">
          <img
            src={imageSrc}
            alt={altText}
            className=" object-cover"
            style={{ width: `${width}px`, height: `${height}px` }}
          />
          {/* <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent pointer-events-none"></div> */}
        </div>
      </SwingingElement>
    </div>
  );
};

export default SwingingObject;
