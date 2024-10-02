const ShoeCard = ({ shoeData, bigShoeImg, changeBigShoeImage }) => {
  const handleClick = () => {
    if (shoeData.bigShoe !== bigShoeImg) {
      changeBigShoeImage(shoeData.bigShoe)
    }
  }

  return (
    <div
      className={`border-2 rounded-xl cursor-pointer nax-sm:flex-1 ${
        bigShoeImg === shoeData.bigShoe ? 'border-coral-red' : ''
      }`}
      onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img
          src={shoeData.thumbnail}
          alt='shoe image'
          width='127'
          height='103'
          className='object-contain'
        />
      </div>
    </div>
  )
}

export default ShoeCard
