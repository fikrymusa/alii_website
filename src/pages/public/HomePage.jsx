import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import WhyAlii from "../../components/WhyAlii";
import Dapatkan from "../../components/Dapatkan";
import Kontributor from "../../components/Kontributor";
import CandidateCard from "../../components/CandidateCard";
import Footer from "../../components/Footer";
import ImageSlider from "../../components/web/ImageSlider";
import AdvancedRandomText from "../../components/web/AdvancedRandomText";
import JoinUs from "../../components/web/program/JoinUs";
import Sambutan from "../../components/web/Sambutan";
import Berita from "../../components/web/Berita";
import MitraKerjasama from "../../components/web/MitraKerjasama";
import AliiGalery from "../../components/web/AliiGalery";
import { api } from "../../utils/api";
import AlbumKegiatan from "../../components/web/AlbumKegiatan";
import Chatbot from "../../components/web/ChatBot";

const HomePage = () => {
  const handleSubmit = async () => {
    await api
      .post(`/track/visit`)
      .then((res) => {
        // console.log("resasdfasd", res.data);
      })
      .catch((err) => {
        console.log("res", err);
      });
  };
  useEffect(() => {
    handleSubmit();
  }, []);
  return (
    <section className="w-full flex flex-col">
      <Hero />
      <Features />
      <WhyAlii />
      {/* <ImageSlider /> */}
      {/* <AdvancedRandomText /> */}
      <Dapatkan />
      <Sambutan />
      {/* <CandidateCard /> */}
      <Berita />
      {/* <AliiGalery /> */}
      <AlbumKegiatan />
      <MitraKerjasama />
      <Chatbot />
    </section>
  );
};

export default HomePage;
