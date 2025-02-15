import { useState } from "react";

const SideBar = ({ subtotal, discounts, setDiscounts }) => {

  const [ country, setCountry ] = useState("Country");
  const [ city, setCity ] = useState();
  const [ coupons, setCoupons ] = useState({
    firstpurchase: {
      label: "New Customer",
      value: 3.0
    }
  });

  const [ shipping , setShipping ] = useState(0);

  const countries = {
    "Country": {
      "Select City/State": 0.0,
    },
    "Pakistan" : {
      "Sargodha": 0.0,
      "Lahore": 1.5,
    },
    "India" : {
      "Delhi": 5.0,
      "Kolkata": 10.0,
    },
    "United States": {
      "Washington": 6.0,
      "California": 15.0,
    },
  }

  let totalDiscount = 0;
  Object.values(discounts).forEach(discount => totalDiscount += discount);

  const handleShippingUpdate = (e) => {
    e.preventDefault();
    setShipping(
      countries[country][e.target.city.value]
    )
  }

  const handleCouponApply = (e) => {
    e.preventDefault();
    const code = e.target.coupon.value.toLowerCase();

    if(coupons[code]){
      setDiscounts(prevDiscounts => ({...prevDiscounts,
          [coupons[code].label]: coupons[code].value,
       }))
    }
    else alert("Invalid Coupon"); 
  }

  return (
    <div className="sticky top-2 w-[24%] h-fit shadow-[0px_0px_25px_0px_rgba(0,0,0,0.1)] px-3 py-6 my-10 rounded-2xl">
        <div className="p-2">
          <h2 className="font-bold text-xl">Calculated Shipping</h2>
          <form onSubmit={handleShippingUpdate}>
            <div className="flex flex-col gap-3 my-6">
              <div className="rounded-3xl bg-gray-100 pl-2 pr-3">
                <select name="country" value={country} onChange={(e) => setCountry(e.target.value)} className="py-3 w-full text-sm font-semibold text-gray-700 outline-none bg-transparent">
                  <option disabled>Country</option>
                  {
                    Object.entries(countries).map(([country, cities]) => <option key={country}>{country}</option>)
                  }
                </select>
              </div>
              <div className="w-full flex gap-2">
                <div className="rounded-3xl w-[45%] bg-gray-100 pl-2 pr-3">
                  <select name="city" value={city} onChange={(e) => setCity(e.target.value)} className="text-sm py-3 font-semibold w-full text-gray-700 outline-none bg-transparent">
                    <option disabled>State/City</option>
                    {
                      country && Object.entries(countries[country]).map(([city, charges]) => <option key={city}>{city}</option>)
                    }
                  </select>
                </div>
                <div className="w-[45%] border rounded-full flex items-center justify-center">
                  <input type="text" placeholder="Zip Code" className="w-full mx-4 outline-none italic font-light"/>
                </div>
              </div>     
            </div>
            <input type="submit" value="Update" className="bg-coral-red w-full rounded-3xl py-3 text-white font-palanquin text-lg font-semibold" />
          </form>
        </div>
        <hr className="border-1 border-gray-400 my-6 rounded-full" />
        <div className="p-2">
          <h2 className="font-bold text-xl">Coupon Code</h2>
          <p className="font-montserrat text-gray-700 text-sm my-2">Have a promo code? Enter it below and enjoy special discounts on your order. Make sure to apply it before checkout to maximize your savings!</p>
          <form onSubmit={handleCouponApply}>
            <div className="mb-6 rounded-3xl py-3 px-2 w-full text-sm text-gray-700 outline-none bg-gray-100">
              <input name="coupon" type="text" placeholder="Coupon Code" className="w-full mx-2 outline-none bg-transparent"/>
            </div>
            <input type="submit" value="Apply" className="bg-coral-red w-full rounded-full py-3 text-white font-palanquin text-lg font-semibold" />
          </form>
        </div>
        <div className="bg-[#ffd28d] rounded-2xl px-4 py-6 mt-12">
          <h2 className="font-bold text-xl">Cart Total</h2>
          <div className="flex flex-col mt-3 mb-6">
            <div className="flex justify-between">
              <p>Cart Subtotal</p><p>${subtotal}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping to {city}</p><p>${shipping}</p>
            </div>
            {
              Object.entries(discounts).map(([key, val]) => (
                <div key={key} className="flex justify-between">
                  <p>{key}</p><p className="text-white font-semibold">-${val}</p>
                </div>
              ))
            }
            <div className="flex justify-between font-semibold">
              <p>Cart Total</p><p className="text-xl">${(subtotal - totalDiscount + shipping).toFixed(2)}</p>
            </div>
          </div>
          <button className="w-full rounded-3xl bg-white p-3 mt-4 font-semibold">
            Checkout
          </button>
        </div>
    </div>
  )
}

export default SideBar;