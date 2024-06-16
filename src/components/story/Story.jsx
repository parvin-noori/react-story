import "swiper/css";

// css
import "swiper/css";
import "swiper/css/navigation";
import { data } from "../../storyData";
import AvatarSwiper from "./AvatarSwiper";
import Modal from "./Dialog";

export default function Story() {
  return (
    <div className="my-5">
      <AvatarSwiper data={data} />
      <Modal data={data} />
    </div>
  );
}
