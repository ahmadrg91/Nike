import ReactSlider from "react-slider";
import Filter from "./Filter";
import { useFilters } from "../../../hooks/useFilters";

const FilterBar = ({ filters, setFilters }) => {

  const handleSlider = (value) => {
    setFilters((prevState) => ({
      ...prevState,
      price: { ...prevState.price, currentValues: value },
    }));
  };

  return (
    <aside className="sticky top-0 hidden h-fit max-h-screen min-h-fit w-80 overflow-scroll rounded border p-4 lg:block">
      <h6 className="text-center font-palanquin text-2xl font-bold text-slate-800">
        Filters
      </h6>
      <div className="flex flex-col gap-y-6">
        <div className="mt-6 flex flex-col">
          <h6 className="text-lg font-semibold text-slate-900 opacity-80">
            Price
          </h6>
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="thumb"
            trackClassName="track"
            min={filters.price.options[0]}
            max={filters.price.options[1]}
            value={filters.price.currentValues}
            ariaLabel={["Lower thumb", "Upper thumb"]}
            pearling
            minDistance={0}
            step={50}
            onChange={handleSlider}
            renderThumb={(props, state) => (
              <div {...props}>
                <div className="price-label">${state.valueNow}</div>
              </div>
            )}
          />
          <div className="flex justify-between pt-1">
            <span className="text-slate-500">$50</span>
            <span className="text-slate-500">$1000</span>
          </div>
        </div>
        {Object.entries(filters).map(
          ([key, value]) =>
            key !== "price" && (
              <Filter key={key} title={key} options={value.options} filters={filters} setFilters={setFilters} />
            ),
        )}
      </div>
    </aside>
  );
};

export default FilterBar;
