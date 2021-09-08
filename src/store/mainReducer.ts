import {itemsData} from '../types/type'

const Allitems : itemsData[] = [
    {
        id: 0,
        img: "http://lozhka-povarezhka.ru/wp-content/uploads/2020/07/Kukhni-mira-5.jpg",
        name: "Домашняя кухня",
        items:
            [
                {
                    name: "Борщ",
                    price: 350,
                    img: "https://for-cheese.ru/wp-content/uploads/2020/02/89u14jojo12ci4j2.jpg",
                    description: "",
                    count: 10,
                    id: 0,
                },
                {
                    name: "Курица",
                    price: 490,
                    img: "https://streamerium.com/img/recipes/79/7-fat-burning-ways-make-chicken.jpg",
                    description: "",
                    count: 7,
                    id: 1,
                },
                {
                    name: "Пельмени",
                    price: 300,
                    img: "https://fb.ru/misc/i/gallery/68658/2330070.jpg",
                    description: "",
                    count: 4,
                    id: 2,
                },
                {
                    name: "Салат Цезарь",
                    price: 190,
                    img: "https://donatewales.org/wp-content/uploads/d/9/f/d9f8d39f5c38c760ba7bbf1b306eb68f.jpeg",
                    description: "",
                    count: 20,
                    id: 3,
                },
            ]
    },
    {
        id:1,
        img: "https://static.tildacdn.com/tild6461-3239-4537-b263-346438376137/800xc8333_web_2.jpg",
        name: "Сладости",
        items:
            [
                {
                    name: "Рахат-лукум",
                    price: 210,
                    img: "https://images.ru.prom.st/716364590_w640_h640_rahat-lukum-koska-s.jpg",
                    description: "",
                    count: 3,
                    id: 4,
                },
                {
                    name: "Пахлава",
                    price: 120,
                    img: "https://legkovmeste.ru/wp-content/uploads/2019/02/post_5c6d5e2a10218.jpg",
                    description: "",
                    count: 7,
                    id: 5,
                },
                {
                    name: "Клюква",
                    price: 90,
                    img: "https://i2.wp.com/vkus-traditsyi.ru/wp-content/uploads/2020/11/Kljukva-v-sahare.jpg?fit=1000%2C630&ssl=1",
                    description: "",
                    count: 4,
                    id: 6,
                },
            ]
    }
    
]

const mainReducer = (state = Allitems, action: any) : itemsData[] => {
    return(state)
}

export default mainReducer