import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import MainFooter from "./components/MainFooter";
import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import { allPages } from "./data/siteData";

function PublicLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <MainHeader />
      <main className="flex-1">{children}</main>
      <MainFooter />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PublicLayout>
              <HomePage />
            </PublicLayout>
          }
        />
        {allPages.map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={
              <PublicLayout>
                <InfoPage page={page} />
              </PublicLayout>
            }
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
