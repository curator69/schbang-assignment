import Image from "next/image";

const TravelPoint = () => {
  return (
    <div className="flex gap-8">
      <Image
        src="/images/travelPoint.png"
        width={100}
        height={100}
        alt="travelPoint"
      />

      <div className="flex flex-col gap-2">
        <h3 className="text-[var(--pink)] text-2xl">TRAVEL POINT</h3>
        <h1 className="text-5xl font-bold">
          We helping you find your dream location
        </h1>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p>500+</p>
            <p>Holiday Package</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPoint;
