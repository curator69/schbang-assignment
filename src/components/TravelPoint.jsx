import Image from "next/image";

const TravelPoint = () => {
  return (
    <div className="flex gap-8">
      <img src="/images/travelPoint.png" alt="travepoint" />

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
          <div className="flex flex-col items-center p-8 shadow-2xl rounded-full">
            <p className="text-[#FF5722] text-4xl">500+</p>
            <p className="text-lg">Holiday Package</p>
          </div>
          <div className="flex flex-col items-center p-8 shadow-2xl rounded-full">
            <p className="text-[#FF5722] text-4xl">100</p>
            <p className="text-lg">Luxury Hotel</p>
          </div>
          <div className="flex flex-col items-center p-8 shadow-2xl rounded-full">
            <p className="text-[#FF5722] text-4xl">7</p>
            <p className="text-lg">Premium Airlines</p>
          </div>
          <div className="flex flex-col items-center p-8 shadow-2xl rounded-full">
            <p className="text-[#FF5722] text-4xl">2K+</p>
            <p className="text-lg">Happy Customer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPoint;
