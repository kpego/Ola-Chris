import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import ProductsDetails from "../components/ProductsDetails";
import Contact from "../pages/Contact";
import Offer from "../pages/Offer";


function AppContext({
  searchTerm,
  onAddToCart,
  onUpdateCartQuantity,
  cartItems,
  onSearchChange,
}) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/products"
        element={
          <Products
            searchTerm={searchTerm}
            onSearchChange={onSearchChange}
            cartItems={cartItems}
            onAddToCart={onAddToCart}
            onUpdateCartQuantity={onUpdateCartQuantity}
          />
        }
      />
      <Route
        path="/details"
        element={<ProductsDetails onAddToCart={onAddToCart} />}
      />
      <Route path="/contact" element={<Contact />} />
      <Route path="/offer" element={<Offer />} />
    </Routes>
  );
}

export default AppContext;
