import "./App.css";
import { TodoWrapper } from "./components/TodoWrapper";

function App() {
  const numberOfCards = 3;
  return (
    <div className="Main">
      {Array(numberOfCards)
        .fill()
        .map((_, index) => (
          <div key={index}>
            <h2>Day: {index + 1}</h2>
            <TodoWrapper key={index} />
          </div>
        ))}
    </div>
  );
}

export default App;
