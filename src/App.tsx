import { Outlet } from "react-router";
import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import NewsletterAlert from "./components/NewsletterAlert";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(
    window.innerWidth > 768 ? true : false,
  );

  function openSidebar() {
    setSidebarOpen(!sidebarOpen);
  }

  function closeSidebar() {
    setSidebarOpen(false);
  }

  return (
    <div className="h-full w-screen bg-indigo-100">
      <Header openSidebar={openSidebar} sidebarOpen={sidebarOpen} />

      {/* dark background overlay when sidebar is open */}
      <div
        onClick={closeSidebar}
        className={`fixed top-[4rem] left-0 z-40 h-full w-full bg-sky-950/50 transition-opacity duration-300 ease-in-out md:hidden ${sidebarOpen ? "visible opacity-100" : "invisible opacity-0"}`}
      ></div>

      <NewsletterAlert />

      <div className="flex h-full w-full flex-row">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="flex h-full min-h-[calc(100dvh-4rem)] w-full flex-col justify-between">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
