import { reviews } from "../../../constants";
import ReviewCard from "../../../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h2 className="m-auto text-center font-palanquin text-4xl font-bold dark:text-white">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h2>
      <p className="info-text m-auto mt-6 text-center lg:max-w-lg">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex items-center justify-evenly gap-14 max-xl:flex-col">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            name={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
            imgURL={review.imgURL}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
