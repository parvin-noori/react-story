import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import NestedDialogSwiper from "./NestedDialogSwiper";

export default function Modal({ data, isDialogOpen, setIsDialogOpen,selectedIndex
  
 }) {
  return (
    <>
      <Dialog
        open={isDialogOpen}
        className="overflow-hidden"
        style={{
          width: "80vw", // Adjust to your needs
          height: "80vh", // Adjust to your needs
          maxWidth: "80vw",
          maxHeight: "80vh",
        }}
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
          <DialogHeader>
            <DialogDescription>
              <NestedDialogSwiper
                data={data}
                setIsDialogOpen={setIsDialogOpen}
                selectedIndex={selectedIndex}
              />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
