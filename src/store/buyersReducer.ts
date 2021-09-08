import { buscetType, fullDataType,formDateType,addBuyerType } from "../types/type"

let initState: Array<fullDataType> = []

export const addBuyer = (formData: formDateType, bascetData: buscetType): addBuyerType => {
    return ({ type: "ADDBUYER", formData, bascetData })
}

const buyersReducer = (state = initState, action: addBuyerType): Array<fullDataType> => {
    let stateCopy = [ ...state ]
    switch (action.type) {
        case "ADDBUYER":
            stateCopy.push({bascet : action.bascetData,userDate:action.formData})
            console.log(stateCopy)
            return (stateCopy)
        default:
            return (stateCopy)
    }
}

export default buyersReducer
