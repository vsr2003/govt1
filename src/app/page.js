
// working as home page of website 

import MpCardsDisplay from "@/Sections/Home/MpCardsDisplay";
import PhotoGallery from "@/Sections/Home/PhotoGallery";
import Updates from "@/Sections/Home/Updates";
import AboutMpCards from "@/components/AboutMp/AboutMpCards";
import NavHero from "@/components/NavHero";
import Personality from "@/components/Personality/Personality";
import PersonalityCard from "@/components/Personality/PersonalityCard";
import SwiperComponentOfHero from "@/components/SwiperComponent";



export default function Home() {
  return (
    <div className="w-full min-h-screen ">
      <NavHero />
      <SwiperComponentOfHero />
      <Personality />
      <MpCardsDisplay />
      <Updates />
      <PhotoGallery />
    </div>
  );
}
