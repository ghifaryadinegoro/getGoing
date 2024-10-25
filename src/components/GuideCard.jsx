export default function GuideCard(props) {
  const { guide } = props;

  return (
    <div className="p-4 flex justify-center items-center">
      <div>
        <div className="relative duration-300 hover:-translate-y-2 cursor-pointer">
          <img
            src={guide.image}
            alt={guide.name}
            className="lg:w-52 lg:h-52 w-80 h-80 object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 rounded-xl"></div>
        </div>
        <p className="font-bold">{guide.name}</p>
        <p className="font-light">{guide.location}</p>
      </div>
    </div>
  );
}
