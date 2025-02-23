const FloatingLabelInput = ({
  label,
  type,
  register,
  name,
  watch,
  validation,
  isTextarea,
  errors,
}) => {
  const hasText = watch(name)?.length > 0;

  return (
    <div className="w-full">
      <div className="relative w-full">
        {isTextarea ? (
          <textarea
            id={name}
            {...register(name, validation)}
            className="peer w-full resize-none rounded-md border p-3 focus:border-coral-red focus:outline-none dark:border-gray-700 dark:bg-gray-900"
            rows="4"
          />
        ) : (
          <input
            type={type}
            autoComplete="disabled"
            id={name}
            {...register(name, validation)}
            className="peer w-full rounded-md border p-3 focus:border-coral-red focus:outline-none dark:border-gray-700 dark:bg-gray-900"
          />
        )}
        <label
          htmlFor={name}
          className={`absolute left-3 bg-white px-1 transition-all delay-100 ease-in ${isTextarea && !hasText ? "-translate-y-14 peer-focus:-translate-y-1/2" : "-translate-y-1/2"} ${
            hasText ? "top-0 text-xs text-coral-red" : "top-1/2 text-gray-500"
          } peer-focus:top-0 peer-focus:text-xs peer-focus:text-coral-red dark:bg-gray-900`}
        >
          {label}
        </label>
      </div>
      {errors && (
        <p className="ml-2 mt-1 text-sm text-red-500">{errors.message}</p>
      )}
    </div>
  );
};

export default FloatingLabelInput;
