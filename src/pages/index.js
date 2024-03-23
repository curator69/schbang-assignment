import { Hero } from "@/components";
import Services from "@/components/Services";
import TravelPoint from "@/components/TravelPoint";

export default function Home() {
  return (
    <div className="w-[85vw] mt-4 m-auto flex flex-col gap-20">
      <Hero />
      <Services />
      <TravelPoint />
    </div>
  );
}
