import ToggleButton from "../../../components/ToggleButton";
import { capitalize } from "../../../utils";

const Filter = ({ title, options, filters, setFilters }) => {

  const handleClick = (e) => {
    const value = title === "ratings" ? parseInt(e.target.innerText, 10) : e.target.innerText.toLowerCase();

    if (value === "all") {
      setFilters((prevState) => ({
        ...prevState,
        [title]: {
          ...prevState[title],
          currentValues: [],
        }
      }));
    } else {
      setFilters((prevState) => ({
        ...prevState,
        [title]: {
          ...prevState[title],
          currentValues: prevState[title].currentValues.includes(value)
            ? prevState[title].currentValues.filter((v) => v !== value)
            : [...prevState[title].currentValues, value],
        },
      }));
    }

    if (title === "ratings") {filters[title].currentValues.sort((a, b) => a - b)}
  };

  return (
    <div>
      <h6 className="text-lg font-semibold text-slate-900 opacity-80">
        {capitalize(title)}
      </h6>
      <div className="mt-4 flex flex-wrap gap-2">
        <ToggleButton
          label="All"
          selected={filters[title].currentValues.length === 0}
          onClick={handleClick}
        />
        {options.map((option) => (
          <ToggleButton 
            key={option} 
            label={option} 
            onClick={handleClick} 
            selected={filters[title].currentValues.includes(title === "ratings" ? option : option.toLowerCase())} 
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;