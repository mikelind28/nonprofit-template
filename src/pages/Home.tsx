import { useEffect, useState } from "react";
import DoubleTextBubble from "../components/DoubleTextBubble";
import HeadingText from "../components/HeadingText";
import NewsCard from "../components/NewsCard";

import news from "../JSON/news.json";
import { Link } from "react-router";
import LightTextBubble from "../components/LightTextBubble";

// TODO: add popup "join our mailing list"

export default function Home() {
  const [firstDelay, setFirstDelay] = useState(false);
  const [secondDelay, setSecondDelay] = useState(false);
  const [thirdDelay, setThirdDelay] = useState(false);

  // animate the list items to slide in from the left.
  useEffect(() => {
    setTimeout(() => setFirstDelay(true), 200);
    setTimeout(() => setSecondDelay(true), 400);
    setTimeout(() => setThirdDelay(true), 600);
  }, []);

  return (
    <main className="flex h-full w-full flex-col items-center gap-0">
      <h1 className="oswald-header mt-3 text-center text-2xl text-indigo-950">
        Building a Better World.
      </h1>

      {/* "we're hiring" alert */}
      <Link
        to="/careers"
        className="relative my-4 w-[95%] max-w-120 min-w-50 rounded-md bg-white hover:bg-gray-100 active:bg-gray-200"
      >
        {/* blinking green alert light */}
        <span className="absolute -top-1 -right-1 z-20 flex size-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex size-3 rounded-full bg-emerald-500"></span>
        </span>

        <div className="rounded-md px-4 py-2">
          <h2 className="text-center font-bold text-indigo-900">
            We're hiring!
          </h2>

          <p className="text-center text-indigo-700 underline">
            Check out our open positions here!
          </p>
        </div>

        <div className="absolute top-0 z-10 h-full w-full rounded-md border-2 border-indigo-600"></div>
      </Link>

      {/* Our Mission */}
      <HeadingText text={"Our Mission"} />

      <DoubleTextBubble>
        <p className="font-light text-indigo-900">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod
          justo eu fermentum placerat. Donec at suscipit lacus. Proin porta
          magna eget lectus egestas pharetra.
        </p>
      </DoubleTextBubble>

      {/* Our Values */}
      <HeadingText text={"Our Values"} />

      <ul className="mb-2 flex w-full max-w-135 min-w-50 list-disc flex-col items-center marker:text-teal-600">
        <LightTextBubble countDownComplete={firstDelay}>
          <li className="ml-2 text-indigo-950">
            Aenean id justo quis tellus pharetra gravida. Integer vel pretium
            quam. Donec dolor nisi, finibus quis placerat sit amet, laoreet a
            ligula.
          </li>
        </LightTextBubble>

        <LightTextBubble countDownComplete={secondDelay}>
          <li className="ml-2 text-indigo-950">
            Donec dolor mauris, finibus at justo vel, rhoncus pellentesque
            magna.
          </li>
        </LightTextBubble>

        <LightTextBubble countDownComplete={thirdDelay}>
          <li className="ml-2 text-indigo-950">
            Morbi in odio vel tortor tincidunt vestibulum et vel lectus. Sed ac
            bibendum turpis. Vestibulum pulvinar sapien nec est laoreet, id
            porta ante eleifend.
          </li>
        </LightTextBubble>
      </ul>

      {/* Latest News */}
      <HeadingText text={"Latest News"} />

      <div className="mx-4 mb-4 flex w-fit max-w-150 min-w-50 flex-col rounded-lg bg-indigo-200 inset-shadow-sm/15">
        <div className="mt-6">
          {news.map((newsItem, index) => {
            while (index < 3) {
              return (
                <NewsCard
                  key={newsItem.id}
                  id={newsItem.id}
                  imgSrc={newsItem.imgSrc}
                  heading={newsItem.title}
                  date={new Date(newsItem.date)}
                  description={newsItem.subtitle}
                />
              );
            }
            return;
          })}
        </div>

        <p className="my-6 text-center">
          View all of our{" "}
          <Link to={{ pathname: "/news" }} className="text-sky-800 underline hover:text-indigo-700 active:text-indigo-800">
            news stories here
          </Link>
          .
        </p>
      </div>

      <DoubleTextBubble>
        <div>
          <p className="pb-2 font-light text-indigo-900 italic">
            "Phasellus orci augue, facilisis eu est sed, tristique convallis
            nulla. Aliquam eu lacus sit amet nisi fringilla efficitur."
          </p>

          <p className="font-medium text-indigo-950">-Vestibulum Lobortis</p>
        </div>
      </DoubleTextBubble>
    </main>
  );
}
