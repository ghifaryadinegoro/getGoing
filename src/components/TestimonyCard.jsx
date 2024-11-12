export default function TestimonyCard(props) {
  const { testimony } = props;

  return (
    <div className="p-3 flex flex-col justify-center items-center shadow-md border border-gray-100 duration-300 hover:-translate-y-2 cursor-grab max-w-[400px] lg:max-w-[480px] mx-auto">
      <img
        src={testimony.image}
        alt={testimony.name}
        className="w-full h-48 lg:h-64 object-cover mb-3"
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
