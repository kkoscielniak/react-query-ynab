import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider, useQuery, useQueryClient } from "react-query";

function App() {
  const API_KEY =
    "32fe59082468840596c6e1b28e7e5d2109a9c9abf8f19efe9e9a78ea926d269f";
  const ENDPOINT = "https://api.youneedabudget.com/v1";

  // const queryClient = useQueryClient(); 

  // const { data, isLoading, isSuccess, error } = useQuery(`budgets`, async () => {
  //   const response = await fetch(`${ENDPOINT}/budgets`);
  //   const response2 = await response.json() 
  //   console.log(response2); 
    
  // });

  // const queryClient = QueryClient();

  const handleButton = async () => {
    const response = await fetch(`${ENDPOINT}/budgets`, {
      headers: {
        'Content-Type': 'application/json', 
        // body: JSON.stringify({})
        'Authorization': `bearer ${API_KEY}`
      }
    });
    const response2 = await response.json() 
    console.log(response2);  
  };

  return (
    // <QueryClientProvider queryClient={queryClient}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload. we
          </p>
          <a
            className="App-link"
            href="#"
            onClick={handleButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    // </QueryClientProvider>
  );
}

export default App;
