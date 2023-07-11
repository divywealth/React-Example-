import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ListDetails(props) {
    const todos = useSelector((state) => state.todos)
    let {id} = useParams()
    let [name, setName] = useState('')
    let [item, setItem] = useState({})
    const Get_Single_Data = () => {
        const fun = todos.find((todo) => todo.id === id)
        setItem(fun)
        setName('Divine')
        
    }
    useEffect(() => {
        Get_Single_Data()
    }, [])
    return (
        <div>
            <h1>Hi List Details</h1>
            <p>{item.text}</p>
        </div>
    );
}

export default ListDetails;