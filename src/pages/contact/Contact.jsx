import Connect from "./sections/Connect";
import Location from "./sections/Location";
import ContactForm from "./sections/ContactForm";

const Contact = () => {
    return (
        <main className="mt-24">
            <ContactForm />
            <Connect />
            <Location />
        </main>
    )
}

export default Contact;