import { products } from "../../constants";
import ProductCard from "../../components/ProductCard";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { box, heart, star, truck } from "../../assets/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Product = () => {
  const params = useParams();
  const product = products.find((product) => product.name === params.name);
  const [selectedImg, setSelectedImg] = useState();
  const { addToCart } = useCart();
  const [ properties, setProperties ] = useState();
  const [ moreProducts, setMoreProducts ] = useState();

  useEffect(() => {
    setSelectedImg(product.imgURL[0]);
    setProperties({
      quantity: 1,
      size: product.sizes[0],
    });

    setMoreProducts(() => {
      const n = Math.floor(Math.random() * (products.length - 5 + 1)) + 5;
      return products.slice(n-5, n);
    });
  }, [product])

  const tabs = [
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
  ];
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <main className="padding mt-12">
      <section className="flex">
        <div className="flex flex-1 flex-col items-center gap-10">
          <div className="flex items-center">
            <div>
              <img width={480}  src={selectedImg} alt={product.name}/>
            </div>
          </div>
          <div className="flex gap-2">
            {
            product.imgURL.map((url) => (
              <div
                  className={`${selectedImg === url && "border-coral-red border-2"} w-fit h-fit cursor-pointer rounded-lg border p-4`}
                  onMouseOver={() => setSelectedImg(url)}
                >
                  <img
                    src={url}
                    className="object-contain"
                    width={67}
                  />
                </div>)
              )}
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <div>
            <h1 className="font-palanquin text-4xl mb-4">
              {product.name}
            </h1>
            <p className="flex font-montserrat items-center gap-2 mb-1">
              <img 
                src={star}
                className="size-4"
              />
              <span>
                {product.ratings}
              </span>
            </p>
            <button className="w-fit flex items-center gap-2 font-montserrat">
              <img 
                src={heart}
                className="size-4"
              />
              <span>
                Add to Wishlist
              </span>
            </button>
          </div>
          <span className="text-xl font-medium font-montserrat">${product.price} USD</span>
          <div>
            <h6 className="font-semibold text-md font-palanquin">Size</h6>
            <div className="flex gap-2 mt-3 text-sm font-montserrat font-semibold">
              {
                product.sizes.map(size => <button className={`h-10 w-14 rounded border hover:border-2 hover:border-gray-900 ${size === properties?.size && "border-gray-900 border-2"}`} onClick={() => setProperties(prev => {return {...prev, size: size}})}>{size} US</button>)
              }
            </div>
          </div>
          <div>
            <h6 className="font-semibold text-md font-palanquin">Qauntity</h6>
            <div className="flex items-center gap-3 mt-3">
              <div className="flex">
                <button className="bg-gray-100 w-11 h-11 border rounded-l-full disabled:opacity-50 disabled:cursor-not-allowed" onClick={() => setProperties(prev => {return {...prev, quantity: prev.quantity - 1}})} disabled={properties?.quantity <= 1}>-</button>
                <span className="flex items-center border-t border-b font-palanquin text-lg justify-center w-16">{properties?.quantity}</span>
                <button className="bg-gray-100 w-11 h-11 border rounded-r-full" onClick={() => setProperties(prev => {return {...prev, quantity: prev.quantity + 1}})}>+</button>
              </div>
              <button className="border rounded-full h-11 px-6 bg-coral-red text-white font-semibold font-montserrat disabled:opacity-65 disabled:cursor-not-allowed" disabled={properties?.quantity <= 0} onClick={() => addToCart(product.name, properties?.quantity)}>
                Add to Cart
              </button>
            </div>
          </div>
          <div className="flex justify-around py-4 my-4 border-t border-b">
              <span className="flex items-center gap-2 text-sm font-palanquin">
                <img 
                  src={truck}
                  className="size-5"
                />
                <p>
                  Order over <span className="font-montserrat">$</span>50 ship free
                </p>
              </span>
              <span className="flex items-center gap-2 text-sm font-palanquin">
                <img 
                  src={box}
                  className="size-4"
                />
                <p>
                  Worry-Free Guarantee
                </p>
              </span>
          </div>
          <div>
            <div className="flex justify-center">
              <ul className="flex justify-between w-full font-palanquin">
                {tabs.map((tab) => (
                  <li
                    key={tab.title}
                    className="flex h-full flex-col gap-1"
                  >
                    <button
                      className={`${tab.title === currentTab.title ? "text-coral-red" : "text-gray-600"} font-planquin font-medium`}
                      onClick={() => setCurrentTab(tab)}
                    >
                      {tab.title}
                    </button>
                    <span
                      className={`${tab.title === currentTab.title ? "block" : "hidden"} h-1 visible rounded-sm bg-coral-red`}
                    ></span>
                  </li>
                ))}
              </ul>
            </div>
            <div id="product-details" className="mt-6">
              <p className="tex-lg text-justify font-montserrat text-gray-600">
                {currentTab.content}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-24">
        <h1 className="font-montserrat text-2xl font-semibold">
          You May Also Like
        </h1>
        <div className="mt-10 flex justify-around">
          {moreProducts?.map((product) => (
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
