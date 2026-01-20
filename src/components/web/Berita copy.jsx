import { useState, useEffect } from "react";
import { api, DOKUMEN_URL } from "../../utils/api";
import { BUTTON_LINK, BUTTON_NEWS } from "../ButtonComp";


export default function Berita() {
  const [animate, setAnimate] = useState(false);
  const [datas, setDatas] = useState([]);

  const featured = datas && datas.find((item) => item.is_featured == true);
  const others = datas;

  // const others = datas?.filter(item => !item.is_featured) || [];
  console.log("others", others);

  const getDatas = async (e) => {
    await api
      .get(`/website/berita`)
      .then((res) => {
        console.log("res berita", res.data);

        setDatas(res.data || []);
        setAnimate(false);
      })
      .catch((err) => {
        setAnimate(false);
        console.log("eerr", err);
      });
  };

  useEffect(() => {
    getDatas();
  }, []);

  return (
    <section className="section-container py-16 lg:py-24 bg-abu_soft">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col mb-12 mx-auto max-w-2xl gap-4 text-center">
          <h2 className="text-header font-bold text-slate-800 text-center max-w-xl mx-auto">
            Berita & Kegiatan ALII
          </h2>
          <p className="text-desc text-center max-w-xl">
            ALII mengadakan pelatihan dan riset AI untuk meningkatkan kualitas
            pembelajaran digital.
          </p>
        </div>

        {/* Featured News */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition">
            <img
              src={DOKUMEN_URL + featured?.image_path}
              alt={featured?.title}
              className="w-full h-64 md:h-96 object-cover"
            />

            <div className="p-8 md:p-10">
              <p className="text-sm text-slate-500 mb-2">{featured?.date}</p>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                {featured?.title}
              </h3>
              <p className="text-slate-600 text-md md:text-lg max-w-3xl">
                {featured?.excerpt}
              </p>

              {/* {featured?.slug} */}
              <div className="mt-8">
                {/* <BUTTON_LINK
                  link={`/berita/${featured?.slug}`}
                  title={"Selengkapnya ..."}
                  /> */}
                <BUTTON_NEWS
                  link={`/berita/${featured?.slug}`}
                />
              </div>

              {/* <a
                href="#"
                className="inline-block mt-6 text-biru_jelas font-semibold text-lg hover:underline"
              >
                Baca Selengkapnya →
              </a> */}
            </div>
          </div>
        </div>

        {/* Other News Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {others.map((n) => (
            <div
              key={n.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={n?.image_path}
                alt={n?.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <p className="text-sm text-slate-500 mb-1">{n.date}</p>
                <h4 className="text-xl font-semibold text-slate-800 mb-2 hover:text-biru_jelas transition">
                  {n.title}
                </h4>
                <p className="text-slate-600 text-sm mb-4">
                  {n?.excerpt.substring(0, 70)}...
                </p>

                {/* <a
                  href="#"
                  className="text-biru_jelas font-medium hover:underline"
                >
                  Baca Selengkapnya →
                </a> */}
                <div className="mt-8">
                  {/* <BUTTON_LINK
                    link={`/berita/${n?.slug}`}
                    title={"Selengkapnya ..."}
                  /> */}
                         <BUTTON_NEWS
                  link={`/berita/${n?.slug}`}
                />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
