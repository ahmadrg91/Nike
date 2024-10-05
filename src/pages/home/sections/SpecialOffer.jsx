import { arrowRight } from "../../../assets/icons";
import { offer } from "../../../assets/images";
import Button from "../../../components/Button";

const SpecialOffer = () => {
  return (
    <section className="max-container flex items-center justify-between gap-10 max-xl:flex-col-reverse">
      <div className="flex flex-1 items-center justify-center bg-offer bg-cover bg-center dark:bg-d-offer">
        <img
          src={offer}
          width={773}
          height={687}
          className="w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <div className="info-text font-montserrat">
          <p className="mt-4">
            Embark on a shopping journey that redefines your experience with
            unbeatable deals. From premier selections to incredible savings, we
            offer unparalleled value that sets us apart.
          </p>
          <p className="mt-6">
            Navigate a realm of possibilities designed to fulfill your unique
            desires, surpassing the loftiest expectations. Your journey with us
            is nothing short of exceptional.
          </p>
        </div>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button
            label="View Details"
            icon={arrowRight}
          />
          <Button
            label="Learn more"
            bg="bg-white dark:bg-gray-900"
            text="text-slate-gray"
            border="border-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
