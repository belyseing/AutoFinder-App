import HeroSearchForm from "@/components/HeroSearchForm";
import CarTypesSection from "@/components/CarTypesSection";
import TopOffersSection from "@/components/TopOffersSection";
import BrandsSection from "@/components/BrandsSection";
import NavigationBar from "@/components/NavigationBar";
import SetFinder from "@/components/SetFinder";
import AutoMarket from "@/components/AutoMarket";
import PopularVideo from "@/components/Popularvideo";
import CurrentlyInDemand from "@/components/CurrentlyInDemand";
import LatestCar from "@/components/LatestCar";



export default function HomePage() {
  return (
    <div className="text-white">
      <NavigationBar />
      <div
        className="bg-cover bg-center p-6"
        style={{ backgroundImage: "url('/images/background-image.png')" }} 
      >
        <div className="flex items-center justify-between mb-4 mx-auto py-15 mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl">
          <HeroSearchForm />
          <h1 className="text-5xl font-bold mb-4 ml-10 mx-auto">
            Easy way to find the right car
          </h1>
        </div>
      </div>
      <CarTypesSection />
      <TopOffersSection />
      <BrandsSection />
      <CurrentlyInDemand />
      <SetFinder />
      <LatestCar />
      <AutoMarket />
      <PopularVideo />
    </div>
  );
}
