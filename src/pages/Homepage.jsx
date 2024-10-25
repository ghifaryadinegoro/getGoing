import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import guides from "../db/guides";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import GuideCard from "../components/GuideCard";
import cities from "../db/cities";
import CityCard from "../components/CityCard";
import TestimonySection from "../components/TestimonySection";
import { Link } from "react-router-dom";
import articles from "../db/articles";
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";
import InformationModal from "../components/InformationModal";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <main>
        <HeroSection />

        <section className="mb-12 lg:mb-6 px-4 lg:px-24">
          <h1 className="text-3xl font-bold mb-6">
            Sedang <span className="text-[#cc0000]">Populer</span>
          </h1>
          <div className="overflow-hidden">
            <Swiper
              modules={[Pagination]}
              spaceBetween={1}
              pagination={{ clickable: true }}
              speed={500}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              style={{
                paddingBottom: "36px",
                "--swiper-pagination-color": "#cc0000",
              }}
            >
              {guides.map((guide) => (
                <SwiperSlide key={guide.id}>
                  <GuideCard guide={guide} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className="mb-12 lg:mb-6 px-4 lg:px-24">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold">
              “Better to <span className="text-[#cc0000]">SEE</span> something
              once than hear about it {""}
              <span className="text-[#4183d1]">A THOUSAND TIMES</span>”
            </h1>
            <p className="text-2xl font-bold">- Asian Proverb.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 justify-center">
            <div className="flex flex-col justify-between">
              <div className="items-start">
                <h2 className="text-5xl font-semibold bg-gradient-to-r from-[#cd0101] via-40% to-[#ff8327] bg-clip-text text-transparent">
                  PRIVATE TRIP
                </h2>
                <h3 className="text-5xl font-bold drop-shadow-md my-8">
                  Berangkat <span className="text-[#cc0000]">Kapan Saja</span>{" "}
                  Semaumu
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-10">
                <div className="flex items-center gap-2">
                  <img
                    src="	https://getgoing.co.id/content/img/icon/check-circle.png"
                    alt="check"
                    className="w-5 h-5"
                  />
                  <p className="text-lg text-[#7e869f]">
                    Tentukan tanggal keberangkatan sesukamu
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="	https://getgoing.co.id/content/img/icon/check-circle.png"
                    alt="check"
                    className="w-5 h-5"
                  />
                  <p className="text-lg text-[#7e869f]">
                    Tidak ada kuota minimum, jadi pasti berangkat
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="	https://getgoing.co.id/content/img/icon/check-circle.png"
                    alt="check"
                    className="w-5 h-5"
                  />
                  <p className="text-lg text-[#7e869f]">
                    Fleksible, bebas tentukan destinasi dan aktivitas pejalanan
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src="	https://getgoing.co.id/content/img/icon/check-circle.png"
                    alt="check"
                    className="w-5 h-5"
                  />
                  <p className="text-lg text-[#7e869f]">
                    Liburan jadi lebih exclusive untuk kamu dan keluarga
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#d20606] to-[#ff9e22] rounded-l-[4rem] p-6 lg:p-12 grid grid-cols-2 gap-4">
              <div className="bg-slate-300 bg-opacity-25 rounded-lg p-4 flex flex-col gap-2">
                <div className="bg-white rounded-lg w-14 h-14 flex justify-center items-center">
                  <img
                    src="	https://getgoing.co.id/content/img/servis-kami/support-gradient.png"
                    alt="support"
                    className="w-10 h-10"
                  />
                </div>
                <h5 className="text-lg text-white font-bold">
                  Konsultasi GRATIS
                </h5>
                <p className="text-lg text-[#dee2e6]">Curhatin aja semuanya!</p>
              </div>
              <div className="bg-slate-300 bg-opacity-25 rounded-lg p-4 flex flex-col gap-2">
                <div className="bg-white rounded-lg w-14 h-14 flex justify-center items-center">
                  <img
                    src="	https://getgoing.co.id/content/img/servis-kami/person-pin-gradient.png"
                    alt="person"
                    className="w-10 h-10"
                  />
                </div>
                <h5 className="text-lg text-white font-bold">Local Guide</h5>
                <p className="text-lg text-[#dee2e6]">Biar ada temen!</p>
              </div>
              <div className="bg-slate-300 bg-opacity-25 rounded-lg p-4 flex flex-col gap-2">
                <div className="bg-white rounded-lg w-14 h-14 flex justify-center items-center">
                  <img
                    src="	https://getgoing.co.id/content/img/servis-kami/commute-gradient.png"
                    alt="transport"
                    className="w-10 h-10"
                  />
                </div>
                <h5 className="text-lg text-white font-bold">Transportasi</h5>
                <p className="text-lg text-[#dee2e6]">
                  Bebas pilih transportasi apa
                </p>
              </div>
              <div className="bg-slate-300 bg-opacity-25 rounded-lg p-4 flex flex-col gap-2">
                <div className="bg-white rounded-lg w-14 h-14 flex justify-center items-center">
                  <img
                    src="https://getgoing.co.id/content/img/servis-kami/star-gradient.png"
                    alt="star"
                    className="w-10 h-10"
                  />
                </div>
                <h5 className="text-lg text-white font-bold">
                  Lengkap Pokoknya
                </h5>
                <p className="text-lg text-[#dee2e6]">
                  Hotel, Asuransi, Visa, Wifi dll
                </p>
              </div>
            </div>
          </div>
          <div className=""></div>
        </section>

        <section className="mb-12 lg:mb-6 px-4 lg:px-24">
          <h1 className="text-3xl font-bold mb-6">
            Kota <span className="text-[#cc0000]">Populer</span>
          </h1>
          <div className="overflow-hidden">
            <Swiper
              modules={[Pagination]}
              spaceBetween={1}
              pagination={{ clickable: true }}
              speed={500}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 5,
                },
              }}
              style={{
                paddingBottom: "48px",
                "--swiper-pagination-color": "#cc0000",
              }}
            >
              {cities.map((city) => (
                <SwiperSlide key={city.id}>
                  <CityCard city={city} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className="lg:px-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6">
              Kata <span className="text-[#cc0000]">Mereka</span>
            </h1>
            <h3 className="text-[#7e869f] text-lg mb-6">
              Cerita dari mereka yang telah menjelajahi Eropa bersama kami
            </h3>
          </div>

          <TestimonySection />
        </section>

        <section className="bg-[#f8f9fa] px-4 lg:px-24 py-24">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-3xl font-bold mb-3">Baca juga</h1>
            <Link to="https://getgoing.co.id/blog">
              <div className="py-2 px-3 font-bold border text-[#cc0000] border-[#cc0000] rounded-full w-fit hover:bg-[#3e6bea] hover:text-white hover:border-[#3e6bea] duration-300 tracking-widest flex items-center gap-2 group">
                <p>LIHAT SEMUA ARTIKEL</p>
                <svg
                  className="w-6 h-6 text-[#cc0000] group-hover:text-white duration-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m7 16 4-4-4-4m6 8 4-4-4-4"
                  />
                </svg>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard article={article} />
            ))}
          </div>
        </section>
        <div className="fixed bottom-2 right-2 z-50 shadow-xl drop-shadow-xl">
          <InformationModal />
        </div>

        <Footer />
      </main>
    </div>
  );
}
