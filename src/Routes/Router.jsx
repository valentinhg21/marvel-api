import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../Pages/Home";
import Header from "../Components/Header";
import { Footer } from "../Components/Footer";


// HANDLE ROUTES
export const Router = () => {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="*" element={ <h1>NOT FOUND</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  };
  