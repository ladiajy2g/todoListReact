import React from 'react';
import './App.css'
import InputForm from './InputForm';


function App() {

    return(
        <div className="app-border">
            <div className="app-title">
                <h4>My To-Do List</h4>
            </div>
            <InputForm />
            
        </div>
    )

}

export default App