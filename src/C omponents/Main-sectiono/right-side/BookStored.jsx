



const BookStored =({bookMark}) =>{
    const {title} = bookMark;
    return(
        <div className="py-5 px-3 bg-[#FFFFFF] mb-3 rounded-xl">
            <h2 className="text-xl font-semibold">{title} </h2>
        </div>
    )
}

export default BookStored;