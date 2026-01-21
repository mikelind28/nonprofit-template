import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

type NewsCardType = {
  id: number;
  imgSrc: string;
  heading: string;
  date: Date;
  description: string;
};

export default function NewsCard({
  id,
  imgSrc,
  heading,
  date,
  description,
}: NewsCardType) {
  return (
    <Link to={`/news/${id}`} className="group">
      <div
        id={id.toString()}
        className="relative mb-1 flex h-25 w-full flex-row border-y-1 border-r-[2rem] border-t-teal-800/25 border-r-black/66 border-b-teal-900/75 bg-white shadow-sm md:h-35 hover:bg-gray-100 active:bg-gray-200"
      >
        <img src={imgSrc} className="aspect-square object-cover" />

        <div className="flex flex-col px-2 py-2 md:p-4">
          <h3 className="leading-4 font-semibold text-indigo-900">{heading}</h3>
          <p className="text-sm font-light text-indigo-800">
            {date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="overflow-hidden text-sm/4 font-light text-ellipsis text-indigo-950">
            {description}
          </p>
        </div>

        <FaArrowRight className="absolute -right-6 self-center text-gray-200" />
      </div>
    </Link>
  );
}
