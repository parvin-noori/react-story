import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import SubSwiper from "./SubSwiper";
import { useRef, useState } from "react";
import StoryContext from "@/contexts/StoryContext";
const { useStory } = StoryContext;

export default function NestedDialogSwiper({ data }) {
  const { selectedIndex, setActiveIndex, setEndSwiper } = useStory();
  const swiperRef = useRef(null);

  return (
    <Swiper
      style={{ zIndex: "0" }}
      className="mySwiper2"
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
        setActiveIndex(swiper.activeIndex);
      }}
      onSlideChange={(swiper) => {
        if (swiper) {
          setActiveIndex(swiper.activeIndex);
          swiper.activeIndex === data.length - 1 ? setEndSwiper(true) : null;
        }
      }}
      initialSlide={selectedIndex}
    >
      {data.map((story, index) => (
        <SwiperSlide key={index}>
          {({ isActive }) =>
            isActive ? (
              <SubSwiper story={story} swiperRef={swiperRef} />
            ) : (
              <img src={story.stories[0].url} />
            )
          }
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
