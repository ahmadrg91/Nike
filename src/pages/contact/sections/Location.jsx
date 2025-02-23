const Location = () => {
  return (
    <div className="flex flex-col justify-center gap-8 md:flex-row md:gap-24">
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <h1 className="font-palanquin text-4xl font-bold">
          Find Us At <span className="text-coral-red">Our Location !</span>
        </h1>
        <p className="mt-4 break-words font-montserrat text-lg leading-normal text-slate-gray">
          Planning to visit? Our location is easy to find! Check this map for
          directions and come see us. We’d love to meet you in person!
        </p>
      </div>
      <iframe
        className="flex-1 rounded-lg shadow-3xl md:size-[600px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.126364708777!2d-122.83214610793993!3d45.50753479649318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950ec24d4da46d%3A0xa6e823d05767d2d0!2sNike%20World%20Headquarters!5e0!3m2!1sen!2s!4v1740213466932!5m2!1sen!2s"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
