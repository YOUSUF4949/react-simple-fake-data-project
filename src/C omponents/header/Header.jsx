
export default function Header(){
    return (
        <div className="flex items-center justify-between p-3 lg:py-5 border-b">
            {/* Company log  */}
            <div>
                <h2 className="font-bold text-xl lg:text-4xl">Knowledge Cafe</h2>
            </div>
            {/* company waner */}
            <div>
                <img src={'/public/images/profile.png'} />
            </div>
        </div>
    )
}