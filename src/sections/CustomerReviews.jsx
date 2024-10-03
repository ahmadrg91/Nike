import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h2 className="text-4xl font-bold font-palanquin m-auto text-center text-white">What Our <span className="text-coral-red">Customers</span> Say?</h2>
      <p className="info-text lg:max-w-lg mt-6 m-auto text-center">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      <div className="flex items-center justify-evenly max-xl:flex-col mt-24 gap-14">
        { reviews.map(review => <ReviewCard key={review.customerName} name={review.customerName} rating={review.rating} feedback={review.feedback} imgURL={review.imgURL}/>) }
      </div>
    </section>
  )
}

export default CustomerReviews;
