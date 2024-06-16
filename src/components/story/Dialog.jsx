import { Dialog, DialogContent } from "@/components/ui/dialog";
import NestedDialogSwiper from "./NestedDialogSwiper";
import StoryContext from "@/contexts/StoryContext";
const { useStory } = StoryContext;

export default function Modal() {
  const { isDialogOpen, setIsDialogOpen } = useStory();
  return (
    <>
      <Dialog
        open={isDialogOpen}
        onOpenChange={(open) => {
          if (open) {
            setCurrentStoryIndex(userIndex);
            setIsDialogOpen(true);
          } else {
            setIsDialogOpen(false);
          }
        }}
      >
        <DialogContent className="max-w-full md:max-w-md max-h-full md:max-h-md top-0 md:top-1/2 translate-x-0 md:-translate-x-2/4 left-0 md:left-1/2 translate-y-0  md:-translate-y-2/4 bottom-0">
          <NestedDialogSwiper  />
        </DialogContent>
      </Dialog>
    </>
  );
}
