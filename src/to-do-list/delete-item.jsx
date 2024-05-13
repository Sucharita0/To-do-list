
const DeleteItem = (props) =>{

   
    
    return (
        <>
        <div className="todoStyle">
            <span className="bi bi-trash-fill"
             onClick={() =>{
                props.onSelect(props.id);
             }}></span>
        <li>{props.text}</li>
        </div>
        </> 
    )
}

export default DeleteItem;