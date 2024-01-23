import Button from "@/components/Button";
import CreativeNavbar from "@/components/CreativeNavbar";
import { CreativePackages } from "@/contants";

const CreativePage = () => {
  return (
    <section>
      <CreativeNavbar textColor="text-black" hide="lg:hidden"></CreativeNavbar>
      <div className=" bg-[url(/mobile.webp)] lg:bg-[url(/creativeHero.webp)] h-[400px]  lg:h-screen w-screen  lg:-mt-[90px] border border-red-500 mb-16 lg:mb-40 bg-cover bg-center">
        <div className="border border-blue-500 lg:max-w-[700px] bg-white  hidden lg:flex flex-col justify-center items-center h-full rounded-bl-[70px] rounded-br-[70px] ">
          <div className=" flex flex-col justify-center items-center gap-10">
            <div className="border  border-red-500 ">
              <img
                src="/MainLogoHeader.webp"
                alt="Creative_Main"
                className="h-[120px]"
              />
            </div>
            <div className="border border-red-500">
              <h1 className="uppercase text-5xl font-bold text-black">
                {" "}
                <span className="text-[80px]">Promises</span> <br />{" "}
                <span className="">Creative Studio</span>
              </h1>
            </div>

            <div className="max-w-[420px] border border-red-500">
              <p className="text-black text-3xl">
                A premier creative space with professional photography services
                that capture the best in you.
              </p>
            </div>
            <div>
              <Button
                title="Book Now"
                color="bg-black"
                rounded="rounded-2xl"
                hover="hover:text-promises-gold"
                paddingBtn="px-10 py-5"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white flex py-10 lg:hidden h-auto w-screen border border-red-500">
        <div className=" flex padding-container w-full flex-col justify-center items-center gap-10">
          <div className="border  border-red-500 ">
            <img
              src="/MainLogoHeader.webp"
              alt="Creative_Main"
              className="h-[100px]"
            />
          </div>
          <div className="border border-red-500">
            <h1 className="uppercase text-3xl font-bold text-black">
              {" "}
              <span className="text-[50px]">Promises</span> <br />{" "}
              <span className="">Creative Studio</span>
            </h1>
          </div>

          <div className="max-w-[420px] border border-red-500">
            <p className="text-black text-2xl">
              A premier creative space with professional photography services
              that capture the best in you.
            </p>
          </div>
          <div>
            <Button
              title="Book Now"
              color="bg-black"
              rounded="rounded-2xl"
              hover="hover:text-promises-gold"
            />
          </div>
        </div>
      </div>

      {/*BTS reels Section */}
      <div className="bg-white border mb-20 lg:mb-40 w-full h-auto  border-red-500">
        <div className="flex gap-20 flex-col-reverse bg-black  lg:bg-white lg:flex-row ">
          {/*Left */}
          <div className="border border-blue-500 w-full ">
            <img src="/LandingCreatives.webp" className="w-full" />
          </div>
          {/*Right */}
          <div className="flex border border-red-500 w-full pt-20 lg:pt-0 justify-center items-center">
            <h1 className=" lg:text-black text-center text-2xl lg:text-5xl font-bold max-w-[600px] lg:leading-loose">
              Shine in the spotlight with a professional creative session that
              celebrates your unique beauty.
            </h1>
          </div>
        </div>
      </div>

      {/*Browse Our Art Section*/}
      <div className="bg-[#DAB0F7] py-10 lg:py-20 w-full h-auto ">
        <div className="w-full flex gap-10 flex-col lg:flex-row padding-container">
          {/*Left Div */}
          <div className="w-full h-auto flex border border-green-500 flex-col gap-10 text-center  justify-center items-center">
            <h1 className=" max-w-[650px] text-5xl font-bold text-black">
              Our studio features a cyclorama wall and full-length mirrors
              perfect for dress-up sessions and photo shoots.
            </h1>

            <div className="w-full  justify-center hidden lg:flex border border-green-500">
              <div className="border border-red-500  ">
                <Button
                  title="Browse Our Art"
                  color="bg-black"
                  size="w-[500px]"
                  paddingBtn="px-10 py-10"
                  rounded="rounded-xl"
                />
              </div>
            </div>
          </div>
          {/*Right Div */}
          <div className="w-full border border-yellow-400">
            <img src="/OurArtPic.webp" />
          </div>
        </div>
      </div>
      <div className="w-full  justify-center flex lg:hidden border py-10 border-green-500">
        <div className="border border-red-500  ">
          <Button
            title="Browse Our Art"
            color="bg-black"
            size="w-[300px]"
            paddingBtn="px-10 py-10"
            rounded="rounded-xl"
          />
        </div>
      </div>

      {/* Packages Creative*/}
      <div className="w-full border border-red-500 gap-10 py-10 flex flex-col justify-center items-center">
        <p>Our promise is to show your style in every photo.</p>
        <h1 className="text-promises-gold py-10 text-5xl font-bold ">
          Packages
        </h1>

        <div className="bg-[url(/CreativeBlurred.webp)] py-10 lg:py-20 bg-cover bg-center w-screen h-full flex flex-col justify-center items-center  padding-container">
          <div className=" grid lg:grid-cols-3  gap-10">
            {CreativePackages.map((list, index) => (
              <div
                className="max-w-[420px] flex flex-col justify-center border-4 rounded-xl border-black items-center w-full"
                key={index}
              >
                <div className=" h-full flex flex-col gap-1 py-10 px-10 lg:px-20 bg-black/50 text-center">
                  <h1 className="text-7xl text-center pb-5">{list.title}</h1>
                  <div className="flex flex-col gap-10">
                    {list.inclusions.map((curr, index) => (
                      <div className="" key={index}>
                        {curr.title}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col h-full py-5 justify-end">
                    <p className="text-4xl">{list.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="py-40">
            <h1 className="font-bold text-7xl uppercase text-white">Let&apos;s Create!</h1>
          </div>
        </div>


        <div className="-mt-[90px] pb-40">
          <Button title="BOOK A SHOT" rounded="rounded-xl" color="bg-promises-gold" text="text-black" paddingBtn="py-10 px-10"/>
        </div>
      </div>
    </section>
  );
};

export default CreativePage;
