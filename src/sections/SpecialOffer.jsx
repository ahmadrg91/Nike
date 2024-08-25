import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center gap-10 max-container max-xl:flex-col-reverse">
      <div className="flex-1 flex justify-center items-center">
        <img src={offer} width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className="flex flex-col flex-1">
        <h2 className="text-4xl font-palanquin font-bold lg:max-w-lg"><span className="text-coral-red">Special</span> Offer</h2>
        <div className="font-montserrat info-text">
          <p className="mt-4">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
          <p className="mt-6">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        </div>
        <div className="flex flex-wrap gap-4 mt-11">
          <Button label="View Details" icon={arrowRight}/>
          <Button label="Learn more" bg="bg-white" text="text-slate-gray" border="border-slate-gray"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer;