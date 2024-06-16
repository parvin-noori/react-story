import React, { useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import StoryContext from "@/contexts/StoryContext";
const { useStory } = StoryContext;
import { data } from "../../storyData";

export default function AvatarSwiper() {
  const swiperRef = useRef(null);
  const avatarIndex = () => {
    setIsDialogOpen(true);
    setSelectedIndex(swiperRef.current.clickedIndex);
  };
  const { endSlide, setSelectedIndex, setIsDialogOpen } = useStory();

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
      onSlideChange={(swiper) => {}}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {data.map((userStories, userIndex) => (
        <SwiperSlide key={userIndex}>
          <div
            className={`justify-center flex items-center story-animate relative w-[5.4rem] h-[5.4rem] before:content-[''] before:rounded-full before:absolute before:w-full before:h-full ${
              endSlide
                ? `before:bg-neutral-300 seen`
                : " before:bg-gradient-to-r before:from-fuchsia-600 before:rotate-[150deg] before:via-red-500 before:to-amber-300"
            }`}
          >
            <Avatar
              className="w-20 h-20  cursor-pointer border-4 border-white"
              onClick={avatarIndex}
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
