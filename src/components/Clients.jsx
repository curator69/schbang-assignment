import Image from "next/image";

const Clients = () => {
  return (
    <div className="flex items-center justify-between relative">
      <Image
        src="/images/clients/arrow.svg"
        width={100}
        height={100}
        alt="Trip Advisor Logo"
        className="h-[100px] absolute bottom-0 -left-[8%]"
      />
      <Image
        src="/images/clients/airbnb.svg"
        width={100}
        height={100}
        alt="Trip Advisor Logo"
        className="w-[150px] h-[50px]"
      />
      <Image
        src="/images/clients/booking.svg"
        width={100}
        height={100}
        alt="Trip Advisor Logo"
        className="w-[150px] h-[50px]"
      />
      <Image
        src="/images/clients/expdia.svg"
        width={100}
        height={100}
        alt="Trip Advisor Logo"
        className="w-[150px] h-[50px]"
      />
      <Image
        src="/images/clients/rbitz.svg"
        width={100}
        height={100}
        alt="Trip Advisor Logo"
        className="w-[150px] h-[50px]"
      />
      <Image
        src="/images/clients/tripAdvisor.svg"
        width={100}
        height={100}
        alt="Trip Advisor Logo"
        className="w-[150px] h-[50px]"
      />
    </div>
  );
};

export default Clients;
