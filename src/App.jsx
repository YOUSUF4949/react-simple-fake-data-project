import { useState } from 'react'
import './App.css'
import Header from './C omponents/header/Header'
import Posts from './C omponents/Main-sectiono/left-side/Posts'
import Stored_data from './C omponents/Main-sectiono/right-side/Stored_data'

function App() {

  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookMarksData = bookMark =>{
    const newBookMarksArray = [...bookMarks, bookMark]
    setBookMarks(newBookMarksArray)
  }

  const handleReadingTime = (time)=>{
    const sum = readingTime + time;
    setReadingTime(sum)
  }
  return (
    <div className="w-full lg:w-10/12 mx-auto">
      <Header></Header>
      {/* main section starts here */}
      <div className="grid grid-cols-3 gap-x-3 mt-5">
        {/* left side */}
        <div className="col-span-2 border border-red-500">
          <Posts handleBookMarksData={handleBookMarksData} handleReadingTime={handleReadingTime}></Posts>
        </div>
        {/* right side */}
        <div className="col-span-1 border border-red-500 p-3">
          <div className="p-3 bg-[#1111110D] text-center rounded-xl mb-5">
            <h2 className="text-[#6047EC] text-xl font-bold">Spent time on read : {readingTime} </h2>
          </div>
          <Stored_data bookMarks={bookMarks}></Stored_data>
        </div>
      </div>
    </div>
  )
}
export default App