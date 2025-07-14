import female1 from "../assets/female1.webp";
import male1 from "../assets/male1.jpg";
import male2 from "../assets/male2.png";
import { motion } from "framer-motion";

function Testimonials() {
  const quotes = [
    {
      name: "Jane Smith",
      title: "CTO at TechCorp",
      image: female1,
      quote:
        "SaaSy has completely transformed the way our team works. We’ve doubled our output with half the stress.",
      rating: 5,
    },
    {
      name: "Michael Lee",
      title: "Founder at DevFlow",
      image: male1,
      quote:
        "The simplicity and power of SaaSy is unmatched. It just works, and our clients love the results.",
      rating: 4,
    },
    {
      name: "Stephen Johnson",
      title: "Project Manager at Scale.io",
      image: male2,
      quote:
        "It’s like having a whole new team. We’re saving hours each week thanks to SaaSy.",
      rating: 5,
    },
  ];

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          What Our Users Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {quotes.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition text-left"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>

              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>

              <div className="flex">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.18 3.63a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.085 2.24a1 1 0 00-.364 1.118l1.18 3.63c.3.921-.755 1.688-1.54 1.118l-3.084-2.24a1 1 0 00-1.175 0l-3.085 2.24c-.784.57-1.838-.197-1.539-1.118l1.18-3.63a1 1 0 00-.364-1.118L2.98 9.057c-.783-.57-.38-1.81.588-1.81h3.812a1 1 0 00.951-.69l1.18-3.63z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Testimonials;
