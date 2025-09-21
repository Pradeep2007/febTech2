import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-light-gray">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="w-32 h-32 mx-auto mb-6 bg-teal-prime rounded-full flex items-center justify-center shadow-2xl">
            <div className="text-4xl font-bold text-white">FT</div>
          </div>
          
          <h1 className="text-5xl font-bold text-teal-prime mb-4">
            FabTech
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Medical Equipment & Pharmaceuticals
          </p>
          
          <div className="space-y-4">
            <button className="btn-primary">
              Get Started
            </button>
            <button className="btn-secondary ml-4">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
