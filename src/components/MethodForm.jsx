import React, { useContext, useState } from "react";
import { MethodContext } from "../context/MethodContext";
import { v4 as uuidv4 } from 'uuid';
const MethodForm = () => {
    const [method, setMethod] = useState({ name: "", type: "", target: "" })
    const { dispatch } = useContext(MethodContext);

    const handleChange = (property, value) => {
        setMethod((prevState) => {
            return {
                ...prevState,
                [property]: value
            }
        })
    }
    const handleSubmit = () => {
        dispatch({
            type: "ADD_METHOD",
            id: uuidv4(),
            methodName: method.name,
            methodTarget: method.target,
            methodType: method.type
        });
    }
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
        }} >
            <label htmlFor="methodName">Method Name</label>
            <input type='text' id="name" name="methodName" value={method.name} onChange={(e) => handleChange(e.target.id, e.target.value)} />
            <label htmlFor="methodType">Method Type</label>
            <select id="type" name="methodType" value={method.type} onChange={(e) => handleChange(e.target.id, e.target.value)}>
                <option value="">--Select method Type</option>
                <option value="quantitative">Quantitative</option>
                <option value="qualitative">Qualitative</option>
            </select>
            <label htmlFor="methodTarget">Method target</label>
            <input type='text' id="target" name="methodTarget" value={method.target} onChange={(e) => handleChange(e.target.id, e.target.value)} />
            <input type='submit' value="Add new method" />
        </form>
    )
}

export default MethodForm;