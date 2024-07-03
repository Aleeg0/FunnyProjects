import React from 'react';
import Users from "./Components/Users";

function App() {
    return (
        <div className="app">
            <Users isLoading={false}/>
        </div>
    );
}

export default App;
