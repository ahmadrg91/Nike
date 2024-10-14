import { aboutUsImage } from "../../assets/images";
import Button from "../../components/Button";
import { socialMedia } from "../../constants";

const About = () => {
  return (
    <main className="dark:bg-gray-900 dark:text-slate-200">
      <section className="padding-t flex flex-col flex-wrap items-center">
        <h1 className="font-palanquin text-4xl font-bold text-coral-red">
          Who We Are ?
        </h1>
        <div className="flex gap-10 p-28">
          <div className="flex-1">
            <img
              src={aboutUsImage}
              className="rounded-sm object-contain brightness-75"
            />
          </div>
          <div className="flex flex-1 flex-col items-start gap-8">
            <p className="flex flex-col justify-center font-montserrat text-lg tracking-widest text-slate-gray">
              <span className="block">
                At Nike, we believe in the power of sport to move the world
                forward. Founded in 1964, we have been pushing the boundaries of
                innovation, performance, and style to create footwear, apparel,
                and gear that empower athletes of all levels. Whether you're a
                professional competitor or just starting your fitness journey,
                Nike is here to inspire and support your every step.
              </span>
              <span className="block py-3">
                We are dedicated to delivering cutting-edge products designed
                with sustainability and quality in mind. Our passion for
                innovation drives us to craft performance-enhancing products
                while keeping our impact on the planet minimal.
              </span>
              <span className="block">
                Join us as we continue to inspire, motivate, and unlock the
                athlete in everyone. Just do it.
              </span>
            </p>
            <Button label="Join Us" fullWidth={false} />
          </div>
        </div>
      </section>
      <section className="flex flex-col flex-wrap items-center">
        <h1 className="font-palanquin text-4xl font-bold text-coral-red">
          Connect With Us
        </h1>
        <ul className="padding-y flex gap-10">
          {socialMedia.map((social) => (
            <a href={social.link}>
              <img src={social.src} alt={social.alt} width={50} />
            </a>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default About;
