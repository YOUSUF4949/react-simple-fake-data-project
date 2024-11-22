import Post from "../left-side/Post"
import BookStored from "./bookStored"

export default function Stored_data({bookMarks}){

    return (
        <div className="bg-[#1111110D] p-4 rounded-xl border-[#6047EC]">
            <h2 className="text-xl font-bold text-[#111111] mb-3">Stored Data : {bookMarks.length}</h2>
            <div>
                {
                    bookMarks.map(bookMark => <BookStored key={bookMark.id} bookMark={bookMark}></BookStored>)
                }
            </div>
        </div>
    )
}

