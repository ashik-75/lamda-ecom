import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import CollectionsPage from "./pages/CollectionsPage";
import Homepage from "./pages/Homepage";
import ProductDetails from "./pages/ProductDetails";
import SearchPage from "./pages/SearchPage";
import SuccessPage from "./pages/SuccessPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Homepage />} />
        <Route path="products/:slug" element={<ProductDetails />} />
        <Route path="collections/:collection" element={<CollectionsPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
