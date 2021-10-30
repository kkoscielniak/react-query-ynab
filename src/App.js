import logo from "./logo.svg";
import "./App.css";
import {
  QueryClient,
  QueryClientProvider
} from "react-query";
import MainScreen from "./screens/main";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload. we
          </p>
          <MainScreen />
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
