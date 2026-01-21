import type { ReactNode } from "react";

type CareerCardType = {
  title: string;
  datePosted: Date;
  children: ReactNode;
};

export default function CareerCard({
  title,
  datePosted,
  children,
}: CareerCardType) {
  return (
    <div className="mx-4 my-2 rounded-md border-b-1 border-b-gray-400 bg-indigo-50 p-4 pb-4">
      <h3 className="font-bold">{`${title}`}</h3>

      <p className="text-sm font-light text-gray-600">
        {`Posted on ${datePosted.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`}
      </p>

      <div className="py-4 text-sm">{children}</div>

      <a href="#" className="text-teal-800 underline hover:text-indigo-700 active:text-indigo-800">
        Apply here!
      </a>
    </div>
  );
}
