const FloatingLabelInput = ({ label, type, register, name, watch, validation, isTextarea, errors}) => {
  const hasText = watch(name)?.length > 0;

  return (
    <div className="relative w-full">
      {isTextarea ? (
        <textarea
          id={name}
          {...register(name, validation)}
          className="peer border p-3 w-full rounded-md focus:border-coral-red focus:outline-none resize-none"
          rows="4"
        />
      ) : (
        <input
          type={type}
          autoComplete="disabled"
          id={name}
          {...register(name, validation)}
          className="peer border p-3 w-full rounded-md focus:border-coral-red focus:outline-none"
        />
      )}
      <label
        htmlFor={name}
        className={`absolute left-3 bg-white px-1 transition-all delay-100 ease-in ${isTextarea && !(hasText) ? "-translate-y-14 peer-focus:-translate-y-1/2" : "-translate-y-1/2"}  ${
          hasText ? "top-0 text-xs text-coral-red" : "top-1/2  text-gray-500"
        } peer-focus:top-0 peer-focus:text-xs peer-focus:text-coral-red`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;