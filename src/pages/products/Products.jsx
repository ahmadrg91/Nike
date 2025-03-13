import { products } from "../../constants";
import ProductCard from "../../components/ProductCard";
import Button from "../../components/Button";
import SearchBar from "./sections/SearchBar";
import FilterBar from "./sections/FilterBar";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useFilteredProducts } from "../../hooks/useFilteredProducts";
import { useFilters } from "../../hooks/useFilters";
import LoadingSpinner from "../../components/LoadingSpinner";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { filters, setFilters } = useFilters();
  const filteredProducts = useFilteredProducts(products, searchTerm, filters);
  
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 800);
  }, [filteredProducts]);

  return (
    <main className="max-container padding-x md:padding relative flex flex-col gap-14 pt-24 dark:bg-gray-900 dark:text-slate-200">
      <h1 className="text-center font-palanquin text-4xl font-bold">
        Explore <span className="text-coral-red">Premium Products</span>
      </h1>
      <div className="flex w-full justify-center gap-2">
        <SearchBar setSearchTerm={setSearchTerm} />
        <Button icon={faSort} label="Sort" search />
      </div>
      <section className="flex w-full gap-14">
        <FilterBar filters={filters} setFilters={setFilters} />
        {isLoading ? (
          <LoadingSpinner />
        ) : filteredProducts.length !== 0 ? (
          <ProductList products={filteredProducts} />
        ) : (
          <h1 className="text-center text-xl font-bold">
            No Product Matches Your Search
          </h1>
        )}
      </section>
    </main>
  );
};

export default Products;

const ProductList = ({ products }) => (
  <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3 xl:grid-cols-4">
    {products.map((product, index) => (
      <ProductCard key={index} {...product} />
    ))}
  </div>
);
