import React from "react";
import Particle from "../Particle";

const FILE_ID = "12zRrVAA-sd4VB-DPd8mfPd-19JTWs7bX";
const drivePreview = `https://drive.google.com/file/d/${FILE_ID}/preview`;

function ResumeNew() {
  return (
    <div style={{ minHeight: "100vh", background: "transparent" }}>
      <Particle />

      <div
        style={{
          paddingTop: "64px",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "40px",
        }}
      >
        {/* Decorative glow */}
        <div
          style={{
            position: "fixed",
            top: "30%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "600px",
            height: "400px",
            background:
              "radial-gradient(ellipse, rgba(124,79,212,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "min(860px, 95vw)",
            marginTop: "24px",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow:
              "0 0 0 1px rgba(179,122,249,0.2), 0 24px 60px rgba(0,0,0,0.5), 0 0 80px rgba(124,79,212,0.15)",
          }}
        >
          <iframe
            src={drivePreview}
            width="100%"
            height="1000px"
            style={{ border: "none", display: "block", background: "#fff" }}
            title="Resume PDF"
            allow="autoplay"
          />
        </div>
      </div>
    </div>
  );
}

export default ResumeNew;
