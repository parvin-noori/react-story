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
        // className="overflow-hidden sm:w-full sm:h-full md:w-6/12 md:h-6/12"
        // style={{
        //   width: "80vw", // Adjust to your needs
        //   height: "80vh", // Adjust to your needs
        //   maxWidth: "80vw",
        //   maxHeight: "80vh",
        // }}
        onOpenChange={(open) => {
          if (open) {
            setCurrentStoryIndex(userIndex);
            setIsDialogOpen(true);
          } else {
            setIsDialogOpen(false);
          }
        }}
      >
        {/* <div className="sm:w-full sm:h-full md:w-6/12 md:h-6/12"> */}
          <DialogContent>
            <DialogHeader>
              <DialogDescription>
                <NestedDialogSwiper
                  data={data}
                  setIsDialogOpen={setIsDialogOpen}
                  selectedIndex={selectedIndex}
                  setEndSlide={setEndSlide}
                />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        {/* </div> */}
      </Dialog>
    </>
  );
}
