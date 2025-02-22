const ContactCard = ({ imgURL, label, subtext }) => {
    return (
      <div className="flex-1 w-full rounded-[20px] px-5 py-8 shadow-3xl">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-coral-red">
          <img src={imgURL} width={24} height={24} />
        </div>
        <h3 className="mt-2 font-palanquin text-3xl font-bold leading-normal">
          {label}
        </h3>
        <p className="mt-1 break-words font-montserrat text-lg leading-normal text-slate-gray">
          {subtext}
        </p>
      </div>
    );
  };
  
  export default ContactCard;
  