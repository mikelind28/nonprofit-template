import { useEffect, useRef, useState, type ReactNode } from "react";

type DoubleTextBubbleType = {
  children: ReactNode;
};

export default function DoubleTextBubble({ children }: DoubleTextBubbleType) {
  const p1Ref = useRef<null | HTMLDivElement>(null);

  const [p1Height, setP1Height] = useState(0);

  const [delay200ms, setDelay200ms] = useState(false);
  const [delay400ms, setDelay400ms] = useState(false);

  // find the height of the emerald box based on its text size, so that the sky box behind it will match its height.
  useEffect(() => {
    const el = p1Ref.current;
    if (!el) return;

    const observer = new ResizeObserver(() => {
      setP1Height(el.offsetHeight);
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [p1Ref]);

  // animate the list items to slide in from the left.
  useEffect(() => {
    setTimeout(() => setDelay200ms(true), 200);
    setTimeout(() => setDelay400ms(true), 400);
  }, []);

  return (
    <div className="relative mb-6 w-[95%] max-w-140 min-w-60">
      {/* top emerald box */}
      <div
        ref={p1Ref}
        className={`relative z-30 h-fit w-[95%] rounded-2xl bg-teal-50 drop-shadow-lg drop-shadow-teal-950/66 transition-transform duration-500 ease-in-out ${delay200ms ? "translate-x-0" : "-translate-x-[150vw]"}`}
      >
        <div className="p-6">{children}</div>
      </div>

      {/* sky shadow box */}
      <div
        className={`absolute top-3 z-20 w-[95%] rounded-2xl bg-indigo-400/75 transition-all duration-500 ease-in-out ${delay400ms ? "-right-0" : "-right-200"}`}
        style={{ height: p1Height }}
      ></div>
    </div>
  );
}
