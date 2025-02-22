import { useState } from "react";
import Button from "../../components/Button"
import ContactCard from "../../components/ContactCard";
import truckFast from "../../assets/icons/truck-fast.svg";
import shieldTick from "../../assets/icons/shield-tick.svg";
import support from "../../assets/icons/support.svg";


const Contact = () => {

    const contacts = [
        {
          imgURL: truckFast,
          label: "Email",
          subtext: "Reach us anytime at support@company.com for inquiries or assistance.",
        },
        {
          imgURL: shieldTick,
          label: "Phone Number",
          subtext: "Call us at +123 456 7890 for immediate support or questions.",
        },
        {
          imgURL: support,
          label: "Address",
          subtext: "Visit us at 123 Business St, City, Country, 45678 for in-person assistance.",
        },
      ]

    return (
        <main className="mt-24">
            <h1 className="text-center font-palanquin text-4xl text-coral-red font-bold">We'd love to hear from you !</h1>
            <div className="flex justify-between m-24">
                <div className="">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.126364708777!2d-122.83214610793993!3d45.50753479649318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950ec24d4da46d%3A0xa6e823d05767d2d0!2sNike%20World%20Headquarters!5e0!3m2!1sen!2s!4v1740213466932!5m2!1sen!2s" width="600" height="600" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="flex w-[40%]">
                    <form className="flex flex-col gap-4 w-full h-full shadow-xl px-8 pt-12 rounded-lg">
                        <h2 className="text-3xl font-palanquin font-bold text-coral-red ">Let's get in touch !</h2>
                        <input type="text" name="name" placeholder="NAME" className="border p-3 bg-gray-100"/>
                        <input type="email" name="email" placeholder="EMAIL" className="border p-3 bg-gray-100"/>
                        <textarea placeholder="Message" className="p-3 bg-gray-100 border" rows="10"></textarea>
                        <Button label="Send" fullWidth submit/>
                    </form>
                </div>
            </div>
            <div className="m-24">
                <h2 className="text-center text-3xl font-palanquin font-bold text-coral-red ">Contact Information</h2>                
                <div className="flex justify-between gap-4 mt-12">
                    {
                        contacts.map(service => (
                            <ContactCard key={service.label} {...service} />
                        ))
                    }
                </div>
            </div>
        </main>
    )
}

export default Contact;