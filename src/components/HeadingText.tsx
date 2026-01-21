type HeadingTextType = {
  text: string;
};

export default function HeadingText({ text }: HeadingTextType) {
  return (
    <h2 className="oswald-header m-2 bg-linear-to-b from-indigo-500 via-indigo-900 via-50% to-teal-950 bg-clip-text text-center text-2xl font-bold text-transparent underline decoration-indigo-400 decoration-2 underline-offset-4">
      {text}
    </h2>
  );
}
