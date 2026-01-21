import { NavLink } from "react-router";

type sidebarType = {
  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Sidebar({ sidebarOpen, setSidebarOpen }: sidebarType) {
  return (
    <nav
      id="sidebar"
      className={`fixed top-[4rem] bottom-0 z-80 flex h-[calc(100dvh-4rem)] w-[80%] max-w-100 min-w-40 flex-col border-r-1 border-r-indigo-950/25 bg-teal-50 p-5 text-teal-900 shadow-2xl shadow-teal-950/100 transition-all duration-500 ease-in-out *:p-2 md:top-[4rem] md:z-40 md:w-70 md:max-w-90 md:shadow-md/15 ${sidebarOpen ? "translate-x-0 md:sticky" : "-translate-x-[150vw]"}`}
      onClick={() => {
        if (window.innerWidth <= 768) { setSidebarOpen(false) }
      }}
    >
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "font-bold bg-green-300/50 rounded-lg" : "")}
      >
        Home
      </NavLink>

      <NavLink
        to="news"
        className={({ isActive }) => (isActive ? "font-bold bg-green-300/50 rounded-lg" : "")}
      >
        News
      </NavLink>

      <NavLink
        to="team"
        className={({ isActive }) => (isActive ? "font-bold bg-green-300/50 rounded-lg" : "")}
      >
        Our Team
      </NavLink>

      <NavLink
        to="reports"
        className={({ isActive }) => (isActive ? "font-bold bg-green-300/50 rounded-lg" : "")}
      >
        Annual Reports
      </NavLink>

      <NavLink
        to="about"
        className={({ isActive }) => (isActive ? "font-bold bg-green-300/50 rounded-lg" : "")}
      >
        About
      </NavLink>

      <NavLink
        to="careers"
        className={({ isActive }) => (isActive ? "font-bold bg-green-300/50 rounded-lg" : "")}
      >
        Careers
      </NavLink>
    </nav>
  );
}
