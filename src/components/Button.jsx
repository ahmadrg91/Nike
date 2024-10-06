const Button = ({ label, icon, bg, text, border, fullWidth }) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-full border px-7 py-4 font-montserrat text-lg leading-none ${fullWidth && "w-full"} ${bg || "bg-coral-red"} ${text || "text-white"} ${border || "border-corel-red dark:border-gray-900"}`}
    >
      {label}
      {icon && <img src={icon} />}
    </button>
  );
};

export default Button;