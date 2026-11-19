import Marquee from "react-fast-marquee";

const BrekingNews = () => {
  const newsData = [
    {
      id: 1,
      title: "Bangladesh Wins International Cricket Match",
    },
    {
      id: 2,
      title: "New Technology Trends in 2026",
    },
    {
      id: 3,
      title: "Global Climate Change Conference Begins",
    },
  ];
  return (
    <div className="flex justify-between items-center gap-4 bg-gray-200 px-4 py-2 container mx-auto">
      <button className="btn bg-red-500 text-white">Letest</button>
      <Marquee pauseOnHover="true" gradient="boolean" speed={100}>
        {newsData.map((n) => (
          <div key={n.id}>{n.title}</div>
        ))}
      </Marquee>
    </div>
  );
};

export default BrekingNews;
