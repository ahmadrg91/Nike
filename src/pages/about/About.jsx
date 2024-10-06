import { aboutUsImage } from "../../assets/images"
import Button from "../../components/Button";
import { socialMedia } from "../../constants";

const About = () => {
  return (
    <main className="dark:bg-gray-900 dark:text-slate-200">
        <section className="flex flex-col padding-t items-center flex-wrap">
            <h1 className="text-4xl font-palanquin text-coral-red font-bold">Who We Are ?</h1>
            <div className="flex gap-10 p-28">
                <div className="flex-1">
                    <img
                        src={aboutUsImage}
                        className="object-contain rounded-sm brightness-75"
                    />
                </div>
                <div className="flex-1 flex gap-8 flex-col items-start">
                    <p className="text-lg justify-center flex flex-col text-slate-gray font-montserrat tracking-widest">
                        <span className="block">At Nike, we believe in the power of sport to move the world forward. Founded in 1964, we have been pushing the boundaries of innovation, performance, and style to create footwear, apparel, and gear that empower athletes of all levels. Whether you're a professional competitor or just starting your fitness journey, Nike is here to inspire and support your every step.</span>
                        <span className="block py-3">We are dedicated to delivering cutting-edge products designed with sustainability and quality in mind. Our passion for innovation drives us to craft performance-enhancing products while keeping our impact on the planet minimal.</span>
                        <span className="block">Join us as we continue to inspire, motivate, and unlock the athlete in everyone. Just do it.</span>
                    </p>
                    <Button label="Join Us" fullWidth={false}/>
                </div>
            </div>
        </section>
        <section className="flex flex-col items-center flex-wrap">
            <h1 className="text-4xl font-palanquin text-coral-red font-bold">Connect With Us</h1>
            <ul className="flex gap-10 padding-y">
                {socialMedia.map((social) => (
                    <a href={social.link}>
                        <img src={social.src} alt={social.alt} width={50} />
                    </a>
                ))}
            </ul>
        </section>
    </main>
  )
}

export default About;