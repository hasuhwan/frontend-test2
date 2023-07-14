import SquareDrawing from "./SquareDrawing";
import { mapping } from "./data/mapping";
function App() {
  return (
    <div className="App w-full h-full grid grid-cols-4 grid-rows-4 gap-[4px] bg-whiteColor p-[10px]">
      {mapping.value ? <SquareDrawing step={mapping} /> : null}
    </div>
  );
}

export default App;
