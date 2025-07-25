import axios from "axios";
import React, { useState } from "react";

const Contact = ({ setRender }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    location: "sim",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    (async () => {
      await axios
        .post("http://localhost:5000/api/contact", formData)
        .then(() => {
          alert("Form submitted successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            phone: "",
            location: "sim",
          });
          setRender((prev) => !prev);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error submitting form:", error);
          alert("Failed to submit form. Please try again.");
        });
    })();

    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Enter First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your first name"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your last name"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Location *
            </label>
            <select
              name="location"
              onChange={handleChange}
              id="location"
              value={formData.location}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {["sim", "email", "mobile"].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
          >
            {loading ? "submitting..." : "Submit Form"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
