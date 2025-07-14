function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$0",
      features: {
        "Unlimited Projects": true,
        "Team Collaboration": false,
        "Analytics Dashboard": false,
        "Priority Support": false,
      },
    },
    {
      name: "Pro",
      price: "$29/mo",
      features: {
        "Unlimited Projects": true,
        "Team Collaboration": true,
        "Analytics Dashboard": true,
        "Priority Support": false,
      },
    },
    {
      name: "Enterprise",
      price: "$99/mo",
      features: {
        "Unlimited Projects": true,
        "Team Collaboration": true,
        "Analytics Dashboard": true,
        "Priority Support": true,
      },
    },
  ];

  const features = Object.keys(plans[0].features);

  return (
    <section id="pricing" className="py-20 px-6 bg-white" data-aos="fade-up">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">
          Compare Plans
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 text-left">
            <thead>
              <tr>
                <th className="p-4 border-b"></th>
                {plans.map((plan, i) => (
                  <th
                    key={i}
                    className="p-4 border-b text-center text-blue-600 text-lg font-semibold"
                  >
                    {plan.name}
                    <br />
                    <span className="text-sm text-gray-500">{plan.price}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, i) => (
                <tr key={i} className="border-t">
                  <td className="p-4 font-medium text-gray-700">{feature}</td>
                  {plans.map((plan, j) => (
                    <td key={j} className="p-4 text-center">
                      {plan.features[feature] ? (
                        <span className="text-green-500 font-bold">✓</span>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
