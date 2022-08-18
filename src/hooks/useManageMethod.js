import { useReducer } from "react";


const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_METHOD":
            return [...state, { id: action.id, name: action.methodName, type: action.methodType, target: action.methodTarget }];
        case "DELETE_METHOD":
            return state.filter(method => method.id !== action.id);
        default:
            return [];
    }
}
const useManageMethod = (state, initFunction) => {
    return useReducer(reducer, state, initFunction);
}
export default useManageMethod;
