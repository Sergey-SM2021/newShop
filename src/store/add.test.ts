import {addItemToBuscet} from "./buscetReducer"
import Reducer from './buscetReducer'
import initializationState from './state'

// test('Item in buscet shuld increase', () => {
//     let NewState = Reducer(initializationState,addItemToBuscet({
//         name: "Борщ",
//         price: 350,
//         img: "https://for-cheese.ru/wp-content/uploads/2020/02/89u14jojo12ci4j2.jpg",
//         description: "",
//         count: 10,
//         id: 0,
//     }))
//     expect(NewState.buscet.items.length).toBe(1)
//     expect(NewState.buscet.items[0].price).toBe(700)
//     expect(NewState.buscet.items[0].count).toBe(2)
// })

// test('Item in buscet shuld increment', () => {
//     let NewState = Reducer(initializationState,addItemToBuscet({
//         name: "Курица",
//         price: 490,
//         img: "https://streamerium.com/img/recipes/79/7-fat-burning-ways-make-chicken.jpg",
//         description: "",
//         count: 7,
//         id: 1,
//     }))
//     expect(NewState.buscet.items.length).toBe(2)
//     expect(NewState.buscet.items[0].price).toBe(350)
//     expect(NewState.buscet.items[0].count).toBe(1)
//     expect(NewState.buscet.items[1].count).toBe(1)
//     expect(NewState.buscet.items[1].price).toBe(490)
// })
