import { clearBasketType } from './../types/type';
import { item, buscetType, continioAddItemToBuscet } from '../types/type';
import { actionsType, delItemToBuscetType, addItemToBuscetType } from '../types/type'

const buscet: buscetType = {
    price: 0,
    items: [
    ]
}

export const addItemToBuscet = (item: item): addItemToBuscetType => {
    return { type: "ADDITEMTOBUSCET", item: item }
}

export const delItemToBuscet = (item: item): delItemToBuscetType => {
    return { type: "DELITEMTOBUSCET", item }
}

export const cAddItemToBuscet = (item: item): continioAddItemToBuscet => {
    return { type: "continioAddItemToBuscet", item: item }
}

export const clearBasketAC = (): clearBasketType => {
    return { type: "CLEAR__BASKET__TYPE" }
}


const buscetReducer = (state = buscet, action: actionsType): buscetType => {
    let stateCopy = { ...state }
    switch (action.type) {
        case "ADDITEMTOBUSCET":
            let arrOfBascetId = stateCopy.items.map((el) => { return (el.id) })
            if (arrOfBascetId.find((id) => { return (id == action.item.id) }) != undefined) {
                let active = stateCopy.items.find((el) => { return (el.id == action.item.id) })
                active!.count = active!.count + 1
                stateCopy.price += action.item.price
            } else {
                action.item.count = 1
                stateCopy.items.push(action.item)
                stateCopy.price = stateCopy.price + action.item.price
            }
            return (stateCopy)
        case "DELITEMTOBUSCET":
            if (action.item.count == 1) {
                let a = stateCopy.items.find((el) => { return (el.id == action.item.id) })
                // @ts-ignore
                let elId = stateCopy.items.indexOf(a)
                stateCopy.items.splice(elId, 1)
                stateCopy.price -= action.item.price
            } else {
                let el = stateCopy.items.find((it) => { return (it.id == action.item.id) })
                el!.count = el!.count - 1
                stateCopy.price -= action.item.price
            }
            return (stateCopy)
        case "continioAddItemToBuscet":
            stateCopy.items.find((e) => { return (e.id == action.item.id) })!.count++
            stateCopy.price += action.item.price
            return (stateCopy)
        case "CLEAR__BASKET__TYPE":
            stateCopy.price = 0
            stateCopy.items = []
            return(stateCopy)
        default:
            return (stateCopy)
    }
}

export default buscetReducer