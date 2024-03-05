import { MdAddShoppingCart } from "react-icons/md";

const Product = ({ title, price, img }) => {
  return (
    <div
      className="product-card"
      style={{
        backgroundImage: "url(" + img + ")",

        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#fff",
      }}
    >
      <button>
        <MdAddShoppingCart style={{ color: "#0b0117" }} />
      </button>
      <div className="content">
        <p>${price}</p>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Product;
