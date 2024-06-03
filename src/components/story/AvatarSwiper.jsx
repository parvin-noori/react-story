import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function AvatarSwiper({ data, setIsDialogOpen }) {
  return (
    <Swiper
      spaceBetween={2}
      slidesPerView={10}
      onSlideChange={() => console.log("slide change")}
    >
      {data.map((userStories, userIndex) => (
        <SwiperSlide key={userIndex}>
          <div className="justify-center flex">
            <Avatar
              className="w-20 h-20 cursor-pointer"
              onClick={() => setIsDialogOpen(true)}
            >
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
