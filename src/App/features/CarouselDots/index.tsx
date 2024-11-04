interface ICarouselDots {
    currentValue: number
    itemsQuantity: number
    handleClick(value: number): void
}

const CarouselDots = ({ currentValue, itemsQuantity, handleClick }: ICarouselDots) => {
    return (
        <div className="w-[144px] h-2 flex justify-between">
            { (new Array(itemsQuantity)).fill(0).map((_, id) => {
                return (
                    <div
                        onClick={ () => handleClick(id) }
                        className={`w-8 h-2 rounded-[4px] bg-accent-blue cursor-pointer 
                            ${ id === currentValue ? '' : 'opacity-[8%]' }`}
                        key={ id }
                    ></div>
                )
            }) }
        </div>
    )
}

export default CarouselDots