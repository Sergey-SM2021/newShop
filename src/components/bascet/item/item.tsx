import { FC } from "react";
import { useDispatch } from "react-redux";
import Class from "./item.module.css"
import {cAddItemToBuscet, delItemToBuscet} from '../../../store/buscetReducer'
import {Button  } from "antd"
import { CaretUpOutlined , CaretDownOutlined  } from '@ant-design/icons';

interface itemType {
    img: string
    Name: string
    price: number
    id: number
    count: number
    setState:any
}

const Item: FC<itemType> = (props:itemType) => {
    const d = useDispatch()
    const onAddClick = () => {
        d(cAddItemToBuscet({description:"", img: props.img, name: props.Name, price: props.price, id: props.id, count: props.count }))
    }

    const onDeliteClick = () => {
        d(delItemToBuscet({description:"", img: props.img, name: props.Name, price: props.price, id: props.id, count: props.count }))
    }
    


    return (<div className={Class.main}>
        <div className={Class.title}>{props.Name}</div>
        <div className={Class.img__box}><img className={Class.img__inner} src={props.img}></img></div>
        <div className={Class.price}>{props.price}</div>
        <CaretUpOutlined onClick={onAddClick}/>
        <div className={Class.count}>{props.count}</div>
        <CaretDownOutlined onClick={onDeliteClick}/>
    </div>)
}

export default Item