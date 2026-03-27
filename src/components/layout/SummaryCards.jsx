function SummaryCards({ resources }) {
  const total = resources.length;
  const active = resources.filter((r) => r.status === "ACTIVE").length;
  const maintenance = resources.filter((r) => r.status === "MAINTENANCE").length;
  const outOfService = resources.filter((r) => r.status === "OUT_OF_SERVICE").length;

  const cards = [
    { title: "Total Resources", value: total, color: "text-blue-600" },
    { title: "Active", value: active, color: "text-green-600" },
    { title: "Maintenance", value: maintenance, color: "text-yellow-600" },
    { title: "Out of Service", value: outOfService, color: "text-red-600" },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5"
        >
          <p className="text-sm text-gray-500 mb-2">{card.title}</p>
          <h3 className={`text-3xl font-bold ${card.color}`}>{card.value}</h3>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;