// app/job/page.js

"use client";

import React from "react";

const JobPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f7fc",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "40px",
          textAlign: "center",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <h1 style={{ fontSize: "36px", color: "#333", marginBottom: "20px" }}>
          Job Page
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "#666",
            marginBottom: "30px",
            lineHeight: "1.6",
          }}
        >
          We're currently working on bringing you exciting job opportunities. Check back soon for updates!
        </p>
        <p
          style={{
            fontSize: "22px",
            fontWeight: "bold",
            color: "#0070f3",
            marginBottom: "20px",
          }}
        >
          Coming Soon!
        </p>
        <div>
          <a
            href="#"
            style={{
              padding: "12px 25px",
              fontSize: "16px",
              backgroundColor: "#0070f3",
              color: "#fff",
              border: "none",
              borderRadius: "30px",
              textDecoration: "none",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#005bb5";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#0070f3";
            }}
          >
            Stay Updated
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobPage;
