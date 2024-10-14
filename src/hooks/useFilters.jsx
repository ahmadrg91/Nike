import { useState } from "react";

export const useFilters = () => {
  const [filters, setFilters] = useState({
    category: {
      options: ["Shoes", "Clothing", "Accessories"],
      currentValues: [],
    },
    gender: {
      options: ["Man", "Woman"],
      currentValues: [],
    },
    color: {
      options: ["Black", "Red", "Yellow", "White"],
      currentValues: [],
    },
    sport: {
      options: ["Running", "Football", "Basketball"],
      currentValues: [],
    },
    price: {
      options: [50, 1000],
      currentValues: [100, 900],
    },
    ratings: {
      options: [5, 4, 3, 2, 1],
      currentValues: [],
    },
  });

  return { filters, setFilters };
};
