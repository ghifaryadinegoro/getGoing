import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import TestimonyCard from "./TestimonyCard";
import testimonies from "../db/testimonies";
import { useState, useRef } from "react";

export default function TestimonySection(props) {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative container mx-auto px-4 py-16">
      <img
        src="https://getgoing.co.id/content/img/icon/quote.png"
        alt="quote"
        className="absolute top-0 -left-5  lg:-left-10 -z-50 w-40 h-40"
      />
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-16">
        <div className="w-full lg:w-1/2">
          <Swiper
            modules={[Navigation, Controller]}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className="h-full flex flex-col"
            onSwiper={setFirstSwiper}
            controller={{ control: secondSwiper }}
          >
            {testimonies.map((testimony) => (
              <SwiperSlide key={testimony.id}>
                <div className="flex flex-col">
                  <h3 className="text-2xl font-bold mb-4">{testimony.title}</h3>
                  <p className="text-md text-[#919ab0] max-w-2xl">
                    {testimony.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex gap-2">
            <button
              ref={prevRef}
              className="w-9 h-9 rounded-full bg-[#f4f4f7] hover:bg-[#cc0000] focus:bg-[#cc0000] focus:ring-2 focus:ring-[#f4abb0] transition-colors duration-300 flex items-center justify-center"
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFASURBVHgBvdY9TsMwFAfw/7ODGFi6IL5pKnGAjIzhBr1CT8DIWm7SIzQXSGGrqFS6MpEBRMZwAGycAGlo82FLdv9T8p6tn14iR+EwTBCEwWn/6u7o8PIlTZNMd58Hg+QI2+MzSNlj+6ynSiPdvUx3YYkQcgBCUgSDaE20iaiJRqtFPIVBqGtBHbJcxBMYhnaBtEI2kUbINlILuUC2IFfIP8glUkIK8RXyXCK5AySwFIKcFAeWeWxYRX6a8GEpUtKwgIQnpiTYLYH8314GkkYnvxUCRet3dB36CputMTlePsX3sBT+d5G+JdnxRT+CGlNh6jFSeHI2wMf76yMshFdvXGJ8s+AK43VFFxhvatjGeFvTJsa7FtjCOqFG7HzwqbA5NKP9c7KaPySSiRsJmRQFQT4Mog1VMaG+7OLga2yy9xtwpMS2CCGWBgAAAABJRU5ErkJggg=="
                alt="left-arrow"
                className="w-3 h-3"
              />
            </button>
            <button
              ref={nextRef}
              className="w-9 h-9 rounded-full bg-[#f4f4f7] hover:bg-[#cc0000] focus:bg-[#cc0000] focus:ring-2 focus:ring-[#f4abb0] transition-colors duration-300 flex items-center justify-center"
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEqSURBVHgBtdVNSgMxFAfwl7wygiDMphQV7IAeIAi6tX4coEfQG7hzqTfwCOIJxBN0li67daOzKZ1duy6dvibttHTVvpekf5ghjyHzY5JJgiCMMR1z0r54aTXPfsuyGHP6aBAGE/wAomedYM+CGaePGKkUfdbNjAshCFMO/n+OT8+VbXbslSrU3Vaz/b1t6MSIy3Dwl0sgL0QKeSMSKAjhQsEIB4qC7IIURM7l9cMbAL3WZTGbVLdq+eD+i+yOAZFiX5ptlIWyKza1K3cEe8ziS8zV3aPWcAMxQiq19+66BOhHnRM3Kpg0egRkVgAd1nOyT6Cf53H+rm2Aq4ORXUAwwgGCEC7gjUgAL0QKuIjPeH2A7xLAC6F6X+ICLg0QhlT1RFM0cFTlHMBlDmmr0ADzx9CjAAAAAElFTkSuQmCC"
                alt="right-arrow"
                className="w-3 h-3"
              />
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-sm lg:max-w-lg lg:max-w-xl">
            <Swiper
              modules={[Controller]}
              slidesPerView={1}
              className="h-full"
              onSwiper={setSecondSwiper}
              controller={{ control: firstSwiper }}
            >
              {testimonies.map((testimony) => (
                <SwiperSlide key={testimony.id}>
                  <TestimonyCard testimony={testimony} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
