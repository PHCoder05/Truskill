// app/kys/page.js
"use client";
import React from 'react';

const Kys = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>Know Your Skills (KYS)</h1>
      <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666' }}>
        Welcome to the KYS page! This is where you can evaluate your skills and explore 
        opportunities to grow. Stay curious and keep learning!
      </p>
      <div style={{ marginTop: '30px' }}>
        <button
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={() => alert('Explore your skills!')}
        >
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default Kys;
