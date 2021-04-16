import React from 'react';

function Items (props){

    // const [myDecor, setMyDecor] = useState(false);

    // function handleClick(checkbox){
    //     setMyDecor((prevValue)=>{
    //         return !prevValue;
    //     })
    // }

    // function handleChange(checkbox){
    //     if(checkbox.checked === true) {
    //         document.getElementById('listBox').removeAttribute('disabled');
    //     } else{
    //         document.getElementById('listBox').removeAttribute('disabled', 'disabled');
    //     }
    // }

    return(
        <div>
            <div
            onClick={()=>{
                props.onChecked(props.id);
            }}
             className="app-items">
             <ul>
                 <li>{props.theText}</li>
             </ul>

            {/* <input onChange={handleClick} style={{textDecoration: myDecor ? 'line-through' : 'none'}}  id='listBox' type='checkbox' /> 
                    <label style={{textDecoration: myDecor ? 'line-through' : 'none'}} > {props.theText} </label> */}

            </div>
        </div>
    )
};

export default Items;