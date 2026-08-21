import { HashRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import TestPage from "../test/page.test";

export function Routers() {
  const path = [
    { path: "/", element: <App /> },
    { path: "/home", element: <HomePage /> },
    { path: "/test", element: <TestPage /> },
  ];

  return (
    <HashRouter>
      <Routes>
        {path.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Routes>
    </HashRouter>
  );
}
