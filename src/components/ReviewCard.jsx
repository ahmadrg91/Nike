import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, name, feedback, rating }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src={imgURL}
        alt="customer"
        className="h-[120px] w-[120px] rounded-full object-cover"
      />
      <p className="info-text mt-6 max-w-sm text-center">{feedback}</p>
      <div className="mt-3 flex items-center justify-center gap-2.5 font-montserrat text-xl text-slate-gray">
        <img
          src={star}
          width={24}
          height={24}
        />{" "}
        ({rating})
      </div>
      <h3 className="mt-1 text-center font-palanquin text-3xl font-bold">
        {name}
      </h3>
    </div>
  );
};

export default ReviewCard;
