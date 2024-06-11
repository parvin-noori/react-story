import React, { useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function AvatarSwiper({
  data,
  setIsDialogOpen,
  setSelectedIndex,
}) {
  const swiperRef = useRef(null);
  const avatarIndex = () => {
    setIsDialogOpen(true);
    setSelectedIndex(swiperRef.current.clickedIndex);
  };
  return (
    <Swiper
      spaceBetween={10}
      breakpoints={{
        0: {
          slidesPerView: 3,
        },
        400: {
          slidesPerView: 4,
        },
        780: {
          slidesPerView: 8,
        },
        998: {
          slidesPerView: 10,
        },
        1200: {
          slidesPerView: 13,
        },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {data.map((userStories, userIndex) => (
        <SwiperSlide key={userIndex}>
          <div className="justify-center flex">
            <Avatar className="w-20 h-20 cursor-pointer" onClick={avatarIndex}>
              <AvatarImage src={userStories.user.profileImage} />
              <AvatarFallback>
                {userStories.user.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
