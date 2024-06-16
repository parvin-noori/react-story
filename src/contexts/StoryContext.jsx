import React, { createContext, useContext, useState } from "react";

// Create the context
const StoryContext = createContext();

// Create a provider component
const StoryProvider = ({ children }) => {
  const [endSlide, setEndSlide] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [endSwiper, setEndSwiper] = useState(false);

  const value = {
    endSlide,
    setEndSlide,
    isDialogOpen,
    setIsDialogOpen,
    selectedIndex,
    setSelectedIndex,
    activeIndex,
    setActiveIndex,
    endSwiper,
    setEndSwiper,
  };

  return (
    <StoryContext.Provider value={value}>{children}</StoryContext.Provider>
  );
};

// Custom hook to use the StoryContext
const useStory = () => {
  const context = useContext(StoryContext);
  if (context === undefined) {
    throw new Error("useStory must be used within a StoryProvider");
  }
  return context;
};
export default {
  StoryProvider,
  useStory,
};
