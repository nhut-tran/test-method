import React, { useContext } from "react";
import { MethodContext } from "../context/MethodContext";

const MethodList = ({ setId, id }) => {
    const { methods, dispatch } = useContext(MethodContext);
    const handleDelete = (id) => {
        dispatch({
            type: "DELETE_METHOD",
            id
        })
    }
    const handleSelectedId = (selectedId) => {
        id ? setId('') : setId(selectedId)
    }
    const handleDisplayButton = (id, selectedID) => {
        if (id === selectedID) {
            return id ? "Hide" : "Detail";
        }
        return "Detail";
    }
    return (
        <div className="method-list">
            <ul>
                {
                    methods.map(method => {
                        return (
                            <li key={method.id}>
                                {method.name}
                                <button onClick={() => handleSelectedId(method.id)}>{handleDisplayButton()}</button>
                                <button onClick={() => handleDelete(method.id)}>Delete</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default MethodList;