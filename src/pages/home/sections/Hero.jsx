import { useState } from "react";
import Button from "../../../components/Button";
import ShoeCard from "../../../components/ShoeCard";
import { shoes, statistics } from "../../../constants";
import { bigShoe1 } from "../../../assets/images";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const [currentShoe, setCurrentShoe] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="max-container flex min-h-screen w-full flex-col items-center gap-10 font-montserrat xl:flex-row"
    >
      <div className="max-xl:padding-x relative flex w-full flex-col items-start justify-center pt-28 xl:w-2/5">
        <p className="text-xl text-coral-red">Our Summer Collections</p>
        <h1 className="max-sm:leading[82] mt-10 font-palanquin text-8xl font-bold max-sm:text-[72]">
          <span className="relative z-10 pr-10 xl:whitespace-nowrap xl:bg-white dark:xl:bg-gray-900">
            The New Arrival
          </span>
          <br />
          <span className="mt-3 inline-block text-coral-red">Nike</span> Shoes
        </h1>
        <p className="mb-14 mt-6 text-lg leading-8 text-slate-gray sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life
        </p>
        <Button
          label="Shop Now"
          icon={faArrowRight}
        />
        <div className="mt-16 flex w-full flex-wrap items-start justify-start gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="font-palanquin text-4xl font-bold">{stat.value}</p>
              <p className="leading-7 text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex w-full flex-1 items-center justify-center bg-hero dark:bg-d-hero bg-cover bg-center max-xl:py-40 xl:min-h-screen">
        <img
          src={currentShoe}
          width={610}
          height={500}
          className="z-10 object-contain"
        />
        <div className="absolute -bottom-[5%] z-10 flex gap-4 sm:left-[10%] sm:gap-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard
                shoe={shoe}
                currentShoe={currentShoe}
                changeCurrentShoe={(shoe) => setCurrentShoe(shoe.bigShoe)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
