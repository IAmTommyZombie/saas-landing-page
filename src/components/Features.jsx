function Features() {
  const features = [
    {
      title: "Smart Automation",
      desc: "Automate repetitive tasks and save hours of work.",
    },
    {
      title: "Team Collaboration",
      desc: "Work with your team in real-time across devices.",
    },
    {
      title: "Insights & Analytics",
      desc: "Gain powerful insights with clean visual dashboards.",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-gray-100 px-6"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {f.title}
              </h3>
              <p className="text-gray-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
