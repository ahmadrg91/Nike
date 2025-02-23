import ContactCard from "../../../components/ContactCard";
import truckFast from "../../../assets/icons/truck-fast.svg";
import shieldTick from "../../../assets/icons/shield-tick.svg";

const Connect = () => {
  const contacts = [
    {
      imgURL: truckFast,
      label: "Email",
      subtext:
        "Reach us anytime at support@company.com for inquiries or assistance.",
    },
    {
      imgURL: shieldTick,
      label: "Phone Number",
      subtext: "Call us at +123 456 7890 for immediate support or questions.",
    },
  ];

  return (
    <div className="flex flex-col justify-center gap-8 md:flex-row-reverse md:gap-24">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <h1 className="font-palanquin text-4xl font-bold">
          <span className="text-coral-red">Connect</span> With Us !
        </h1>
        <p className="mt-4 break-words font-montserrat text-lg leading-normal text-slate-gray">
          Need to reach us directly? Whether you have a question, need support,
          or just want to chat, you can contact us via email or phone. We're
          here to assist you and look forward to hearing from you!
        </p>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-4">
        {contacts.map((contact) => (
          <ContactCard key={contact.label} {...contact} />
        ))}
      </div>
    </div>
  );
};

export default Connect;
