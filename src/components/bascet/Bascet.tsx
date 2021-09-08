import { Button } from "antd"
import React from "react"
import { useState } from "react"
import { FC } from "react"
import { useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import { reducersType } from "../../store"
import Class from './Buscet.module.css'
import Item from "./item/item"

const Bascet:FC = () => {
    const buscet = useSelector((state: reducersType) => { return (state.buscetReducer) })
    let [value,setValue] = useState(2)

    const arr = buscet.items.map((el)=>{return(<Item setState={el} count={el.count} key={el.id} img={el.img} Name={el.name} price={el.price} id={el.id} />)})
    if(value === 1){return <Redirect to="/authorization"/>}
    return(<div>
        <h1 className={Class.title}>Корзина</h1>
        <div className={Class.flex}>{arr}</div>
        <Button type="primary" onClick={()=>{setValue(1)}} className={Class.btm}>{buscet.price}</Button >
    </div>)
}


const BascetContainer: React.FC = () => {

    const buscet = useSelector((state: reducersType) => { return (state.buscetReducer) })
    return (<div>
        {buscet.price == 0 ? <div>Пока корзина пуста</div> : <Bascet/> }
    </div>)
}
export default BascetContainer