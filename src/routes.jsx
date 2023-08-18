import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";
import { ProductList } from "./pages/ProductList";
import {BrowserRouter, Routes, Route} from 'react-router-dom';


export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<ProductList />} />
        <Route exact path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}
