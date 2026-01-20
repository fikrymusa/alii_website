import { ArrowRight } from "lucide-react";
import React from "react";
import { BUTTON_LINK } from "./ButtonComp";
import AnimateHTMLContent from "./web/AnimateHTMLContent";
import Image from "./Image";

const WhyAlii = () => {
  return (
    <section className="section-container">
      <div className="max-w-screen-2xl mx-auto bg-white flex flex-col gap-8 p-4 md:p-8 lg:p-16">
        <div className="flex text-lg flex-col gap-2">
          <span className="text-span">Kenapa ALII?</span>
          {/* <AnimateHeading
              text=" Karena AI Butuh &  Hati dan Etika"
              animationType="fadeUp"
              className="text-gray-800 mb-8"
            />
          <h2 className="text-6xl text-slate-600 font-semibold max-w-xl">
            Karena AI Butuh  <br />
            <span className="text-7l font-extrabold text-biru_jelas">
            Hati dan Etika

            </span>
          </h2> */}

          <h2 className="text-header">
            Karena AI Butuh <br />
            <span className=" text-biru_jelas">Hati dan Etika</span>
          </h2>
        </div>

        <div className="grid gird-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col max-w-xl gap-4">
            <p className="text-desc text-slate-600">
              Diantara data dan dzikir, ALII UIN Jakarta menyulam kecerdasan
              buatan dengan nilai Islam, merajut teknologi dan spiritualitas.
              Fokus pada literasi kecerdasan buatan.
            </p>
            <p className="text-desc text-slate-600">
              Antara data dan dzikir, ALII UIN Jakarta menyulam kecerdasan
              buatan dengan nilai Islam, merajut teknologi dan spiritualitas.
              Fokus pada literasi kecerdasan buatan.
            </p>
          </div>
          <div className="flex items-center justify-end">
            <BUTTON_LINK link={``} title={"Join Our Innovation"} />
            {/* <button className="bg-black rounded-3xl  flex items-center justify-between gap-2 p-8 w-5xl h-fit w-fit">
            <div className="flex flex-col items-start justify-start">
              <p className="text-white text-sm font-medium">
                Join Our Innovation
              </p>
              <p className="text-white text-xs">Join Our Innovation</p>
            </div>
            <span className="text-slate-700 p-2 rounded-md bg-slate-100 ">
              <ArrowRight size={14} />
            </span>
          </button> */}
          </div>
        </div>
        <Image
          src="/assets/images/alii-office.avif"
          alt="image"
          className=" rounded-3xl shadow-2xl"
        />
      </div>
    </section>
  );
};

export default WhyAlii;
