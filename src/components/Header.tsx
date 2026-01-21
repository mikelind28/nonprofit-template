import { FaBars } from "react-icons/fa";

type HeaderType = {
  openSidebar: () => void;
  sidebarOpen: boolean;
};

export default function Header({ openSidebar, sidebarOpen }: HeaderType) {
  return (
    <header
      className={`sticky top-0 z-70 flex h-16 items-center justify-between bg-indigo-400 px-4 py-2 ${sidebarOpen ? "shadow-lg shadow-indigo-950/20 md:shadow-none" : ""}`}
    >
      <FaBars
        onClick={openSidebar}
        className={`rounded-sm p-2 text-4xl text-indigo-950 ${sidebarOpen ? "bg-indigo-700/25 inset-shadow-xs/50" : "bg-indigo-200/25 shadow-2xs/25"}`}
      />
      <h1 className="oswald-header bg-indigo-950 bg-clip-text text-right text-xl/5 text-transparent">
        NONPROFIT
        <br />
        NAME
      </h1>
    </header>
  );
}
