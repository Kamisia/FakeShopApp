import axios from "axios";
import { useQuery } from "@tanstack/react-query";
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

      {
        path: "/cart",
        element: <CartPage />,
      },

      {
        path: "/products",
        element: <ProductsContainer />,
      },
    ],
  },
]);
const App = () => {
  const fetchData = async () => {
    const url = "https://fakestoreapi.com/products";
    const response = await axios.get(url);
    return response.data;
  };
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchData(),
  });
  return (
    <RouterProvider router={router}>
      <div>
        <p>FakeShopApp</p>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error fetching data</div>}
        {data && console.log(data)}
      </div>
    </RouterProvider>
  );
};

export default App;
