import Button from "@/components/Button";
import CreativeNavbar from "@/components/CreativeNavbar";
import { PortfolioImage } from "@/contants";

const CreativeArt = () => {
  return (
    <section>
      <CreativeNavbar textColor="white"></CreativeNavbar>
      <div className="h-auto w-screen flex gap-10 flex-col padding-container">
        {/*Upper Portion - Title Container */}
        <div className="text-center flex flex-col gap-10">
          <h1 className="text-9xl text-promises-gold font-bold  ">Portfolio</h1>
          <p className="text-xl">Excellence in every pixel.</p>
        </div>
        <p className="text-center text-2xl">
          We create images with the belief that the process and collaboration
          should be as exciting and fun as the end result.
        </p>
      </div>

      {/*Images Container - Section 2 */}
      <div className="padding-container grid grid-col sm:grid-cols-2 gap-5 lg:grid-cols-3 py-20 h-auto w-screen">
        {PortfolioImage.map((list, index) => (
          <div
            className="flex justify-center  items-center w-full"
            key={index}
          >
            <div className="flex flex-row justify-center w-auto items-center">
              <img src={list.title} className="object-cover h-[700px] rounded-xl" />
            </div>
          </div>
        ))}
      </div>

      {/*Bottom Button */}

      <div className=" padding-container justify-center items-center gap-10 py-10 lg:py-20 lg:gap-20 h-auto flex flex-col">
        <div className="flex flex-col justify-center items-center gap-10 lg:gap-20 py-10">
          <h1 className="text-5xl text-center text-promises-gold">
            Immortalize <br /> life’s biggest moments
          </h1>
          <p className="text-2xl">
            Capture milestones with the expertise of a creative team that
            delivers your photography solutions all in one roof.
          </p>
        </div>

        <div>
          <Button title="Schedule a Consult" />
        </div>
      </div>
    </section>
  );
};

export default CreativeArt;
