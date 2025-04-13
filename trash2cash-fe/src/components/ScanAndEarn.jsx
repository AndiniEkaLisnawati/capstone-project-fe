import React from "react";
import trashImage from "../assets/images/trash-image.jpg";
import chartIcon from "../assets/images/chart-icon.svg";
import lightningIcon from "../assets/images/lightning-icon.svg";

function ScanAndEarn() {
  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        backgroundColor: "#FFF",
        overflow: "hidden",
        fontFamily: "'SF Pro Display', sans-serif",
        paddingBottom: "50px",
        
      }}
    >
      {/* SEGITIGA HIJAU */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1061"
        height="797"
        viewBox="0 0 1061 797"
        fill="none"
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      >
        <path
          d="M0 797L380.621 0H725.485L1060.02 797H0Z"
          fill="url(#paint0_linear_151_6)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_151_6"
            x1="530.509"
            y1="0"
            x2="530.509"
            y2="797"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00C81E" stopOpacity="0.4" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* TITLE */}
      <h2
        style={{
          position: "relative",
          textAlign: "center",
          fontSize: "clamp(40px, 8vw, 120px)",
          fontWeight: 800,
          color: "#3F322C",
          zIndex: 2,
          marginTop: "80px",
          marginBottom: "60px",
        }}
      >
        SCAN AND EARN
      </h2>

      {/* ICON & TEXT SECTION */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 10%",
          flexWrap: "wrap",
          rowGap: "40px",
          zIndex: 2,
          position: "relative",
        }}
      >
        {/* LEFT */}
        <div style={{ textAlign: "center", flex: "1", minWidth: "200px" }}>
          <p style={{ color: "#3F322C", fontSize: "clamp(20px, 2vw, 30px)", margin: 0 }}>
            lorem ipsum:
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <img
              src={chartIcon}
              alt="Chart Icon"
              style={{ width: "clamp(24px, 2vw, 40px)", height: "auto" }}
            />
            <span style={{ fontWeight: 700, fontSize: "clamp(24px, 2vw, 36px)" }}>76%</span>
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ textAlign: "center", flex: "1", minWidth: "200px" }}>
          <p style={{ color: "#3F322C", fontSize: "clamp(20px, 2vw, 30px)", margin: 0 }}>
            lorem ipsum:
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            <img
              src={lightningIcon}
              alt="Lightning Icon"
              style={{ width: "clamp(24px, 2vw, 40px)", height: "auto" }}
            />
            <span style={{ fontWeight: 700, fontSize: "clamp(24px, 2vw, 36px)" }}>76%</span>
          </div>
        </div>
      </div>

      {/* TRASH IMAGE */}
      <img
        src={trashImage}
        alt="Trash Background"
        style={{
          position: "absolute",
          bottom: "4",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          height: "auto",
          zIndex: 0,

        }}
      />
    </section>
  );
}

export default ScanAndEarn;
