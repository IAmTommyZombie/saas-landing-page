import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-5xl font-bold mb-4">
          Run your SaaS. Effortlessly.
        </h1>
        <p className="text-xl mb-6 text-blue-100">
          SaaSy helps teams collaborate, ship faster, and grow smarter.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/signup">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-100 transition">
              Get Started
            </button>
          </Link>
          <Link to="/about">
            <button className="border border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600 transition">
              Learn More
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
