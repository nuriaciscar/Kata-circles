import "./App.css";
import Circle from "./Circle.js";

function App() {
  const circles = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  return circles.map((circle) => <Circle key={circle.id} />);
}

export default App;
