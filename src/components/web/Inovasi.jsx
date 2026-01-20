import { BUTTON_LINK } from "../ButtonComp";

const Inovasi = () => {
  const data = [
    {
      id: 1,
      title: "UALII AI – NLP Assistant",
      desc: "Platform AI berbasis NLP yang mampu memahami konteks Bahasa Indonesia dan Bahasa Arab. Cocok untuk pendidikan, riset, dan aplikasi cerdas.",
      img: "/assets/images/ualii-app.png",
      btn: "Coba UALII",
    },
    {
      id: 2,
      title: "ALImeter – Realtime Polling",
      desc: "Aplikasi polling interaktif seperti Mentimeter untuk kelas, seminar, dan kegiatan akademik. Cepat, modern, realtime.",
      img: "/assets/images/survey-app.jpg.webp",
      btn: "Lihat Demo",
    },
  ];

  return (
    <section className="section-container p-8">
      <div className=" bg-abu_soft rounded-3xl max-w-screen-2xl mx-auto p-4 md:p-8 lg:p-16 flex flex-col gap-8">
        <h2 className="text-header">
          <span className=" text-biru_jelas">Inovasi </span>
 <br />
           untuk Masa Depan Pembelajaran dan Teknologi
        </h2>
        <p className="text-desc max-w-xl">Kami menghadirkan berbagai solusi digital berbasis kecerdasan buatan dan teknologi interaktif untuk meningkatkan kualitas pembelajaran, penelitian, serta pengalaman pengguna dalam ekosistem pendidikan modern.</p>

        {data.map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col-reverse lg:flex-row items-center gap-12 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* --- TEXT --- */}
            <div className="w-full lg:w-1/2">
            <div className="flex flex-col">

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {item.title}
              </h2>

              <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-lg mb-12">
                {item.desc}
              </p>

              <BUTTON_LINK  />

            </div>


            </div>

            {/* --- IMAGE --- */}
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full rounded-3xl shadow-xl"
                />

                {/* gradient efek ala contoh */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Inovasi;
