import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import SubSwiper from "./SubSwiper";
import { useRef } from "react";

export default function NestedDialogSwiper({ data }) {
  const swiperRef = useRef(null);


  return (
    <Swiper
      className="mySwiper2"
      ref={swiperRef}
      onSlideChange={()=>console.log('slide change')}
    >
      {data.map((story, index) => (
        <SwiperSlide key={index}>
          {({ isActive }) =>
            isActive ? (
              <SubSwiper story={story} swiperRef={swiperRef}/>
            ) : (
              <img src={story.stories[0].url} />
            )
          }
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
