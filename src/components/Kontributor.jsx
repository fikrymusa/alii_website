import React from "react";

const Kontributor = () => {
  return (
    <section className="section-container p-16 md:p-32 lg:p-48">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-title max-w-5xl text-center">
            Membangun Ekosistem Berakhlak, Berkeadilan, dan bernilai Islam

          </h1>
          <p className="text-desc max-w-xl text-center">
            ALII memastikan implementasi AI yang tidak hanya berfokus pada kecanggihan teknologi, tetapi juga pada akhlak, kebermanfaatan, dan tanggung jawab sosial sehingga memberi dampak baik bagi seluruh umat.
          </p>
        </div>

        <div className="flex items-center justify-center mt-8 mb-8">

                <div className="flex items-center gap-2">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Kementerian_Agama_new_logo.png"
                    className="h-12"
                />

                <img
                    src="https://uinjkt.ac.id/assets/images/logo_uinjkt_blu_besar.png"
                    className="h-12"
                />
                <img
                    src="https://biologi-uinjkt.id/wp-content/uploads/2024/03/Logo-FST-.png"
                    className="h-16"
                />
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvusGKt8Gx7zFdwYgHpCtz6pkFWPacMnD63w&s"
                    className="h-12"
                />
                </div>
        </div>

        <div>
          <img
            // src="https://framerusercontent.com/images/Cc1iMfHApu2J0SInu2faT2J1Pw.jpg?scale-down-to=2048&width=3648&height=1312"
            src="./assets/images/image01.jpg"
            className="rounded-3xl"
            alt="iamg-03"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
          <h3 className="text-h2 max-w-xl mt-8 mb-8">
            An open letter from our CEO — the future of hiring is human-first.
          </h3>
          <div className="max-w-xl">
            <p className="text-lg">
              The rise of AI has brought us to a crossroads in recruitment. Many
              are choosing to replace human judgment with automation. We've
              taken a different path at Wone. We believe deeply in the
              irreplaceable value of human connection in hiring. <br />
              <br />
              Our mission isn't to automate people out of the process, it's to
              amplify what makes us human. Our platform automates the
              time-intensive tasks that drain a recruiter’s day so they can
              focus on what matters most, building relationships and
              strengthening employer brands. <br />
              <br />
              What sets us apart? Our system learns from every interaction,
              adapting to your organization's specific needs while providing
              context on why each candidate is a strong match. While many tech
              solutions minimize human involvement, we're maximizing human
              potential. <br />
              <br />
              For job seekers, we're ending the frustrating void of unanswered
              applications that has become all too common. Everyone deserves to
              be seen, heard, and respected throughout their career journey.
              Through personalized feedback and guidance, we're helping people
              navigate a changing world of work with confidence and dignity.
            </p>
            <h4 className="text-h4 mt-8">A future where everyone wins.</h4>
            <p className="text-md mt-2">
              The rise of AI has brought us to a crossroads in recruitment. Many
              are choosing to replace human judgment with automation. We've
              taken a different path at Wone. We believe deeply in the
              irreplaceable value of human connection in hiring{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontributor;
