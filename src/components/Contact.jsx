import React from 'react';

function Contact() {
  return (
    <div className="bg-white">
      <div className="py-16 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Sign Up & Get A Quote</h2>
        <p>Let us know if there is anything we can do for you</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Contact Form</h2>
        <p className="text-gray-600 mb-8">
          Please fill out the form provided below and we will respond to your inquiry shortly. Thank you!
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name*
              </label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name*
              </label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email*
            </label>
            <input
              type="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message*
            </label>
            <textarea
              required
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;