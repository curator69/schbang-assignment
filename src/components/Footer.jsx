const Footer = () => {
  return (
    <div className="flex gap-4 justify-between">
      <div className="flex flex-col gap-4 w-[25%]">
        <img src="/images/logo.svg" alt="logo" className="w-[150px]" />
        <p className="font-bold text-lg">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
        <img
          src="/images/socialIcons.svg"
          alt="social icon"
          className="w-[150px]"
        />
      </div>
      <div className="w-[25%] flex flex-col items-center gap-2">
        <p className="font-bold text-lg">Company</p>
        <p className="text-lg">About</p>
        <p className="text-lg">Career</p>
        <p className="text-lg">Mobile</p>
      </div>
      <div className="w-[25%] flex flex-col items-center gap-2">
        <p className="font-bold text-lg">Why Travelog?</p>
        <p className="text-lg">Partner with us</p>
        <p className="text-lg">FAQ'S</p>
        <p className="text-lg">Blog</p>
      </div>
      <div className="w-[25%] flex flex-col items-center gap-2">
        <p className="font-bold text-lg">Meet Us</p>
        <p className="text-lg">+00 92 1234 56789</p>
        <p className="text-lg">info@travlog.com</p>
        <p className="text-lg">205. R Street, New York BD23200</p>
      </div>
    </div>
  );
};

export default Footer;
