import { HiRocketLaunch } from "react-icons/hi2";
import { HiOutlineLink } from "react-icons/hi";
import Link from "next/link";
import { RiArrowRightDoubleFill } from "react-icons/ri";

const UpdatesCard = ( {heading,content,readMoreLink} ) => {
    
  return (
    <div className=" h-[80vh] text-white w-[25vw] border-2 border-black bg-[#161b1ac5] "  >

        {/* heading */}
        <div className="flex items-center gap-2 p-2 bg-[#0D0D07] "> 
            <HiRocketLaunch className=" h-[20px] w-[20px] " />
            <h1> {heading} </h1>
        </div>

        {/* middle news part */}
        <div className=" h-[80%] p-2 mt-5 ">
            
            {
                content ?
                
                content.map((dets)=> (
                    <div className="flex w-full gap-2 py-1 border-b border-dotted ">
                        <RiArrowRightDoubleFill className=" h-[25px] w-[25px] " />
                        <Link href={dets.link}  className="text-[13px] leading-[1.7] hover:underline ">
                            {dets.description}
                        </Link>
                    </div>
                ))
                :
                // if there is no content then show {not found}
                <div className="flex w-full gap-2 py-1 border-b border-dotted ">
                        <RiArrowRightDoubleFill className=" h-[25px] w-[25px] " />
                        <p className="text-[13px] leading-[1.7] ">
                            रिकॉर्ड नहीं मिला
                        </p>
                </div>
            } 
        </div>

        {/* aur padhein */}
        <div className="flex items-center gap-2 p-2 bg-[#0D0D07] ">
            <HiOutlineLink className=" h-[20px] w-[20px] " />
            <Link href={readMoreLink || ""} > <h1 className=" hover:underline"> और पढ़ें </h1>  </Link>
        </div>
        
    </div>
  )
}
export default UpdatesCard