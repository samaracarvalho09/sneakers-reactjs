import { CartContextProvider } from "./context/Cart";
import { RoutesApp } from "./routes";

function App() {
  return (
    <CartContextProvider>
      <div style={{ color: "black" }}>
        <button
          onClick={() => {
            localStorage.setItem("age", Math.random());
          }}
        >
          add
        </button>
      </div>
      <RoutesApp />
    </CartContextProvider>
  );
}

export default App;
