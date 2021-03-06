import React, {useState} from 'react';
import Items from './theItems'

function InputForm(){

    const [inputText, setInputText] = useState('');
    const [itemsInputs, setItemsInputs] = useState([]);

    function handleChange(event){
        const newValue = event.target.value;
        setInputText(newValue);

        
    }

    function addItem(e){
        setItemsInputs(
            prevItems =>{
                return [...prevItems, inputText];
            }
        );

        setInputText('');
        
        e.preventDefault();
    }

    function deleteItem (id){
        setItemsInputs(
            (prevItems) =>{
                return prevItems.filter((item, index) =>{
                    return index !== id;
                })
            }
        )
    }

        return(
        <div>
            <form >
            <div className="app-input row">
            <input onChange={handleChange} type="text"  placeholder="Enter your Item" value={inputText}/>
            <button onClick={addItem} className="btn btn-primary">Add</button>
            </div>
            </form>
            <div>
            {itemsInputs.map((itemText, index) => (
                <Items
                    key = {index}
                    id = {index}
                    theText = {itemText}
                    onChecked={deleteItem}
             />
            ))}
            </div>
        </div>
    );
}

export default InputForm;