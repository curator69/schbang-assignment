import Image from "next/image";

const Services = () => {
  return (
    <div className="flex items-center gap-8 mb-10">
      <div className="flex flex-col gap-2">
        <h3 className="text-[var(--pink)] text-2xl">SERVICES</h3>
        <h1 className="text-5xl font-bold">Our top value categories for you</h1>
      </div>
      <div className="flex gap-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center py-28 p-4 shadow-2xl rounded-lg h-[450px]">
          <Image
            src="/images/services/bestTourGuide.svg"
            width={50}
            height={50}
            alt="services-icon"
          />
          <p className="text-3xl font-bold">Best Tour Guide</p>
          <p className="text-lg">
            What looked like a small patch of purple grass, above five feet.
          </p>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 text-center py-28 p-4 shadow-2xl rounded-lg h-[450px]">
          <Image
            src="/images/services/easyBooking.svg"
            width={50}
            height={50}
            alt="services-icon"
          />
          <p className="text-3xl font-bold">Best Tour Guide</p>
          <p className="text-lg">
            What looked like a small patch of purple grass, above five feet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
