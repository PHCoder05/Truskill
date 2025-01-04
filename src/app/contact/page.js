"use client";

import React, { useState } from "react";

const countries = [
  { code: "+91", name: "India" },
  { code: "+1", name: "USA" },
  { code: "+44", name: "UK" },
  { code: "+81", name: "Japan" },
];

const ContactForm = () => {
  const [countryCode, setCountryCode] = useState("+91");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !message) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          message,
          countryCode,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="bg-[#FFFFFF]  px-8 py-12">

    <div className="mt-20 w-full max-w-6xl mx-auto p-6  ">
      <div className="text-center mb-8">
        <h2 className="text-lg font-bold text-black-600">Contact us</h2>
        <h1 className="text-3xl font-semibold mt-2 text-gray-800">
          "Reach Out and Connect with Us"
        </h1>
      </div>

      {status === "success" && (
        <p className="text-green-600 text-center mb-4">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-center mb-4">
          Something went wrong. Please try again.
        </p>
      )}

      <div className="grid md:grid-cols-[2fr,1fr] gap-12">
        <div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 "
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Enter Your First Name"
                  className="w-full p-3 rounded-lg border border-gray-600 text-sm"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Enter Your Last Name"
                  className="w-full p-3 rounded-lg border border-gray-600 text-sm"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your Email Address"
                className="w-full p-3 rounded-lg border border-gray-600 text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex gap-2">
              <div>
                <label
                  htmlFor="countryCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country Code
                </label>
                <select
                  id="countryCode"
                  className="w-32 p-3 rounded-lg border border-gray-100 text-sm"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.code} {country.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="XXX-XX-XXXXX"
                  className="w-full p-3 rounded-lg border border-gray-600 text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Leave us a Message..."
                rows={6}
                className="w-full p-3 rounded-lg border border-gray-600 text-sm resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded hover:bg-gray-800 transition-colors text-sm font-medium"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-6">
          <h3 className="font-bold">Contact</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-sm">📞 +91 9082574346</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">✉️ info@truskill.in</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm">📍 Andheri, Mumbai.</span>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-100">
            <blockquote className="text-gray-600 italic text-sm">
              "Being a student is easy. Learning requires actual work."
            </blockquote>
            <p className="text-gray-500 text-sm mt-2">— William Crawford</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactForm;
