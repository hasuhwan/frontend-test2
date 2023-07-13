import "./App.css";
import FirstStep from "./FirstStep";
import { order } from "./elements/mapping";
const step = 0;
function App() {
  return (
    <div className="App w-full h-full bg-whiteColor p-[10px]">
      <FirstStep step={step} order={order} />;
    </div>
  );
}

export default App;
