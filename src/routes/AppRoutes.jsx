import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Home />
            <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
