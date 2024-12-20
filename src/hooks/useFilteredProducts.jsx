import { useEffect, useState } from "react";

export const useFilteredProducts = (products, searchTerm, filters) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const newProducts = products.filter((product) => {
      const searchMatch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const priceMatch =
        product.price >= filters.price.currentValues[0] &&
        product.price <= filters.price.currentValues[1];
      const genderMatch =
        filters.gender.currentValues.length === 0 ||
        filters.gender.currentValues.includes(product.gender);
      const catMatch =
        filters.category.currentValues.length === 0 ||
        filters.category.currentValues.includes(product.category);
      const sportMatch =
        filters.sport.currentValues.length === 0 ||
        filters.sport.currentValues.includes(product.sport);
      const colorMatch =
        filters.color.currentValues.length === 0 ||
        filters.color.currentValues.includes(product.color);
      const ratingsMatch =
        filters.ratings.currentValues.length === 0 ||
        product.ratings >= filters.ratings.currentValues[0];

      return (
        searchMatch &&
        priceMatch &&
        genderMatch &&
        catMatch &&
        sportMatch &&
        colorMatch &&
        ratingsMatch
      );
    });

    setFilteredProducts(newProducts);

    console.log("chla");
  }, [products, searchTerm, filters]);

  return filteredProducts;
};
