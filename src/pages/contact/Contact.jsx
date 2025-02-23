import Connect from "./sections/Connect";
import Location from "./sections/Location";
import ContactForm from "./sections/ContactForm";

const Contact = () => {
    return (
        <main className="my-24 mx-2 md:m-24 flex flex-col gap-24">
            <ContactForm />
            <Connect />
            <Location />
        </main>
    )
}

export default Contact;