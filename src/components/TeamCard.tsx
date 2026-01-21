import { useEffect, useState, type ReactNode } from "react";
import LightTextBubble from "./LightTextBubble";

type TeamCardType = {
  imgColor: string;
  employeeName: string;
  employeeTitle: string;
  employeeBio: ReactNode;
};

export default function TeamCard({
  imgColor,
  employeeName,
  employeeTitle,
  employeeBio,
}: TeamCardType) {
  const [color, setColor] = useState(imgColor);

  useEffect(() => {
    setColor(color);
  }, [imgColor]);

  return (
    <LightTextBubble countDownComplete={true}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-center gap-4">
          <div className="relative">
            <div
              className={`absolute h-20 w-20 rounded-full ${imgColor}`}
            ></div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              alt="employee.png"
              className="h-20 w-20 rounded-full"
            />
          </div>

          <div className="flex flex-col">
            <p className="text-lg font-bold">{employeeName}</p>
            <p className="italic">{employeeTitle}</p>
          </div>
        </div>

        <div className="text-sm">{employeeBio}</div>
      </div>
    </LightTextBubble>
  );
}
