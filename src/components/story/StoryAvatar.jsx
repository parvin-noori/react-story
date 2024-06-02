import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState } from "react";
import Stories from "react-insta-stories";

const stories = [
  {
    url: "imgs/mario.png",
    duration: 5000,
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 30m ago",
      profileImage: "imgs/luigi.png",
    },
  },
  {
    url: "imgs/luigi.png",
    duration: 5000,
    header: {
      heading: "Mohit Karekar",
      subheading: "Posted 30m ago",
      profileImage: "imgs/luigi.png",
    },
  },
];

export default function StoryAvatar() {
  const [endSlide, setEndSlide] = useState(false);
  const handleSlide = () => {
    setEndSlide(true);
  };
  return (
    <div className={`my-5 ${endSlide ? `end` : ""}`}>
        <Dialog>
          <DialogTrigger>
            <Avatar className="w-20 h-20">
              <AvatarImage src="imgs/luigi.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogDescription>
                <Stories
                  defaultInterval={1500}
                  width={432}
                  height={368}
                  stories={stories}
                  onAllStoriesEnd={handleSlide}
                />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
    </div>
  );
}
