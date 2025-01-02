// app/resource/page.js

"use client";

import React from "react";

const ResourcePage = () => {
  const resources = [
    { id: 1, name: "React Documentation", link: "https://reactjs.org/docs/getting-started.html" },
    { id: 2, name: "Next.js Documentation", link: "https://nextjs.org/docs" },
    { id: 3, name: "JavaScript Info", link: "https://javascript.info/" },
    { id: 4, name: "MDN Web Docs", link: "https://developer.mozilla.org/" },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>Resources</h1>
      <p style={{ textAlign: "center", fontSize: "16px", color: "#666", marginBottom: "30px" }}>
        Explore these valuable resources to enhance your learning and development.
      </p>
      <ul style={{ listStyleType: "none", padding: 0, maxWidth: "600px", margin: "0 auto" }}>
        {resources.map((resource) => (
          <li
            key={resource.id}
            style={{
              marginBottom: "15px",
              padding: "15px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "#0070f3",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              {resource.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourcePage;
