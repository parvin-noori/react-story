import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import SubSwiper from "./SubSwiper";
import { useRef, useState } from "react";

export default function NestedDialogSwiper({ data, setIsDialogOpen }) {
  const swiperRef = useRef(null);
  const [endSwiper, setEndSwiper] = useState(false);
  return (
    <Swiper
      className="mySwiper2"
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
      onSlideChange={() =>
        swiperRef.current.activeIndex === data.length - 1
          ? setEndSwiper(true)
          : null
      }
    >
      {data.map((story, index) => (
        <SwiperSlide key={index}>
          {({ isActive }) =>
            isActive ? (
              <SubSwiper
                story={story}
                swiperRef={swiperRef}
                endSwiper={endSwiper}
                setIsDialogOpen={setIsDialogOpen}
              />
            ) : (
              <img src={story.stories[0].url} />
            )
          }
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
