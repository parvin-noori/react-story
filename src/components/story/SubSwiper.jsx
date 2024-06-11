import Stories from "react-insta-stories";
import "swiper/css/pagination";

export default function SubSwiper({
  story,
  swiperRef,
  endSwiper,
  setIsDialogOpen,
}) {
  const handleNextSlide = () => {
    endSwiper ? setIsDialogOpen(false) : swiperRef.current.slideNext();
  };
  return (
    <Stories
      style={{ zIndex: "1000000" }}
      defaultInterval={1500}
      width={432}
      height={368}
      stories={story.stories}
      onAllStoriesEnd={handleNextSlide}
      // onStoryStart={handleStoryStart}
    />
  );
}
