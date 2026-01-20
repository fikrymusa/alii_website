import { ArrowRight } from "lucide-react";
import React from "react";
import { BUTTON_LINK } from "./ButtonComp";
import Image from "./Image";

const Dapatkan = () => {
  return (
    <section className="section-container p-8">
      <div className=" bg-abu_soft rounded-3xl p-4 md:p-8 lg:p-16 flex flex-col gap-8">
        <div className="flex flex-col max-w-screen-2xl mx-auto gap-6">
          <div className="flex flex-col text-lg items-start gap-2">
            <span className="text-sm font-semibold">Keuntungan ?</span>
            <h1 className="text-header font-semibold max-w-xl">
              Apa yang Anda Dapatkan ?
            </h1>
            <p className="text-desc max-w-2xl text-black">
              ingin belajar kecerdasan buatan, tapi juga ingin teknologi itu
              bermakna?. Kami menawarkan program yang dirancang untuk membekali
              Anda dengan keahlian AI yang mendalam:
            </p>
          </div>

          <div className="flex flex-col gap-4 md:gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
                <Image
                  src="/assets/images/data_tertampung.webp"
                  alt="imag-02"
                  className="object-cover rounded-3xl shadow-xl h-68"
                />
              {/* <div className="h-64 lg:h-80 w-full overflow-hidden rounded-3xl shadow-xl">
              </div> */}
              <div className="flex flex-col items-start">
                <span className="text-md">
                  AI untuk Semua: Membangun Kesadaran dan Keterampilan Digital
                </span>
                <h3 className="text-2xl font-semibold mb-4">
                  Edukasi dan Literasi AI yang Inklusif
                </h3>
                <p className="text-lg max-w-xl mb-4">
                  Program pembelajaran, workshop, seminar, dan pelatihan
                  kecerdasan buatan yang terbuka bagi seluruh civitas akademika
                  UIN Jakarta dan masyarakat umum
                </p>
                <BUTTON_LINK link={""} title={"Baca selengkapnya"} />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
              {/* Gambar - mobile dulu, desktop kedua */}
                <Image
                  src="/assets/images/ai_research.avif"
                  alt="imag-02"
                  className="object-cover order-1 lg:order-2 h-68 rounded-3xl shadow-xl"
                />

              {/* Teks - mobile kedua, desktop pertama */}
              <div className="order-2 lg:order-1 flex flex-col items-start justify-center">
                <span className="text-sm">
                  AI untuk Semua: Membangun Kesadaran dan Keterampilan Digital
                </span>
                <h3 className="text-2xl font-semibold mb-4">
                  Edukasi dan Literasi AI yang Inklusif
                </h3>
                <p className="text-lg max-w-xl mb-4">
                  Program pembelajaran, workshop, seminar, dan pelatihan
                  kecerdasan buatan yang terbuka bagi seluruh civitas akademika
                  UIN Jakarta dan masyarakat umum
                </p>
                <BUTTON_LINK link={"/program"} title={"Baca selengkapnya"} />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
              <div className="h-64 lg:h-80 w-full overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="/assets/images/bg-education-01.webp"
                  alt="imag-02"
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="flex flex-col items-start gap-4 justify-center">
                <span className="text-md">
                  AI untuk Semua: Membangun Kesadaran dan Keterampilan Digital
                </span>
                <h3 className="text-2xl font-semibold mb-4">
                  Edukasi dan Literasi AI yang Inklusif
                </h3>
                <p className="text-desc max-w-2xl text-slate-600 mb-4">
                  Program pembelajaran, workshop, seminar, dan pelatihan
                  kecerdasan buatan yang terbuka bagi seluruh civitas akademika
                  UIN Jakarta dan masyarakat umum
                </p>
                <BUTTON_LINK link={""} title={"Baca selengkapnya"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dapatkan;
