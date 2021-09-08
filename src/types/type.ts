//  buyrsReducerType

export interface fullDataType {
    userDate: formDateType,
    bascet: buscetType
}

export interface formDateType {
    street: string;
    house: string;
    flat: string;
    firstNam: string;
    lastName: string;
    phone: string;
    mail: string;
}

export interface addBuyerType {
    type: "ADDBUYER",
    formData: formDateType,
    bascetData: buscetType
}

export interface adressType {
    street :string
    city : string
    house : number
    flat : number
}

export interface persType {
    firstName : string,
    lastName : string,
    phone : number,
    mail? : string 
}

//bascetReducerType

export interface buscetType {
    price: number,
    items: Array<item>
}

export interface item {
    name: string
    price: number
    img: string
    description: string
    count: number
    id: number
}

export type itemsData = {
    id: number
    img: string
    name: string
    items: Array<item>
}

export interface addItemToBuscetType {
    type: "ADDITEMTOBUSCET"
    item: item
}

export interface delItemToBuscetType {
    type: "DELITEMTOBUSCET"
    item: item
}

export interface continioAddItemToBuscet{
    type:"continioAddItemToBuscet"
    item: item 
}

export interface clearBasketType{
    type:"CLEAR__BASKET__TYPE"
}

export type actionsType = addItemToBuscetType | delItemToBuscetType | continioAddItemToBuscet  |  clearBasketType