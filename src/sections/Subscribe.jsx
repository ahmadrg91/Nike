import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section id="contact-us" className="flex max-lg:flex-col max-container items-center justify-between gap-10">
      <h2 className="text-4xl font-bold font-palanquin leading-[68px] lg:max-w-md">
        Sign Up for <span className="text-coral-red">Updates</span> &amp; Newsletter
      </h2>
      <div className="w-full lg:max-w-[40%] items-center flex max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="email" placeholder="subscribe@nike.com" className="input"/>
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe;
