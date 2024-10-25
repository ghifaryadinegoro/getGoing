export default function CityCard(props) {
  const { city } = props;

  return (
    <div className="p-2 hover:-translate-y-2 duration-300 cursor-pointer">
      <div
        className="w-full h-80 bg-cover bg-center rounded-xl flex flex-col justify-end p-4 relative"
        style={{ backgroundImage: `url(${city.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 rounded-xl"></div>

        <div className="relative z-10">
          <p className="text-white text-3xl font-bold mb-2">{city.name}</p>
          <p className="text-white text-sm font-semibold">{city.country}</p>
        </div>
      </div>
    </div>
  );
}
