import Connect from "./sections/Connect";
import Location from "./sections/Location";
import ContactForm from "./sections/ContactForm";

const Contact = () => {
  return (
    <main className="mx-2 my-24 flex flex-col gap-24 md:m-24">
      <ContactForm />
      <Connect />
      <Location />
    </main>
  );
};

export default Contact;
