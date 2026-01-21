import type { ReactNode } from "react";

type LightTextBubbleType = {
  countDownComplete: boolean;
  children: ReactNode;
};

export default function LightTextBubble({
  countDownComplete,
  children,
}: LightTextBubbleType) {
  return (
    <div
      className={`m-2 mt-0 h-fit w-fit min-w-50 rounded-lg bg-emerald-50 px-6 py-4 text-teal-900 transition-transform duration-500 ease-in-out xs:w-120 ${countDownComplete ? "translate-x-0" : "-translate-x-[150vw]"}`}
    >
      {children}
    </div>
  );
}
