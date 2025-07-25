import React from 'react';

const About = () => {
  return (
    <div className="min-h-[87svh] flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-8">About This Project</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 text-left">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-blue-600 mb-3">📝 Project Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                This is a simple contact form application built as a learning project to understand 
                frontend and backend integration. The project demonstrates how to create a full-stack 
                web application using modern technologies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-blue-600 mb-3">🛠️ Tech Stack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Frontend:</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• React.js</li>
                    <li>• Tailwind CSS</li>
                    <li>• React Router</li>
                    <li>• Axios for API calls</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Backend:</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Express.js Server</li>
                    <li>• MongoDB Database</li>
                    <li>• Mongoose ODM</li>
                    <li>• CORS for cross-origin requests</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-blue-600 mb-3">🎯 Learning Goals</h2>
              <ul className="text-gray-700 space-y-2">
                <li>• Understanding client-server communication</li>
                <li>• Working with REST APIs</li>
                <li>• Database integration and CRUD operations</li>
                <li>• Form handling and validation</li>
                <li>• State management in React</li>
                <li>• Responsive web design</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-blue-600 mb-3">⚡ Features</h2>
              <ul className="text-gray-700 space-y-2">
                <li>• Add new contacts through the contact form</li>
                <li>• View all saved contacts on the home page</li>
                <li>• Real-time data updates</li>
                <li>• Clean and responsive user interface</li>
                <li>• Form validation and error handling</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800 text-center font-medium">
                🚀 This project serves as a foundation for understanding full-stack development 
                and can be extended with additional features like user authentication, 
                contact editing, and advanced search functionality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;