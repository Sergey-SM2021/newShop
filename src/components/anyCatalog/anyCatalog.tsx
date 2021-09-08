import { useState } from "react"
import { FC } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { reducersType } from "../../store"
import Class from './anyCatalog.module.css'
import Item from "./anyItem/item"

interface useParamsType{
    id:string 
}

interface anyCatalogType{

}

const AnyCatalog : FC<anyCatalogType> = () => {
    let [stateValue,setState] = useState(Class.opacity0)
    const paramas = useParams<useParamsType>()
    const mainCollection = useSelector((state:reducersType)=>{return(state.mainReducer.find((collection)=>{return(collection.id === Number(paramas.id) )}))})
    
    let newArr = mainCollection?.items.map((el)=>{return(<Item id={el.id} key={el.id} description={el.description} count={el.count} img={el.img} name={el.name} price={el.price}/>)})

    return(<div className={Class.main}>
        <h1 className={Class.title}>{mainCollection?.name}</h1>
        <div className={Class.grid}>{newArr}</div>
    </div>)
}

export default AnyCatalog