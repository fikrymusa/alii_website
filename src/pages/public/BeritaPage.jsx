import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api, DOKUMEN_URL } from "../../utils/api";
import Image from "../../components/Image";
import { b } from "framer-motion/client";
import { Calendar, User } from "lucide-react";
import MitraKerjasama from "../../components/web/MitraKerjasama";
import JoinUs from "../../components/web/program/JoinUs";
import { formatTanggalID } from "../../utils/control";
import LoadingPage from "../../components/LoadingPage";
import toast from "react-hot-toast";
import { Facebook, Instagram, Link2 } from "lucide-react";

const BeritaPage = () => {
  const { slug } = useParams();

  const [animate, setAnimate] = useState(false);
  const [datas, setDatas] = useState([]);
  const berita = datas && datas.find((item) => item.slug.includes(slug));

  const getDatas = async (e) => {
    setAnimate(true);
    await api
      .get(`/website/berita`)
      .then((res) => {
        // console.log("res bertia", res.data);

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
  }, [slug]);

    const handleSubmit = async () => {
    await api
      .post(`/track/article/${berita?.id}`)
      .then((res) => {
        // console.log("resasdfasd", res.data);
      })
      .catch((err) => {
        console.log("res", err);
      });
  };
  useEffect(() => {
    if(berita?.id) handleSubmit();
  }, [berita]);

  // console.log("Berita", berita)
const shareUrl = window.location.href;
const shareText = berita?.title;
const handleShareInstagram = () => {
  navigator.clipboard.writeText(shareUrl);
  window.open("https://www.instagram.com/", "_blank");
};

const handleCopyLink = () => {
  navigator.clipboard.writeText(shareUrl);
  toast.success("Link berhasil disalin");
};
  return (
    animate ? <LoadingPage /> :
    <div>
    <section className="section-container min-h-screen mt-12 mb-24">
      <div className="max-w-screen-2xl mx-auto px-8 flex flex-col">
        <div className="w-full h-80 md:h-[500px] overflow-hidden rounded-3xl shadow-xl">
          <Image
            src={DOKUMEN_URL + berita?.image_path}

            alt="image-cover"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          <div className="w-full lg:w-9/12">
            <div className="flex flex-col mt-8">
              <span className="bg-blue-800 text-xs text-white px-4 py-2 w-fit font-semibold rounded-md">{berita?.category}</span>
              <h3 className="text-h2 mt-8 mb-12 font-bold text-slate-800">{berita?.title}</h3>

              <div className="flex gap-4 mb-4">
                <span className="text-slate-500 font-semibold flex items-center gap-2">
                  <User /> {berita?.author}
                </span>
                <span className="text-slate-500 flex items-center gap-2">
                  <Calendar />
                  {formatTanggalID(berita?.publish_date)}
                </span>
              </div>

              {/* <p className="leading-relaxed tracking-wide text-lg text-slate-600">

                  <div
      dangerouslySetInnerHTML={{ __html: berita?.content }}
    />
              </p> */}
              <div
  className="
    leading-relaxed tracking-wide text-lg text-slate-600
    [&_a]:underline
    [&_a]:text-blue-600
    [&_a:hover]:text-blue-800
  "
  dangerouslySetInnerHTML={{ __html: berita?.content }}
/>

    <div className="flex flex-wrap gap-2 mb-4 mt-12">
       {berita?.tags
  ?.split(",")
  .map(tag => tag.trim())
  .filter(tag => tag.length > 0)
  .map((tag, index) => (
    <span
      key={index}
      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md hover:bg-gray-200 transition-colors"
    >
      #{tag}
    </span>
  ))
}
                  </div>

<div className="flex flex-wrap gap-3 mt-6">
  {/* Facebook */}
  <a
    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
    target="_blank"
    rel="noopener noreferrer"
    className="
      flex items-center gap-2 px-4 py-2
      bg-blue-600 text-white text-sm
      rounded-full shadow-sm
      hover:bg-blue-700 hover:shadow-md
      transition-all
    "
  >
    <Facebook size={16} />
    <span>Facebook</span>
  </a>

  {/* Instagram */}
  <button
    onClick={handleShareInstagram}
    className="
      flex items-center gap-2 px-4 py-2
      bg-gradient-to-r from-pink-500 to-purple-500
      text-white text-sm
      rounded-full shadow-sm
      hover:opacity-90 hover:shadow-md
      transition-all
    "
  >
    <Instagram size={16} />
    <span>Instagram</span>
  </button>

  {/* Copy Link */}
  <button
    onClick={handleCopyLink}
    className="
      flex items-center gap-2 px-4 py-2
      bg-gray-700 text-white text-sm
      rounded-full shadow-sm
      hover:bg-gray-800 hover:shadow-md
      transition-all
    "
  >
    <Link2 size={16} />
    <span>Salin Link</span>
  </button>
</div>


            </div>
          </div>
          <div className="w-full lg:w-3/12 lg:mt-12">
            <div className="flex flex-col">
              <div>
                <h4 className="text-h3 font-semibold mb-4">Berita Lainnya</h4>
              </div>
              <div className="flex flex-col gap-6">
                {datas
                  .filter((item) => item.slug !== slug)
                  .map((item, index) => (
                    <div key={index} className="flex flex-col gap-3">
                      {/* Image wrapper */}
                      <div className="w-full h-72 overflow-hidden rounded-xl bg-gray-100">
                        <img
                          src={DOKUMEN_URL + item.image_path}
                          alt={item.title}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>

                      <a
                        href={`/berita/${item.slug}`}
                        className="font-semibold text-lg hover:underline"
                      >
                        {item.title}
                      </a>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>

      <JoinUs />
    </div>
  );
};

export default BeritaPage;
