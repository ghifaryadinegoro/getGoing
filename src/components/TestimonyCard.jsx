export default function TestimonyCard(props) {
  const { testimony } = props;

  return (
    <div className="p-3 flex flex-col justify-center items-center shadow-md border border-gray-100 duration-300 hover:-translate-y-2 cursor-grab max-w-[400px] md:max-w-[480px] mx-auto">
      <img
        src={testimony.image}
        alt={testimony.name}
        className="w-full h-48 md:h-64 lg:h-72 object-cover mb-3"
      />
      <div className="text-center">
        <p className="font-bold">{testimony.name}</p>
        <p className="text-gray-500 text-xs uppercase">
          {testimony.occupation}
        </p>
      </div>
    </div>
  );
}
