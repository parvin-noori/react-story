import "swiper/css";

// css
import "swiper/css";
import "swiper/css/navigation";
import { data } from "../../storyData";

import { useState } from "react";

import AvatarSwiper from "./AvatarSwiper";
import Modal from "./Dialog";

export default function Story() {

  // const [currentStoryIndex, setCurrentStoryIndex] = useState(null);
  // const handleSlide = () => {
  // setEndSlide(true);
  // setIsDialogOpen(false);
  // };
  // const handleStoryStart = (index) => {
  //   const currentUserSoty = data[0].stories;
  //   if (index === currentUserSoty - 1) {
  //     setEndSlide(true);
  //   }
  // };

  return (
    <div className="my-5">
      <AvatarSwiper
        data={data}
        // setIsDialogOpen={setIsDialogOpen}
        // setSelectedIndex={setSelectedIndex}
        // endSlide={endSlide}
        // selectedIndex={selectedIndex}
        // activeIndex={activeIndex}
      />
      <Modal
        // selectedIndex={selectedIndex}
        // isDialogOpen={isDialogOpen}
        data={data}
        // setEndSlide={setEndSlide}
        // setIsDialogOpen={setIsDialogOpen}
        // setActiveIndex={setActiveIndex}
      />
    </div>
  );
}
