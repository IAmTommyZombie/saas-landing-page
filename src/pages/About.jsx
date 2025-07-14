import { motion } from "framer-motion";
import female2 from "../assets/female2.png";
import female3 from "../assets/female3.png";
import male3 from "../assets/male3.jpg";
import teamData from "../data/teamData";
import { Link } from "react-router-dom";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-gray-50 px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">About SaaSy</h1>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            SaaSy is a productivity platform built for modern teams who want to
            move faster, communicate better, and focus on what matters. We build
            simple, powerful tools that scale with you — not against you.
          </p>
        </div>

        {/* Mission & Values */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              🎯 Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To empower small teams and growing businesses with tools that
              streamline operations and boost collaboration — without the
              complexity or price tag of enterprise software.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              💡 Our Values
            </h2>
            <ul className="text-gray-600 list-disc list-inside space-y-1">
              <li>Simplicity over complexity</li>
              <li>Transparency with users</li>
              <li>Respect for privacy</li>
              <li>Continuous improvement</li>
            </ul>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Meet the Team
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {teamData.map((person, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-md p-4 w-60 text-center"
              >
                <Link to={`/team/${person.id}`} className="block">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-gray-800">{person.name}</h3>
                  <p className="text-sm text-gray-500">{person.role}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            📅 Our Journey
          </h2>
          <ul className="border-l-2 border-blue-500 pl-6 space-y-8">
            <li>
              <span className="text-blue-600 font-semibold">2022</span> – SaaSy
              was founded with a mission to simplify collaboration.
            </li>
            <li>
              <span className="text-blue-600 font-semibold">2023</span> –
              Reached 1,000+ users and launched mobile support.
            </li>
            <li>
              <span className="text-blue-600 font-semibold">2024</span> –
              Integrated AI-powered workflows and expanded globally.
            </li>
          </ul>
        </div>

        {/* Tech Stack Section */}
        <div className="mb-20 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            🛠️ Built With
          </h2>
          <p className="text-gray-600 mb-4">
            We leverage modern, battle-tested technologies:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-700 font-medium">
            <span className="bg-blue-100 px-4 py-2 rounded">React</span>
            <span className="bg-blue-100 px-4 py-2 rounded">Vite</span>
            <span className="bg-blue-100 px-4 py-2 rounded">Tailwind CSS</span>
            <span className="bg-blue-100 px-4 py-2 rounded">Framer Motion</span>
            <span className="bg-blue-100 px-4 py-2 rounded">TypeScript</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-bold text-gray-700 mb-2">
            Want to join our journey?
          </h3>
          <p className="text-gray-500 mb-4">
            We're hiring! Or try SaaSy for yourself and see why teams love it.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            Try SaaSy Free
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
