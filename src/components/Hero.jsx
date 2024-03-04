import image from "../assets/hero2.svg";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="text-container">
        <h1>FakeShop</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam nemo
          molestias minus incidunt unde culpa adipisci consequatur officiis sint
          nam architecto tempora aspernatur magni quasi, quo autem veniam
          aperiam. Perspiciatis tempore velit provident. Distinctio debitis
          provident consequuntur iusto delectus sed ducimus assumenda
          repudiandae ratione veniam minima expedita unde temporibus suscipit
          optio, quam fugit omnis ab dolor rerum. Atque, sapiente adipisci?
        </p>
      </div>
      <div className="image-container">
        <img src={image} />
      </div>
    </div>
  );
};

export default Hero;
