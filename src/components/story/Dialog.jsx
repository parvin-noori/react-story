import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import NestedDialogSwiper from "./NestedDialogSwiper";

export default function Modal({
  data,
  isDialogOpen,
  setIsDialogOpen,
  selectedIndex,
  setEndSlide,
}) {
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
          <DialogContent>
        <div className="w-full h-full">
            {/* <DialogHeader>
              <DialogDescription> */}
                <NestedDialogSwiper
                  data={data}
                  setIsDialogOpen={setIsDialogOpen}
                  selectedIndex={selectedIndex}
                  setEndSlide={setEndSlide}
                />
              {/* </DialogDescription>
            </DialogHeader> */}
        </div>
          </DialogContent>
      </Dialog>
    </>
  );
}
