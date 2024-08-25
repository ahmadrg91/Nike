import { useState } from "react";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";


const Hero = () => {

  const [ currentShoe, setCurrentShoe ] = useState(bigShoe1);

  return (
    <section id="home" className="flex flex-col xl:flex-row items-center w-full min-h-screen max-container gap-10 font-montserrat">
      <div className="xl:w-2/5 w-full max-xl:padding-x pt-28 flex flex-col justify-center items-start relative">
        <p className="text-coral-red text-xl">Our Summer Collections</p>
        <h1 className=" mt-10 max-sm:text-[72] max-sm:leading[82] text-8xl font-bold font-palanquin">
          <span className="relative xl:bg-white xl:whitespace-nowrap z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="text-slate-gray leading-8 mb-14 mt-6 text-lg sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life
        </p>
        <Button label="Shop Now" icon={arrowRight}/>
        <div className="flex flex-wrap gap-16 w-full mt-16 items-start justify-start">
          {statistics.map(stat => 
            <div key={stat.label}>
              <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
              <p className="leading-7 text-slate-gray">{stat.label}</p>
            </div>
          )}
        </div>
      </div>
      <div className="relative xl:min-h-screen w-full flex justify-center items-center bg-primary bg-cover bg-center bg-hero flex-1 max-xl:py-40">
        <img 
          src={currentShoe}
          width={610}
          height={500}
          className="object-contain z-10"
        />
        <div className="flex absolute -bottom-[5%] sm:left-[10%] gap-4 sm:gap-6 z-10">
          {shoes.map((shoe, index) => 
            <div key={index}>
              <ShoeCard 
                 shoe={shoe}
                 currentShoe={currentShoe}
                 changeCurrentShoe={shoe => setCurrentShoe(shoe.bigShoe)}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero;