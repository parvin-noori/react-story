import "swiper/css";

// css
import "swiper/css";
import "swiper/css/navigation";
import AvatarSwiper from "./AvatarSwiper";
import Modal from "./Dialog";

export default function Story() {
  return (
    <div className="my-5">
      <AvatarSwiper />
      <Modal  />
    </div>
  );
}
