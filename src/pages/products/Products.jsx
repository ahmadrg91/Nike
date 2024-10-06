import { products } from "../../constants";
import ProductCard from "../../components/ProductCard";
import Button from "../../components/Button";
import { faMagnifyingGlass, faSort } from "@fortawesome/free-solid-svg-icons";

const Products = () => {
  return (
    <main className="flex flex-col gap-14 relative max-container padding-x pt-24 md:padding">
        <h1 className="font-bold text-coral-red text-4xl text-center font-palanquin">All Products</h1>
        <div className="w-full flex justify-center">
          <div className="flex gap-1 items-center">
            <div className="flex items-center justify-between rounded-full py-1 pl-4 pr-1 border min-w-64 sm:w-72 md:w-80 lg:w-96">
              <input
                type="text"
                placeholder="Search in All Products"
                className="outline-none text-slate-gray dark:bg-gray-900"
              />
              <div className="flex items-center">
                <Button icon={faMagnifyingGlass} search/>
              </div>
            </div>
            <div>
                <Button icon={faSort} label="Sort" search/>
            </div>
          </div>
        </div>
        <section className="flex gap-14 w-full">
            <aside className="h-screen w-80 border border-coral-red hidden sticky top-0 lg:block">
              <ul>
                <li>
                  <h6 className="text-lg font-semibold font-">Categories:</h6>
                  
                </li>
              </ul>
            </aside>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 xl:grid-cols-4 flex-1">
                {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        </section>
    </main>
  )
}

export default Products;