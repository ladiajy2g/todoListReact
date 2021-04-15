import React from 'react';

function InputForm(props){
    return(
        <form>
            <div className="app-input row">
            <input type="text"  placeholder="Enter Item" value={props.value}/>
            <button className="btn btn-primary">Add</button>
            </div>
            </form>
    );
}

export default InputForm;