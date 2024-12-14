import { products } from '../../constants';
import { useCart } from '../../context/CartContext'

const Cart = () => {
    let { cart, addToCart, removeFromCart } = useCart();
    console.log(cart);

    cart = products.filter(product => cart.includes(product.name));

  return (
    <main>
        <div>
            <ul className="rounded-lg flex shadow-xl w-[75%] flex-col gap-10 mt-80 mx-24 p-12">
                <li className="flex justify-between font-bold">
                    <div>
                        <div>
                            Product
                        </div>
                    </div>         
                    <div >
                        Price
                    </div>
                    <div>
                        Quantity
                    </div>
                    <div>
                        Total Price
                    </div>  
                </li>
                {
                    cart.map(product => 
                        <li className="flex justify-between">
                            <div className='flex gap-10'>
                                <img src={product.imgURL}
                                    width={187}
                                    height={287}
                                    className="object-contain border rounded-lg"
                                />
                                <div className='flex flex-col justify-center gap-10'>
                                    <h2 className="text-xl font-semibold font-montserrat">{product.name}</h2>
                                    <div className='flex flex-col gap-2 text-sm font-medium'>
                                        <div>
                                            <span className='text-gray-500'>Color</span>
                                            <span className='font-extrabold'> &middot; </span>
                                            <span> Black</span>
                                        </div>
                                        <div>
                                            <span className='text-gray-500'>Size </span>
                                            <span className='font-extrabold'> &middot; </span>
                                            <span className='font-medium font-palanquin'> 42</span>
                                        </div>
                                    </div>
                                </div>
                            </div>         
                            <div className='font-semibold flex items-center'>
                                ${product.price}
                            </div>
                            <div className='flex items-center'>
                                <button className='border-2 size-6 rounded-md flex items-center justify-center text-gray-600 font-bold'>-</button>
                                <span className='mx-5'>3</span>
                                <button className='border-2 size-6 rounded-md flex items-center justify-center text-gray-600 font-bold'>+</button>
                            </div>
                            <div className='font-semibold flex items-center text-coral-red'>
                                ${(product.price * 3).toFixed(2)}
                            </div>  
                        </li>
                    )
                }
            </ul>
        </div>
    </main>
  )
}

export default Cart;