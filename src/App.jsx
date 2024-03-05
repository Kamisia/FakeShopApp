import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Landing from "./pages/Landing";
import CartPage from "./pages/CartPage";

import ProductsContainer from "./pages/ProductsContainer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/products", element: <ProductsContainer /> },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}>
      <div>
        <p>FakeShopApp</p>
      </div>
    </RouterProvider>
  );
};

export default App;
