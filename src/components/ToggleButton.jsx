const ToggleButton = ({ label, selected, onClick }) => {

  const handleClick = (e) => {
    onClick && onClick(e);
  };

  return (
    <button
      onClick={handleClick}
      className={`rounded border-2 px-3 py-1 font-montserrat transition-all ${selected ? "border-[#FFDAD6] bg-[#FFDAD6] text-[#E01600]" : "border-slate-200 text-slate-400"} font-semibold`}
    >
      {label}
    </button>
  );
};

export default ToggleButton;