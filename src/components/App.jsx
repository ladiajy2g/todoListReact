import React from 'react';
import './App.css'
import Items from './theItems';
import itemsList from './itemsList';
import InputForm from './InputForm';



function createItem (myItems) {
    return (
        <Items
        key = {myItems.id}
        item = {myItems.item}
         />
    );
}

function App(props) {

    return(
        <div className="app-border">
            <div className="app-title">
                <h4>My To-Do List</h4>
            </div>
            <InputForm />
            {itemsList.map(createItem)}
            
        </div>
    )

}

export default App