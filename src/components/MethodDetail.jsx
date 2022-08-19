import React, { useContext } from "react";
import { MethodContext } from "../context/MethodContext";


const MethodDetail = ({ id }) => {
    const { methods } = useContext(MethodContext);
    const selectedMethod = methods.find((m) => m.id === id)
    return (
        <div className="method-detail">
            {selectedMethod ?
                <>
                    <h3>Method Name: {selectedMethod.name}</h3>
                    <p>Method target: {selectedMethod.target}</p>
                    <p>Method type: {selectedMethod.type}</p>
                </> : "Click detail button to show"

            }
        </div>
    )


}

export default MethodDetail;