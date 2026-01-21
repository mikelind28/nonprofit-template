import DoubleTextBubble from "../components/DoubleTextBubble";
import HeadingText from "../components/HeadingText";
import { FaArrowRight } from "react-icons/fa";

type AnnualReportHeaderType = {
  imgSrc: string;
  text: string;
};

function AnnualReportHeader({ imgSrc, text }: AnnualReportHeaderType) {
  return (
    <a
      href="/files/hello.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={`relative mb-4 flex h-20 w-full rounded-[8px] border-r-[2rem] border-r-black/75 bg-cover bg-center inset-shadow-sm inset-shadow-emerald-950 hover:opacity-75 group`}
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <h2 className="absolute bottom-0 left-4 text-4xl font-bold text-white text-shadow-emerald-950 text-shadow-sm group-hover:text-shadow-md group-hover:text-shadow-black/90">
        {text}
      </h2>

      <FaArrowRight className="absolute -right-6 self-center text-gray-200" />
    </a>
  );
}

export default function Reports() {
  return (
    <div className="flex flex-col items-center">
      <HeadingText text={"Annual Reports"} />

      <DoubleTextBubble>
        <AnnualReportHeader imgSrc="./images/fy19-20.jpg" text="2019-2020" />

        <AnnualReportHeader imgSrc="./images/fy20-21.jpg" text="2020-2021" />

        <AnnualReportHeader imgSrc="./images/fy21-22.jpg" text="2021-2022" />

        <AnnualReportHeader imgSrc="./images/fy22-23.jpg" text="2022-2023" />

        <AnnualReportHeader imgSrc="./images/fy23-24.jpg" text="2023-2024" />
      </DoubleTextBubble>
    </div>
  );
}
