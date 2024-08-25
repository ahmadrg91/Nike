import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-col flex-1 lg:max-w-lg">
        <h2 className="font-palanquin text-4xl font-bold">
          We Provide You <span className="text-coral-red">Super Quality</span> Shoes
        </h2>
        <div className="mt-4 info-text">
          <p>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
          <p className="mt-6">Our dedication to detail and excellence ensures your satisfaction</p>
        </div>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"/>
      </div>
    </section>
  )
}

export default SuperQuality;