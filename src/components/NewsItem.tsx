import { Link, useParams } from "react-router";

import news from "../JSON/news.json";
import { useEffect, useState } from "react";

import { FaArrowLeft } from "react-icons/fa";

export default function NewsItem() {
  let params = useParams();

  const [title, setTitle] = useState<string | undefined>(undefined);
  const [subtitle, setSubtitle] = useState<string | undefined>(undefined);
  const [author, setAuthor] = useState<string | undefined>(undefined);
  const [date, setDate] = useState<string | undefined>(undefined);
  const [article, setArticle] = useState<string | undefined>(undefined);
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    for (const newsItem of news) {
      if (newsItem.id.toString() === params.newsItemId) {
        setTitle(newsItem.title);
        setSubtitle(newsItem.subtitle);
        setAuthor(newsItem.author);
        setDate(newsItem.date);
        setArticle(newsItem.article);
        setImgSrc(newsItem.imgSrc);
      }
    }
  }, []);

  return (
    <div className="flex w-full flex-col items-center">
      <Link
        to="/news"
        className="mx-4 mt-4 flex items-center gap-2 self-start text-sky-800 underline hover:text-indigo-700 active:text-indigo-800"
      >
        <FaArrowLeft />
        {`Back to all news`}
      </Link>

      <div className="mb-8 max-w-150">
        <h1 className="mx-4 mt-6 font-serif text-2xl font-bold text-indigo-900">
          {title}
        </h1>

        <h2 className="text-md mx-4 border-b border-b-gray-300 py-2 font-serif font-light text-gray-500">
          {subtitle}
        </h2>

        <p className="mx-4 mt-2 text-sm">{author}</p>

        <p className="mx-4 text-sm text-gray-500">{date}</p>

        <img src={imgSrc} className="m-4 w-[90%]" />

        <pre className="mx-4 text-wrap font-serif text-indigo-950 first-letter:text-3xl first-letter:font-bold">
          {article?.replace(/\\n/g, '\n')}
        </pre>
      </div>
    </div>
  );
}
