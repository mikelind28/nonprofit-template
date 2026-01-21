import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.tsx";
import Home from "./pages/Home.tsx";
import News from "./pages/News.tsx";
import Team from "./pages/Team.tsx";
import Reports from "./pages/Reports.tsx";
import About from "./pages/About.tsx";
import Careers from "./pages/Careers.tsx";
import NewsItem from "./components/NewsItem.tsx";

// TODO: change the browser window title for each page

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="news">
            <Route index element={<News />} />
            <Route path=":newsItemId" element={<NewsItem />} />
          </Route>
          <Route path="team" element={<Team />} />
          <Route path="reports" element={<Reports />} />
          <Route path="about" element={<About />} />
          <Route path="careers" element={<Careers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
