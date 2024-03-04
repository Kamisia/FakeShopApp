import axios from "axios";
import { useQuery } from "@tanstack/react-query";
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
    <div>
      <p>FakeShopApp</p>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error fetching data</div>}
      {data && console.log(data)}
    </div>
  );
};

export default App;
