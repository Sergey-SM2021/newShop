import { FC } from "react"
import { useDispatch } from "react-redux"
import Class from './item.module.css'
import {addItemToBuscet} from "../../../store/buscetReducer"
import {item} from "../../../types/type"
import { Button, message } from "antd"

const Item : FC<item> = (props) => {
    const d = useDispatch()
    const onMyBTNClick = () => {
        d(addItemToBuscet({...props}))
        message.success('This is a success message');
    }

    return(<div  className={Class.main}>
        <div>{props.name}</div>
        <div className={Class.img}>
            <img className={Class.img__item} src={props.img} />
        </div>
        <Button type="primary" onClick={onMyBTNClick}>{props.price}</Button>
    </div>)
}

export default Item