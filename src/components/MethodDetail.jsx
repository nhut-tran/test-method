import React, { useContext } from "react";
import { MethodContext } from "../context/MethodContext";


const MethodDetail = ({ id }) => {
    const { methods } = useContext(MethodContext);
    const selectedMethod = methods.find((m) => m.id === id)

    if (selectedMethod) {
        return (
            <div>
                <h3>{selectedMethod.name}</h3>
                <p>{selectedMethod.type}</p>
                <p>{selectedMethod.target}</p>
            </div>
        )
    }
    return <div>Method Not exist</div>

}

export default MethodDetail;