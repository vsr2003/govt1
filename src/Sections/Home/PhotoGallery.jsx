import SwiperComponentForBrands from "@/components/SwiperComponentForBrands"
import SwiperComponentOfPhotoGallery from "@/components/SwiperComponentOfPhotoGallery"


const PhotoGallery = () => {
  return (
    <div className="flex flex-col w-full h-[90vh] p-3 border-2 border-black gap-[5vh] ">

        <SwiperComponentOfPhotoGallery />
        <SwiperComponentForBrands />
        
    </div>
  )
}

export default PhotoGallery