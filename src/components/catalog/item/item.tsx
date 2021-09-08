import { FC } from "react"
import { NavLink } from "react-router-dom"
import Class from "./item.module.css"

type propsType = {
    id: number
    name: string
    img: string
}

const itemAva: FC<propsType> = ({ name, img, id }) => {
    return (<div className={Class.main}>
        <div className={Class.inner}>
        <div className={Class.name}>{name}</div>
            <NavLink className={Class.nav} to={`/catalog/${id}`}>
                <img className={Class.img__item} src={img}></img>
            </NavLink>
            
        </div>
    </div>)
}

export default itemAva