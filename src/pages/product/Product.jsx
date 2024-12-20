import { faArrowRight, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { bigShoe1 } from "../../assets/images";
import Button from "../../components/Button";
import { products, shoes } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductCard from "../../components/ProductCard";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Product = () => {
  const params = useParams();
  const product = products.find((product) => product.name === params.name);
  const [selectedImg, setSelectedImg] = useState(product.imgURL);
  const { addToCart } = useCart();

  const [tabs, setTabs] = useState([
    {
      title: "Description",
      content:
        "These shoes are designed with meticulous attention to detail, combining high-quality materials and cutting-edge technology to provide unmatched comfort and performance. The upper features breathable mesh for ventilation, while the cushioned midsole ensures all-day support. Perfect for athletic activities or casual wear, this product stands out with its sleek design and durable build, making it a must-have for every wardrobe.",
    },
    {
      title: "Size & Fit",
      content:
        "Finding the right fit is essential for maximum comfort and performance. These shoes are designed to run true to size, offering a snug yet flexible fit. For those in-between sizes, we recommend going up half a size for the best experience. Our detailed size guide provides comprehensive measurements, ensuring you pick the perfect fit for your feet. From width options to length recommendations, we’ve got you covered for a seamless shopping experience.",
    },
    {
      title: "Free Shipping",
      content:
        "Enjoy the convenience of free shipping on all orders above $50, delivered right to your doorstep. We understand the importance of a smooth shopping experience, which is why we aim to dispatch orders within 24 hours of purchase. Standard shipping typically takes 3-5 business days, while expedited options are available for a small fee. With tracking information provided, you can monitor your package every step of the way, ensuring it reaches you safely and on time.",
    },
    {
      title: "Free Shipping & Return",
      content:
        "Your satisfaction is our priority. If for any reason you're not happy with your purchase, we offer a hassle-free return policy within 30 days of delivery. Items must be unused and in their original packaging to qualify for a full refund. Once your return is processed, refunds are typically issued within 5-7 business days. Need an exchange instead? We've got you covered with a quick and simple process to get you the perfect product.",
    },
  ]);
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <main className="padding mt-12">
      <section className="flex justify-around">
        <div className="flex flex-col items-center gap-10">
          <img width={610} height={500} src={selectedImg} />
          <div className="flex gap-5">
            <div
              className={`w-fit rounded-lg border-2 p-4 ${selectedImg === product.imgURL && "border-coral-red"} cursor-pointer`}
              onClick={() => setSelectedImg(product.imgURL)}
            >
              <img
                src={product.imgURL}
                className="object-contain"
                width={107}
                height={93}
              />
            </div>
            {products
              .filter((temp) => temp.imgURL !== product.imgURL)
              .slice(1, 4)
              .map((product) => (
                <div
                  className={`${selectedImg === product.imgURL && "border-coral-red"} w-fit cursor-pointer rounded-lg border-2 p-4`}
                  onClick={() => setSelectedImg(product.imgURL)}
                >
                  <img
                    src={product.imgURL}
                    className="object-contain"
                    width={107}
                    height={93}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="py-12 font-montserrat text-4xl font-semibold">
            {product.name}
          </h1>
          <div className="mt-10 flex w-full gap-10 font-medium">
            <span className="hover:cursor-pointer">Select Size</span>
            <span className="hover:cursor-pointer">Size Guide</span>
          </div>
          <div className="grid grid-cols-4 gap-4 pt-6">
            <button className="h-12 w-16 rounded border">3.5Y</button>
            <button className="h-12 w-16 rounded border">4Y</button>
            <button className="h-12 w-16 rounded border">4.5Y</button>
            <button className="h-12 w-16 rounded border">5Y</button>
            <button className="h-12 w-16 rounded border">5.5Y</button>
            <button className="h-12 w-16 rounded border">6Y</button>
            <button className="h-12 w-16 rounded border">6.5Y</button>
            <button className="h-12 w-16 rounded border">7Y</button>
          </div>
          <div className="mt-12 flex items-center gap-20">
            <Button
              label="Add to Cart"
              icon={faCartPlus}
              onClick={() => addToCart(product.name)}
            />
            <span className="text-3xl font-medium">${product.price}</span>
          </div>
          <div className="mt-24 grid grid-cols-2 gap-y-6 font-medium opacity-80">
            <a href="#product-details">
              <span className="flex items-center gap-6">
                Description <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </a>
            <a href="#product-details">
              <span className="flex items-center gap-6">
                Size & Fit <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </a>
            <a href="#product-details">
              <span className="flex items-center gap-6">
                Free Shipping <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </a>
            <a href="#product-details">
              <span className="flex items-center gap-6">
                Free Shipping & Returns <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className="mt-24 flex justify-center">
          <ul className="flex h-12 justify-between">
            {tabs.map((tab) => (
              <li
                key={tab.title}
                className="flex h-full w-44 flex-col justify-between"
              >
                <button
                  className={`${tab === currentTab ? "text-coral-red" : "text-gray-500"} font-planquin font-medium`}
                  onClick={() => setCurrentTab(tab)}
                >
                  {tab.title}
                </button>
                <span
                  className={`${tab === currentTab ? "block" : "hidden"} h-1 w-full rounded-sm bg-coral-red`}
                ></span>
              </li>
            ))}
          </ul>
        </div>
        <div id="product-details" className="mt-12 h-32 px-80">
          <p className="tex-lg text-justify font-montserrat text-gray-600">
            {currentTab.content}
          </p>
        </div>
      </section>
      <section className="padding">
        <h1 className="font-montserrat text-2xl font-semibold">
          You May Also Like
        </h1>
        <div className="mt-10 flex justify-around">
          {products.slice(1, 6).map((product) => (
            <ProductCard
              imgURL={product.imgURL}
              name={product.name}
              price={product.price}
              ratings={product.ratings}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Product;
