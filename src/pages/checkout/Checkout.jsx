import { truck, locationIcon } from "../../assets/icons";
import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { products } from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import CartItemCheckout from "../../components/CartItemCheckout";
import { capitalize } from "../../utils"


function Checkout() {
    const [ method, setMethod ] = useState('delivery');
    const { cart, addToCart, removeFromCart } = useCart();
    const [ currentTab, setCurrentTab ] = useState('delivery');
    const [subtotal, setSubtotal] = useState();

    const itemsInCart = cart.map((cartItem) => {
        let product = products.find((product) => product.name == cartItem.name);
        return { ...product, quantity: cartItem.quantity };
      });
    
    useEffect(() => {
        let sum = 0;
        itemsInCart.forEach((item) => {
          sum += item.quantity * item.price;
        });
        setSubtotal(sum.toFixed(2));
      }, [itemsInCart]);

    const submitDelivery = (e) => {
        e.preventDefault();
        setCurrentTab('shipping');
    }

    const submitShipping = (e) => {
        e.preventDefault();
        setCurrentTab('payment');
    }

    const submitPayment = (e) => {
        e.preventDefault();

    }

    const formatCardNumber = (e) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 16);
        const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
        e.target.value = formattedValue;
    }

  return (
    <main className="padding flex justify-between">
        <section className="w-[65%]">
            <h1 className="text-3xl font-palanquin my-8">Delivery {
                    (currentTab === 'shipping' || currentTab === 'payment') && <span className="text-2xl ml-2"><FontAwesomeIcon icon={faCheck} /></span>
                }</h1>
            <div className={`${currentTab === 'delivery' ? 'block' : 'hidden'}`}>
                <form onSubmit={submitDelivery}> 
                    <p className="text-lg text-gray-800">
                        How would you like your order to be delivered ?
                    </p>
                    <div className="flex gap-4 my-4">
                        <button className={`w-[50%] font-montserrat h-14 items-center justify-center border-2 flex gap-1 py-2 rounded-md ${method === 'delivery' && "border-gray-500"}`}
                            onClick={() => setMethod('delivery')}
                        >
                            <img 
                                src={truck}
                                className="size-5"
                            />
                            Delivery</button>
                        <button className={`w-[50%] h-14 font-montserrat items-center justify-center border-2 flex gap-1 py-2 rounded-md ${method === 'pickup' && "border-gray-500"}`}
                            onClick={() => setMethod('pickup')}
                        >
                            <img 
                                src={locationIcon}
                                className="size-5"
                            />
                            Pick-Up</button>
                    </div>
                    <div className="flex gap-4 my-4">
                        <input type="text"
                            required
                            name="firstName"
                            placeholder="First Name"
                            className="w-[50%] font-montserrat outline-none border-2 rounded-md pl-2 h-14 border-gray-200 focus:border-gray-700"
                        />
                        <input type="text" 
                            name="lastName"
                            placeholder="Last Name"
                            className="w-[50%] font-montserrat outline-none border-2 rounded-md pl-2 h-14 border-gray-200 focus:border-gray-700"    
                        />
                    </div>
                    <div>
                        <textarea 
                            name="address"
                            placeholder="Enter your address"
                            rows={5}
                            className="w-full py-2 font-montserrat outline-none rounded-md pl-2 border-2 border-gray-200 focus:border-gray-700"
                        >

                        </textarea>
                    </div>
                    <div className="flex gap-4 my-4">
                        <input type="email" 
                            required
                            name="email"
                            placeholder="Email"
                            className="w-[50%] font-montserrat outline-none border-2 rounded-md pl-2 h-14 border-gray-200 focus:border-gray-700"
                        />
                        <input type="tel" 
                            required
                            name="phone"
                            placeholder="Phone Number"
                            className="w-[50%] font-montserrat outline-none border-2 rounded-md pl-2 h-14 border-gray-200 focus:border-gray-700"    
                        />
                    </div>
                    <div className="flex w-full justify-end mt-12">
                        <input value={"Save & Continue"} type="submit" className="rounded-full border py-4 disabled:opacity-80 disabled:cursor-not-allowed text-lg px-6 bg-coral-red text-gray-50 font-montserrat">
                        </input>
                    </div>
                </form>
            </div>
            <hr className="my-12"/>
            <h1 className="text-3xl font-palanquin my-8">Shipping {
                    currentTab == 'payment' && <span className="text-2xl ml-2"><FontAwesomeIcon icon={faCheck} /></span>
                }</h1>
            <div className={`${currentTab === 'shipping' ? 'block' : 'hidden'}`}>
                <form onSubmit={submitShipping}>
                    <div className="flex gap-4 my-4">
                        <input 
                            type="text" 
                            name="shippingFirstName" 
                            placeholder="First Name" 
                            required 
                            className="w-[50%] font-montserrat outline-none border-2 rounded-md pl-2 h-14 border-gray-200 focus:border-gray-700"
                        />
                        <input 
                            type="text" 
                            name="shippingLastName" 
                            placeholder="Last Name" 
                            required 
                            className="w-[50%] font-montserrat outline-none border-2 rounded-md pl-2 h-14 border-gray-200 focus:border-gray-700"
                        />
                    </div>
                    <div>
                        <textarea 
                            name="shippingAddress" 
                            placeholder="Enter your shipping address" 
                            rows={5} 
                            required 
                            className="w-full py-2 font-montserrat outline-none rounded-md pl-2 border-2 border-gray-200 focus:border-gray-700"
                        />
                    </div>
                    <div className="flex gap-4 my-4">
                        <input 
                            type="text" 
                            name="city" 
                            placeholder="City" 
                            required 
                            className="w-[50%] font-montserrat outline-none border-2 rounded-md pl-2 h-14 border-gray-200 focus:border-gray-700"
                        />
                        <input 
                            type="text" 
                            name="state" 
                            placeholder="State" 
                            required 
                            className="w-[50%] font-montserrat outline-none border-2 rounded-md pl-2 h-14 border-gray-200 focus:border-gray-700"
                        />
                    </div>
                    <div className="flex gap-4 my-4">
                        <input 
                            type="text" 
                            name="zipCode" 
                            placeholder="ZIP Code" 
                            pattern="\d{5}" 
                            maxLength={5} 
                            required 
                            className="w-[50%] font-montserrat outline-none border-2 rounded-md pl-2 h-14 border-gray-200 focus:border-gray-700"
                        />
                        <input 
                            type="tel" 
                            name="phone" 
                            placeholder="Phone Number" 
                            required 
                            className="w-[50%] font-montserrat outline-none border-2 rounded-md pl-2 h-14 border-gray-200 focus:border-gray-700"
                        />
                    </div>
                    <div className="flex w-full justify-end mt-12">
                        <input value={"Save & Continue"} type="submit" className="rounded-full border py-4 disabled:opacity-80 disabled:cursor-not-allowed text-lg px-6 bg-coral-red text-gray-50 font-montserrat">
                        </input>
                    </div>
                </form>
            </div>
            <hr className="my-12"/>
            <h1 className="text-3xl font-palanquin my-8">Payment</h1>
            <div className={`${currentTab === 'payment' ? 'block' : 'hidden'}`}>
                <form onSubmit={submitPayment}>
                    <div>
                        <div className="flex gap-4 my-4">
                            <input 
                                type="text" 
                                name="cardHolderName" 
                                placeholder="Cardholder Name" 
                                required 
                                className="w-[50%] font-montserrat outline-none border-2 rounded-md pl-2 h-14 border-gray-200 focus:border-gray-700"
                            />
                            <input 
                                type="text" 
                                name="expiryDate" 
                                placeholder="MM/YY" 
                                pattern="\d{2}/\d{2}" 
                                maxLength={5} 
                                required 
                                className="w-[50%] font-montserrat outline-none border-2 rounded-md pl-2 h-14 border-gray-200 focus:border-gray-700"
                            />
                        </div>
                        <div className="flex gap-4 my-4">
                            <input 
                                type="text" 
                                name="cvv" 
                                placeholder="CVV" 
                                pattern="\d{3}" 
                                maxLength={3} 
                                required 
                                className="w-[50%] font-montserrat outline-none border-2 rounded-md pl-2 h-14 border-gray-200 focus:border-gray-700"
                            />
                            <input 
                                type="text" 
                                name="zipCode" 
                                placeholder="ZIP Code" 
                                pattern="\d{5}" 
                                maxLength={5} 
                                required 
                                className="w-[50%] font-montserrat outline-none border-2 rounded-md pl-2 h-14 border-gray-200 focus:border-gray-700"
                            />
                        </div>
                        <input 
                            type="text" 
                            name="cardNumber" 
                            placeholder="1234 5678 9012 3456" 
                            maxLength={19} 
                            required 
                            onInput={formatCardNumber} 
                            className="w-full font-montserrat outline-none border-2 rounded-md pl-2 h-14 border-gray-200 focus:border-gray-700"
                        />
                    </div>
                    <div className="flex w-full justify-end mt-12">
                        <input value={"Save & Continue"} type="submit" className="rounded-full border py-4 disabled:opacity-80 disabled:cursor-not-allowed text-lg px-6 bg-coral-red text-gray-50 font-montserrat">
                        </input>
                    </div>
                </form>
            </div>

        </section>
        <section className="w-[30%]">
            <h1 className="text-2xl font-palanquin my-10">In Your Cart</h1>
            <div className="flex flex-col gap-4">
                {
                    itemsInCart.map(product => (
                        <CartItemCheckout 
                            key={product.name}
                            properties={{
                            Color: capitalize(product.color),
                            Size: product.size,
                            }}
                            {...product}
                        />
                    ))
                }
                <div>
                    <p className="flex justify-between gap-16 font-montserrat mt-8">
                        <span>Subtotal </span>
                        <span>${subtotal}</span>
                    </p>
                    <p className="flex justify-between gap-16 font-montserrat mt-2">
                        <span>Estimated Taxes </span>
                        <span>$9.99</span>
                    </p>
                    <p className="flex justify-between gap-16 font-montserrat mt-2">
                        <span>Discount </span>
                        <span>-$1.99</span>
                    </p>
                    <hr className="mt-4"/>
                    <p className="flex justify-between gap-16 font-montserrat my-4 font-semibold">
                        <span>Order Total </span>
                        <span>${Number(subtotal) + 8}</span>
                    </p>
                    <hr/>
                </div>
                
            </div>
        </section>
    </main>
  )
}

export default Checkout;
