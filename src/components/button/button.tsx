import { FC } from "react"
import Class from "./button.module.css"

interface buttonType{
    action:any
    text:string
    icon?:string
}

const b:FC<buttonType> = ({action,text,icon}) => {
    return(
        <button onClick={action} className={Class.main}>
            {icon}
            {text}
        </button>
    )
}

export default b
