import CtaButton from "@/mircocomponents/CtaButton";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center gap-10 bg-[#FACD49] relative py-8 px-[20%] rounded-2xl mt-10">
      <img
        src="/images/dotTriangle.svg"
        alt="dotTriangle"
        className="absolute -top-12 -left-12"
      />
      <h3 className="text-2xl text-[var(--pink)] uppercase">
        subscribe to our newsletter
      </h3>
      <h2 className="text-5xl text-center font-bold">
        Prepare yourself & let’s explore the beauty of the world
      </h2>

      <div className="flex items-center gap-4 w-full">
        <div className="flex items-center gap-4 bg-white py-4 px-8 rounded-full w-full">
          <img src="images/emailIcon.svg" alt="email icon" />
          <input type="email" placeholder="Your Email" />
        </div>
        <CtaButton>Subscribe</CtaButton>
      </div>
    </div>
  );
};

export default NewsLetter;
