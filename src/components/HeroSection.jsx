import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="mb-12 lg:mb-6 px-4 lg:px-24">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        speed={1000}
        autoplay={{ delay: 5000 }}
        loop={true}
        style={{ "--swiper-navigation-color": "#cc0000" }}
      >
        <SwiperSlide>
          <div className="lg:flex lg:items-center lg:gap-24">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/webImages%2F1689692364277swiss%202%20(1)-min.JPG?alt=media&token=e4b0843f-875b-4bbe-b8bc-642318848bca"
              alt="img1"
              className="w-full lg:w-1/2 h-64 lg:h-80 object-cover rounded-lg"
            />
            <div className="flex flex-col items-center justify-center text-center px-1">
              <h3 className="text-[#9da4aa] mb-3 tracking-[.25em]">
                EKSPLOR DAN NIKMATI MUDAH LIBURAN KE LUAR NEGERI DENGAN
              </h3>
              <h2 className="text-[#374151] font-bold text-4xl mb-6">
                Aplikasi GetGoing
              </h2>
              <h3 className="text-[#9da4aa] mb-3 tracking-[.25em]">
                DAPAT DIDOWNLOAD DI:
              </h3>

              <div className="flex gap-6 items-center justify-center">
                <a
                  href="https://apps.apple.com/us/app/getgoing/id1602015694"
                  target="blank"
                >
                  <img
                    src="	https://getgoing.co.id/content/svg/AppStore.svg"
                    alt="applestore"
                    className="h-20"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.getgoing.app"
                  target="blank"
                >
                  <img
                    src="	https://getgoing.co.id/content/svg/GooglePlay.svg"
                    alt="googleplay"
                    className="h-20"
                  />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="lg:flex lg:items-center lg:gap-24 lg:justify-between">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/getgoing-prod.appspot.com/o/webImages%2F1689692183775IMG_1600.JPG?alt=media&token=0da0739c-fc65-4944-80d9-9e6b45d7af11"
              alt="img2"
              className="w-full lg:w-1/2 h-64 lg:h-80 object-cover rounded-lg"
            />
            <div className="flex flex-col px-1 lg:w-1/2">
              <h3 className="text-[#9da4aa] text-center mb-6 tracking-[.25em]">
                APA YANG GETGOING PUNYA ?
              </h3>

              <Link
                to={"https://getgoing.co.id/gettrip"}
                className="flex w-fit items-center gap-4 mb-4 lg:mb-12 transition-transform transform duration-300 hover:-translate-y-2"
              >
                <div className="bg-gray-100 rounded-full p-3">
                  <img
                    src="https://www.svgrepo.com/show/428226/beach.svg"
                    alt="beach"
                    className="h-10"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-gray-700 font-bold text-2xl">
                    Trip Planner
                  </h2>
                  <p className="text-gray-700 text-sm font-bold bg-gray-100 rounded-lg py-1 px-2">
                    Susun Rute Perjalananmu Sendiri
                  </p>
                </div>
              </Link>

              <Link
                to={"https://getgoing.co.id/getguide"}
                className="flex items-center gap-4 mb-4 lg:mb-12 transition-transform transform duration-300 hover:-translate-y-2 w-fit"
              >
                <div className="bg-gray-100 rounded-full p-3">
                  <img
                    src="https://www.svgrepo.com/show/448095/person-circle.svg"
                    alt="guide"
                    className="h-10"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-gray-700 font-bold text-2xl">Guide</h2>
                  <p className="text-gray-700 text-sm font-bold bg-gray-100 rounded-lg py-1 px-2">
                    Tour Guide berbahasa Indonesia
                  </p>
                </div>
              </Link>

              <Link
                to={"https://getgoing.co.id/getinfo"}
                className="flex items-center gap-4 mb-4 lg:mb-12 transition-transform transform duration-300 hover:-translate-y-2 w-fit"
              >
                <div className="bg-gray-100 rounded-full p-3">
                  <img
                    src="https://www.svgrepo.com/show/513148/map.svg"
                    alt="map"
                    className="h-10"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-gray-700 font-bold text-2xl">Info</h2>
                  <p className="text-gray-700 text-sm font-bold bg-gray-100 rounded-lg py-1 px-2">
                    Info penting di luar negeri
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
