import { useState } from "react";
import "./to-do-list.css";
 import DeleteItem from "./delete-item";
export function ToDoList(){

    const[inputList, setInputList] = useState("");
    const[items, setItems] = useState([]);
    
    const handleListChange = (e) =>
        { 
            setInputList(e.target.value)
        };
        const listOfItems = () =>
            {
               setItems((oldItems)=>{
                    return[...oldItems, inputList];
               });
               setInputList("");
            };
            const removeItem = (id) =>{
                console.log('deleted');

                setItems((oldItems) => {
                    return oldItems.filter((arrElm, index) =>{
                        return index !== id;
                    });
                });
            }
             

    return(
        <div className="main-content">
            <div className="inner-content">
                <h1>ToDoList</h1>
                <input type="text" placeholder="Add a items" onChange={handleListChange} value={inputList}/>
                <button onClick={listOfItems}>+</button>
                <ol>
                    
                       {/* <li>{inputList}</li>*/}

                     { 
                        items.map((itemval, index)=>{
                           return <DeleteItem key = {index}
                           id = {index}
                            text = {itemval}
                            onSelect = {removeItem}
                            />
                        })
                            
                          
                     }
                    
                </ol>
            </div>

        </div>
    )
}