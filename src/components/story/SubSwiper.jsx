import Stories from "react-insta-stories";
import "swiper/css/pagination";

export default function SubSwiper({
  story,
  swiperRef,
  endSwiper,
  setIsDialogOpen,
  setEndSlide,
}) {
  const handleNextSlide = () => {
    setEndSlide(true);
    // endSwiper ? setIsDialogOpen(false) : swiperRef.current.slideNext();
  };
  return (
    <Stories
      // style={{ zIndex: "1000000" }}
      defaultInterval={1500}
      width="100%"
      height="100%"
      stories={story.stories}
      onAllStoriesEnd={handleNextSlide}
      onStoryEnd={console.log()}
      // onStoryStart={handleStoryStart}
    />
  );
}
