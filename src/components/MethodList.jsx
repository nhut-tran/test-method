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
    //ensure only click the Hide/Detail button of select method to Hide displayed method
    const handleSelectedId = (selectedId) => {

        if (id && id === selectedId) {
            setId('')
        } else {
            setId(selectedId)
        }

    }

    return (
        <div className="method-list">

            {
                methods.length > 0 ? methods.map(method => {
                    return (
                        <div className="method-container" key={method.id}>
                            <h2> {method.name}</h2>
                            <div className="button-group">
                                <button className="button-primary" onClick={() => {

                                    handleSelectedId(method.id)

                                }}>{id === method.id ? (id ? "Hide" : "Detail") : "Detail"}</button>
                                <button className="button-danger" onClick={() => handleDelete(method.id)}>Delete</button>
                            </div>
                        </div>
                    )
                }) : <div>There is 0 method now. Let's add some methods!</div>
            }

        </div>
    )
}

export default MethodList;