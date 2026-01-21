import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer className="mt-4 flex w-full flex-col bg-linear-to-t from-teal-50 via-teal-50 via-95% p-8 pb-4 text-teal-900">
      <nav className="flex flex-col text-sm/7">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="news"
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          News
        </NavLink>

        <NavLink
          to="team"
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          Our Team
        </NavLink>

        <NavLink
          to="reports"
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          Annual Reports
        </NavLink>

        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          About
        </NavLink>

        <NavLink
          to="careers"
          className={({ isActive }) => (isActive ? "font-bold" : "")}
        >
          Careers
        </NavLink>
      </nav>

      <div className="mt-4 flex w-fit items-center gap-6 self-center rounded-sm bg-emerald-500 px-4 py-2">
        <a href="">
          <img src="./images/InBug-White.png" width="25" height="25" />
        </a>

        <a href="">
          <img
            src="./images/Facebook_Logo_Secondary.png"
            width="25"
            height="25"
          />
        </a>

        <a href="">
          <img
            src="./images/Instagram_Glyph_White.png"
            width="25"
            height="25"
          />
        </a>

        <a href="">
          <img src="./images/logo-white.png" width="25" height="25" />
        </a>
      </div>
    </footer>
  );
}
