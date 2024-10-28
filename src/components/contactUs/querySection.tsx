import ContactForm from "./contactForm";

export const QuerySection: React.FC = () => {
  return (
    <section id="query" className="w-full h-screen bg-white px-4 md:px-10 lg:px-16 relative overflow-hidden">
      <div className="absolute h-screen right-[-400px] bg-[url('/bg-2.png')] bg-cover z-0 pointer-events-none max-h-screen w-full"></div>

      {/* <img
        src="/bg.png"
        alt="Background"
        className="absolute right-0 top-0 h-full opacity-30 z-0 object-cover"
        style={{ width: "120%", clipPath: "inset(0 0 0 50%)" }} // 通过 clipPath 实现裁剪
      /> */}

      <div className="container relative z-10 w-full flex flex-row items-start h-full gap-0 justify-center py-10 ">
        <ContactForm />
      </div>
    </section>
  );
};
