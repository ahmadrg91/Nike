const ShoeCard = ({ shoe, currentShoe, changeCurrentShoe }) => {
  const handleClick = () => {
    if (currentShoe !== shoe.bigShoe) changeCurrentShoe(shoe);
  };

  return (
    <div
      className={` ${
        currentShoe === shoe.bigShoe ? "border-coral-red" : "border-transparent"
      } cursor-pointer rounded-xl border-2 max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center rounded-xl bg-card bg-cover bg-center max-sm:p-4 sm:h-40 sm:w-40 dark:bg-d-card">
        <img
          src={shoe.thumbnail}
          alt="shoes collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
