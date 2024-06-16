import Story from "./components/story/Story";
import StoryContext from "./contexts/StoryContext.jsx";
const { StoryProvider } = StoryContext;

function App() {
  return (
    <div className="container">
      <StoryProvider>
        <Story />
      </StoryProvider>
    </div>
  );
}

export default App;
