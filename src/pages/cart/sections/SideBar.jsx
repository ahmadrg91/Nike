import { useState } from "react";

const SideBar = ({ subtotal, discounts, setDiscounts }) => {
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [coupons, setCoupons] = useState({
    firstpurchase: {
      label: "New Customer",
      value: 3.0,
    },
  });

  const [shipping, setShipping] = useState(0);

  const countries = {
    Pakistan: {
      Sargodha: 0.0,
      Lahore: 1.5,
    },
    India: {
      Delhi: 5.0,
      Kolkata: 10.0,
    },
    "United States": {
      Washington: 6.0,
      California: 15.0,
    },
  };

  let totalDiscount = 0;
  Object.values(discounts).forEach((discount) => (totalDiscount += discount));

  const handleShippingUpdate = (e) => {
    e.preventDefault();
    setShipping(countries[country][e.target.city.value]);
  };

  const handleCouponApply = (e) => {
    e.preventDefault();
    const code = e.target.coupon.value.toLowerCase();

    if (coupons[code]) {
      setDiscounts((prevDiscounts) => ({
        ...prevDiscounts,
        [coupons[code].label]: coupons[code].value,
      }));
    } else alert("Invalid Coupon");
  };

  return (
    <div className="sticky top-2 my-10 h-fit w-[24%] rounded-2xl px-3 py-6 shadow-[0px_0px_25px_0px_rgba(0,0,0,0.1)]">
      <div className="p-2">
        <h2 className="text-xl font-bold">Calculated Shipping</h2>
        <form onSubmit={handleShippingUpdate}>
          <div className="my-6 flex flex-col gap-3">
            <div className="rounded-3xl bg-gray-100 pl-2 pr-3">
              <select
                name="country"
                defaultValue="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full bg-transparent py-3 text-sm font-semibold text-gray-700 outline-none"
              >
                <option disabled>Country</option>
                {Object.entries(countries).map(([country, cities]) => (
                  <option key={country}>{country}</option>
                ))}
              </select>
            </div>
            <div className="flex w-full gap-2">
              <div className="w-[45%] rounded-3xl bg-gray-100 pl-2 pr-3">
                <select
                  name="city"
                  defaultValue="State/City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-transparent py-3 text-sm font-semibold text-gray-700 outline-none"
                >
                  <option disabled>State/City</option>
                  {country &&
                    Object.entries(countries[country]).map(
                      ([city, charges]) => <option key={city}>{city}</option>,
                    )}
                </select>
              </div>
              <div className="flex w-[45%] items-center justify-center rounded-full border">
                <input
                  type="text"
                  placeholder="Zip Code"
                  className="mx-4 w-full font-light italic outline-none"
                />
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="Update"
            className="w-full rounded-3xl bg-coral-red py-3 font-palanquin text-lg font-semibold text-white"
          />
        </form>
      </div>
      <hr className="border-1 my-6 rounded-full border-gray-400" />
      <div className="p-2">
        <h2 className="text-xl font-bold">Coupon Code</h2>
        <p className="my-2 font-montserrat text-sm text-gray-700">
          Have a promo code? Enter it below and enjoy special discounts on your
          order. Make sure to apply it before checkout to maximize your savings!
        </p>
        <form onSubmit={handleCouponApply}>
          <div className="mb-6 w-full rounded-3xl bg-gray-100 px-2 py-3 text-sm text-gray-700 outline-none">
            <input
              name="coupon"
              type="text"
              placeholder="Coupon Code"
              className="mx-2 w-full bg-transparent outline-none"
            />
          </div>
          <input
            type="submit"
            value="Apply"
            className="w-full rounded-full bg-coral-red py-3 font-palanquin text-lg font-semibold text-white"
          />
        </form>
      </div>
      <div className="mt-12 rounded-2xl bg-[#ffd28d] px-4 py-6">
        <h2 className="text-xl font-bold">Cart Total</h2>
        <div className="mb-6 mt-3 flex flex-col">
          <div className="flex justify-between">
            <p>Cart Subtotal</p>
            <p>${subtotal}</p>
          </div>
          <div className="flex justify-between">
            <p>Shipping {city ? `to ${city}` : ""}</p>
            <p>${shipping}</p>
          </div>
          {Object.entries(discounts).map(([key, val]) => (
            <div key={key} className="flex justify-between">
              <p>{key}</p>
              <p className="font-semibold text-white">-${val}</p>
            </div>
          ))}
          <div className="flex justify-between font-semibold">
            <p>Cart Total</p>
            <p className="text-xl">
              ${(subtotal - totalDiscount + shipping).toFixed(2)}
            </p>
          </div>
        </div>
        <button className="mt-4 w-full rounded-3xl bg-white p-3 font-semibold">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default SideBar;
