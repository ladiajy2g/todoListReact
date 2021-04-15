import React from 'react';

function Items (props){
    return(
        <div>
            <div className="app-items">
                <ul>
                    <li>{props.theText}</li>
                </ul>
            </div>
        </div>
    )
};

export default Items;