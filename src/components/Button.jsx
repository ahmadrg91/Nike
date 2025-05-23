import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({
  label,
  icon,
  bg,
  text,
  border,
  fullWidth,
  search,
  onClick,
  submit,
}) => {
  return (
    <button
      type={submit && "submit"}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-full border ${search ? "px-3 py-3" : "px-7 py-4"} font-montserrat text-lg leading-none ${fullWidth && "w-full"} ${bg || "bg-coral-red"} ${text || "text-slate-200"} ${border || "border-corel-red dark:border-gray-900"}`}
    >
      {label}
      {icon && <FontAwesomeIcon icon={icon} />}
    </button>
  );
};

export default Button;
