import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Swiper, SwiperSlide } from "swiper/react";

import { useState } from "react";
import Stories from "react-insta-stories";

const data = [
  {
    user: {
      name: "user 1",
      profileImage: "imgs/luigi.png",
    },
    stories: [
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
    ],
  },
  {
    user: {
      name: "user 2",
      profileImage: "imgs/luigi.png",
    },
    stories: [
      {
        url: "imgs/luigi.png",
        duration: 5000,
        header: {
          heading: "Mohit Karekar",
          subheading: "Posted 30m ago",
          profileImage: "imgs/luigi.png",
        },
      },
    ],
  },
];

export default function StoryAvatar() {
  const [endSlide, setEndSlide] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(null);
  const handleSlide = () => {
    setEndSlide(true);
    setIsDialogOpen(false);
  };
  const handleStoryStart = (index) => {
    const currentUserSoty = data[currentStoryIndex].stories;
    if (index === currentUserSoty - 1) {
      setEndSlide(true);
    }
  };

  return (
    <div className={`my-5 ${endSlide ? `end` : ""}`}>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
      >
        {data.map((userStories, userIndex) => (
          <SwiperSlide>
            <Dialog
              key={userIndex}
              open={isDialogOpen && currentStoryIndex === userIndex}
              onOpenChange={(open) => {
                if (open) {
                  setCurrentStoryIndex(userIndex);
                  setIsDialogOpen(true);
                } else {
                  setIsDialogOpen(false);
                }
              }}
            >
              <DialogTrigger>
                <Avatar className="w-20 h-20">
                  <AvatarImage src={userStories.user.profileImage} />
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
                      stories={userStories.stories}
                      onAllStoriesEnd={handleSlide}
                      onStoryStart={handleStoryStart}
                    />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
