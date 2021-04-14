import React from 'react';
import './App.css'

function App() {

    return(
        <div className="app-border">
            <div className="app-title">
                <h3>My To-Do List</h3>
            </div>
            <div className="app-input">
            <form className="row">
            <input type="text"  placeholder="Enter Item"/>
            <button className="btn btn-primary">Add</button>
            </form>
            </div>
            <div className="app-items">
                <ul>
                    <li>Go to school</li>
                    <li>Do assignment</li>
                    <li>Visit friends</li>
                </ul>
            </div>
            
        </div>
    )

}

export default App