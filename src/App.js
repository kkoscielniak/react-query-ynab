import "./App.css";
import {
  QueryClient,
  QueryClientProvider
} from "react-query";
import MainScreen from "./screens/MainScreen";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <MainScreen />
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
