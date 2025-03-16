import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="hero-section flex items-center justify-center text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-4">
            The nation that destroys its soils destroys itself.
          </h1>
          <p className="text-white mb-8">- Hugh Hammond Bennett (Soil conservationist)</p>
          <div className="space-x-4">
            <Link to="/services" className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700">
              Get Started
            </Link>
            <Link to="/contact" className="bg-white text-purple-600 px-6 py-3 rounded-md hover:bg-gray-100">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <blockquote className="text-2xl italic">
            "If agriculture goes wrong, nothing else will have a chance to go right."
          </blockquote>
          <p className="mt-4">— M. S. Swaminathan.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;