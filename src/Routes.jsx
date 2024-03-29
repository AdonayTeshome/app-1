import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Slide169One = React.lazy(() => import("pages/Slide169One"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/slide169one" element={<Slide169One />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
