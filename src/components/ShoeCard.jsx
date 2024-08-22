const ShoeCard = ({ shoe, currentShoe, changeCurrentShoe }) => {

  const handleClick = () => {
    if (currentShoe !== shoe.bigShoe)
        changeCurrentShoe(shoe)
  }
    
  return (
    <div 
        className={`
            ${currentShoe === shoe.bigShoe ?
                "border-coral-red" :
                "border-transparent"} 
            cursor-pointer max-sm:flex-1 rounded-xl border-2`} 
        onClick={handleClick}>
        <div className="flex justify-center items-center bg-card bg-cover bg-center sm:h-40 sm:w-40 max-sm:p-4">
            <img
                src={shoe.thumbnail}
                alt="shoes collection"
                width={127}
                height={103}
                className="object-contain"
            />
        </div>
    </div>
  )
}

export default ShoeCard;