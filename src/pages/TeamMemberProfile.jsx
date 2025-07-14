import { useParams, Link } from "react-router-dom";
import teamData from "../data/teamData";
import { motion } from "framer-motion";

function TeamMemberProfile() {
  const { id } = useParams();
  const member = teamData.find((m) => m.id === id);

  if (!member) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Team member not found.
        </h1>
        <Link to="/about" className="text-blue-600 hover:underline mt-4 block">
          Back to About
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-gray-50 px-6 py-20"
    >
      <div className="max-w-3xl mx-auto text-center">
        <img
          src={member.img}
          alt={member.name}
          className="w-32 h-32 mx-auto rounded-full mb-6"
        />
        <h1 className="text-3xl font-bold text-blue-700">{member.name}</h1>
        <p className="text-gray-600 mb-4">{member.role}</p>
        <p className="text-gray-700 mb-6">{member.bio}</p>

        <div className="flex justify-center gap-6 text-blue-600 text-sm">
          <a href={`mailto:${member.email}`} className="hover:underline">
            📧 {member.email}
          </a>
          <a
            href={member.twitter}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            🐦 Twitter
          </a>
          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            💼 LinkedIn
          </a>
        </div>

        <div className="mt-8">
          <Link to="/about" className="text-blue-500 hover:underline text-sm">
            ← Back to Team
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default TeamMemberProfile;
