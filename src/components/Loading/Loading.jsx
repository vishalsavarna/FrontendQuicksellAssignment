import React from "react";
import { RotatingSquare } from "react-loader-spinner";

const Loading = ({
  size = 80,
  color = "#3498db",
  text = "Please Wait",
  showAnimation = true,
  animationSize = 100,
  animationColor = "#3498db",
  textColor = "#2c3e50",
  textStyle = {},
}) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        backgroundColor: "#f4f6f9",
      }}
    >
      {showAnimation && (
        <RotatingSquare
          height={animationSize}
          width={animationSize}
          color={animationColor}
          ariaLabel="rotating-square-loader"
          strokeWidth={2}
          secondaryColor="#ecf0f1"
        />
      )}
      <span
        style={{
          fontSize: "24px",
          color: textColor,
          fontWeight: "600",
          fontFamily: "Arial, sans-serif",
          letterSpacing: "1.5px",
          ...textStyle,
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default Loading;
