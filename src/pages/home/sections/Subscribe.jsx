import Button from "../../../components/Button";

const Subscribe = () => {
  return (
    <section
      id="about-us"
      className="max-container flex items-center justify-between gap-10 max-lg:flex-col"
    >
      <h2 className="font-palanquin text-4xl font-bold leading-[68px] lg:max-w-md">
        Sign Up for <span className="text-coral-red">Updates</span> &amp;
        Newsletter
      </h2>
      <div className="flex w-full items-center gap-5 rounded-full p-2.5 max-sm:flex-col sm:border sm:border-slate-gray lg:max-w-[40%]">
        <input
          type="email"
          placeholder="subscribe@nike.com"
          className="input dark:bg-gray-900"
        />
        <div className="flex items-center max-sm:w-full max-sm:justify-end">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
