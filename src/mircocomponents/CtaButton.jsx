const CtaButton = ({ children }) => {
  return (
    <button className="bg-[var(--purple)] text-white py-4 px-8 rounded-full">
      {children}
    </button>
  );
};

export default CtaButton;
