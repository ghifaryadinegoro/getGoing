import { Link } from "react-router-dom";

export default function ArticleCard(props) {
  const { article } = props;

  return (
    <div className="shadow-lg rounded-lg overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full">
      <Link to={article.link}>
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-[400px] object-cover"
        />
      </Link>
      <div className="px-4 py-6 bg-white flex flex-col flex-grow">
        <div className="flex-grow">
          <Link
            to={article.link}
            className="text-[#343a40] text-xl font-bold hover:text-black hover:underline duration-300"
          >
            {article.title}
          </Link>
        </div>
        <div className="flex items-center gap-2 my-4">
          <svg
            className="w-5 h-5 text-[#adb5bd]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p className="text-[#adb5bd] text-md">{article.time}</p>
        </div>
        <Link
          to={article.link}
          className="text-red-600 hover:text-[#cc0000] font-bold text-sm flex items-center duration-300 w-fit"
        >
          <p className="hover:underline duration-300 tracking-[0.2em]">
            LANJUTKAN MEMBACA
          </p>
          <span className="ml-2">→</span>
        </Link>
      </div>
    </div>
  );
}
