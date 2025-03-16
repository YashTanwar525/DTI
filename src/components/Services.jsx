import React from 'react';

function Services() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-purple-600 mb-8">Our Services</h2>
        <p className="text-gray-700 mb-12 max-w-3xl">
          This service empowers farmers to share their fresh, high-quality produce directly with buyers, ensuring better
          prices and reducing food waste. It also provides tools for farmers and garden owners to check and improve
          their soil health, offering essential insights into soil conditions like pH, nutrients, and moisture. By using this
          service, farmers can optimize crop yields, adopt sustainable practices, and contribute to a more local and
          efficient food system.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
              alt="Harvest masters"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Harvest masters</h3>
              <p className="text-gray-600 mb-6">
                Register your farm today to boost your sales, reach more customers, and grow your
                business like never before!
              </p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700">
                Sell
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
              alt="Soil Analysis"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-4">Want to know about your soil</h3>
              <p className="text-gray-600 mb-6">
                Know your soil health and get AI-based recommendations for crop sowing, tailored to
                future market demand for better sales and profitability
              </p>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700">
                click here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;