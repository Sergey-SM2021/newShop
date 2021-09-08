import Reducer from './buscetReducer'
import State from './state'
import { delItemToBuscet } from './buscetReducer'

test('should ', () => {
    let newState = Reducer(State, delItemToBuscet({
        name: "Борщ",
        price: 350,
        img: "https://for-cheese.ru/wp-content/uploads/2020/02/89u14jojo12ci4j2.jpg",
        description: "",
        count: 10,
        id: 0,
    }
    ))
    expect(newState.buscet.items.length).toBe(2)
    expect(newState.buscet.items[0].count).toBe(4)
    expect(newState.buscet.items[1].count).toBe(3)
    expect(newState.buscet.price).toBe(2030)
})
