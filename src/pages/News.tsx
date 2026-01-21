import HeadingText from "../components/HeadingText";
import NewsCard from "../components/NewsCard";

import news from "../JSON/news.json";

export default function News() {
  return (
    <div className="flex w-full flex-col items-center">
      <HeadingText text={"News"} />

      <div className="mx-2 mb-4 flex w-fit max-w-150 min-w-50 flex-col rounded-lg bg-indigo-50 shadow-sm/15">
        <div className="my-6">
          {news.map((newsItem) => {
            return (
              <div className="mb-3">
                <NewsCard
                  key={newsItem.id}
                  id={newsItem.id}
                  imgSrc={newsItem.imgSrc}
                  heading={newsItem.title}
                  date={new Date(newsItem.date)}
                  description={newsItem.subtitle}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
