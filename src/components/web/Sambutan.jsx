import React from "react";
import Image from "../Image";

const Sambutan = () => {
  return (
    // <section className="section-container p-4 md:p-8 lg:p-16 bg-white">
    <section className="section-container bg-white">
      <div className="max-w-screen-2xl mx-auto py-24 px-4">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-header text-left md:text-center max-w-screen-lg">
            Membangun Ekosistem Berakhlak, Berkeadilan, dan bernilai Islam
          </h1>
          <p className="text-desc max-w-xl text-left md:text-center">
            ALII memastikan implementasi AI yang tidak hanya berfokus pada
            kecanggihan teknologi, tetapi juga pada akhlak, kebermanfaatan, dan
            tanggung jawab sosial sehingga memberi dampak baik bagi seluruh
            umat.
          </p>
        </div>

        <div className="flex items-center justify-center mt-8 mb-8">
          <div className="flex items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Kementerian_Agama_new_logo.png"
              className="h-8 lg:h-12"
            />

            <img
              src="https://uinjkt.ac.id/assets/images/logo_uinjkt_blu_besar.png"
              className="h-8 lg:h-12"
            />
            <img
              src="https://biologi-uinjkt.id/wp-content/uploads/2024/03/Logo-FST-.png"
              className="h-8 lg:h-16"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvusGKt8Gx7zFdwYgHpCtz6pkFWPacMnD63w&s"
              className="h-8 lg:h-12"
            />
          </div>
        </div>

        <div>
          {/* <img
            // src="https://framerusercontent.com/images/Cc1iMfHApu2J0SInu2faT2J1Pw.jpg?scale-down-to=2048&width=3648&height=1312"
           
          /> */}
          <Image
            src="/assets/images/join-all.avif"
            className="rounded-3xl shadow-x"
            alt="iamg-03"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
          <h3 className="text-h2 max-w-xl lg:max-w-3xl mt-8 mb-4 font-extralight">
            <span className="font-extrabold">Sambutan Direktur</span> -
            Artificial Intelligence Literacy & Innovation Institute (ALII) - UIN
            Jakarta
          </h3>
          {/* <h3 className="text-h2 max-w-3xl mt-8 mb-8">
            An open letter from our CEO — the future of hiring is human-first.
          </h3> */}
          <div className="max-w-xl">
            <p className="text-lg">
              Assalamu’alaikum Warahmatullahi Wabarakatuh
              <br />
              <br />
              Di hadapan kita, berdiri teknologi Generative AI Large Language
              Models—ChatGPT, Claude, Gemini—yang begitu cerdas hingga mampu
              menulis, berpikir, bahkan menjawab pertanyaan yang rumit
              sekalipun. Namun, izinkanlah saya bertanya: apakah kecerdasan itu
              milik kita, atau hanya pinjaman yang kita klaim sebagai milik
              sendiri?
              <br />
              <br />
              Rasulullah SAW mengajarkan, “Sampaikanlah ilmu walau satu ayat.”
              Ilmu—dari manapun sumbernya, dari siapapun gurunya, bahkan dari
              mesin—adalah amanah. Dan amanah itu harus kita sampaikan dengan
              jujur, tanpa menyembunyikan kebenaran.
              <br />
              <br />
              <h4 className="text-h4 mt-8">Kepada mahasiswa tercinta</h4>
              AI adalah cermin yang memantulkan apa yang kita tanyakan, tetapi
              bukan jiwa yang berpikir untuk kita. Jangan biarkan teknologi ini
              mencuri kesempatan kalian untuk jatuh, bangkit, dan belajar dari
              proses itu sendiri. Kecerdasan sejati bukan tentang jawaban
              instan, tetapi tentang perjalanan menemukan jawaban itu.
              <br />
              <br />
            </p>
            <h4 className="text-h4 mt-8">Kepada para dosen dan pendidik</h4>
            <p className="text-md mt-2">
              Kalian adalah mercusuar dalam lautan informasi yang kian gelap.
              Tunjukkanlah bagaimana menggunakan teknologi dengan hati nurani,
              bukan hanya kepintaran teknis. Kebijakan ini bukan sekadar aturan
              di atas kertas. Ini adalah komitmen kita bersama—bahwa di tengah
              arus deras teknologi, integritas tetap menjadi kompas, dan Islam
              tetap menjadi cahaya.
              <br />
              <br />
              Ingatlah: teknologi adalah hamba yang baik, tetapi tuan yang
              buruk. Mari kita jadikan AI sebagai sahabat dalam belajar, bukan
              pengganti dalam berpikir. Mari kita raih prestasi dengan cara yang
              membuat Allah ridha, bukan dengan cara yang membuat kita malu di
              hadapan-Nya.
              <br />
              <br />
              Wassalamu’alaikum Warahmatullahi Wabarakatuh
            </p>
            <p className="text-xl font-semibold mt-12">
              Khodijah Hulliyah., M.si., Ph.D.
              <br />
              <span className="font-extralight">Direktur ALII UIN Jakarta</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sambutan;
