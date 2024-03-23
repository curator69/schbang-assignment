import { Hero, NewsLetter, Services, TravelPoint, Footer } from "@/components";

export default function Home() {
  return (
    <div className="w-[85vw] mt-4 m-auto flex flex-col gap-20 mb-10">
      <Hero />
      <Services />
      <TravelPoint />
      <NewsLetter />
      <Footer />
    </div>
  );
}
