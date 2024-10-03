import Button from "../components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="max-container flex w-full items-center justify-between gap-10 max-lg:flex-col"
    >
      <div className="flex flex-1 flex-col lg:max-w-lg">
        <h2 className="font-palanquin text-4xl font-bold">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>
        <div className="info-text mt-4">
          <p>
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className="mt-6">
            Our dedication to detail and excellence ensures your satisfaction
          </p>
        </div>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex items-center justify-center bg-shoe-8 dark:bg-d-shoe-8 w-fit bg-cover bg-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
