import React from 'react';
import './App.css';
import Shop from "./components/Shop";
import {QueryClient, QueryClientProvider} from "react-query";

function App() {
    const client = new QueryClient();
    return (
        <QueryClientProvider client={client}>
            <div className="App">
                <Shop/>
            </div>
        </QueryClientProvider>
    );
}

export default App;
