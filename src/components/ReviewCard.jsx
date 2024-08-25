import { star } from "../assets/icons"

const ReviewCard = ({imgURL, name, feedback, rating}) => {
  return (
    <div className="flex flex-col items-center justify-center">
        <img src={imgURL} alt="customer" className="rounded-full w-[120px] h-[120px] object-cover"/>
        <p className="info-text mt-6 max-w-sm text-center">{feedback}</p>
        <div className="flex items-center font-montserrat justify-center gap-2.5 text-xl text-slate-gray mt-3">
            <img src={star} width={24} height={24} /> ({rating})
        </div>
        <h3 className="font-bold text-3xl mt-1 text-center font-palanquin">{name}</h3>
    </div>
  )
}

export default ReviewCard;