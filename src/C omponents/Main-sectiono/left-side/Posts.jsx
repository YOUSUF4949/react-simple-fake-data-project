import { useEffect } from "react"
import { useState } from "react"
import Post from "./Post"



export default function Posts({handleBookMarksData}){
    const [postData, setPostData] = useState([])
    useEffect(()=>{
        fetch('fake_data.json')
        .then(res => res.json())
        .then(post =>{
            setPostData(post)
        })
    })
    return(
        <div>
            <div className="p-3"> 
                {
                    postData.map(data => <Post key={data.id} data={data} handleBookMarksData={handleBookMarksData}></Post>)
                }
            </div>
        </div>
    )
}