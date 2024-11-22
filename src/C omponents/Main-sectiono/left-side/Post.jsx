import { FaBookmark } from "react-icons/fa";


export default function Post({data, handleBookMarksData}){
    const {id, title, cover_image, author_name, author_image, posted_date, hashtags} = data;

    return (
        <div className="mt-8 first:mt-0 border-b pb-5">
            {/* cover Image */}
            <div>
                <img className="w-full rounded-xl" src={cover_image} />
            </div>
            {/* poste content here  */}
            <div className="mt-5 space-y-5">
                {/* author name and date here */}
                <div className="flex items-center justify-between">
                    {/* author */}
                    <div className="flex items-center space-x-2">
                        {/* author image */}
                        <div>
                            <img className="w-14 h-14" src={author_image} />
                        </div>
                        {/* author name */}
                        <div>
                            <h2 className="text-2xl font-bold">{author_name}</h2>
                            <p className="text-[#11111199]">{posted_date}</p>
                        </div>
                    </div>
                    {/* read min here */}
                    <div className="flex items-center space-x-1">
                        <p className="text-[#11111199]">05 min read </p>
                        <span className="text-[#11111199]"><FaBookmark onClick={()=>handleBookMarksData(data)}></FaBookmark></span>
                    </div>
                </div>
                <div className="space-y-3">
                    {/* post title  */}
                    <h2 className="text-4xl font-bold text-[#111111]">{title}</h2>
                    {/* hashtags here */}
                    <div className="flex space-x-2">
                        {
                          hashtags.map(hashtag => <p key={hashtag.id} className="text-base text-[#11111199]">{hashtag}</p>)
                        }
                    </div>
                    {/* Mark as read here */}
                    <div>
                        <a href="" className="text-lg font-semibold text-[#6047EC] underline">Mark As read</a>
                    </div>
                </div>
            </div>
        </div>
    )
}