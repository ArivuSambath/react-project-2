import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/.Navbar";
import ViewProduct from "./pages/Products/ViewProduct";
import AllCategories from "./pages/.Categories/AllCategories";
import AllProducts from "./pages/Products/AllProducts";
import ViewCategories from "./pages/.Categories/ViewCategories";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-2">
            <AllCategories />
          </div>
          <div className="col-md-9 mb-2">
            <Routes>
              <Route path="/" element={<AllProducts />} />
              <Route path="/Category/:id" element={<ViewCategories />} />
              <Route path="/Product/:id" element={<ViewProduct />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
