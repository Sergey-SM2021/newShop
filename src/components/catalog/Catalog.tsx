import { FC } from "react"
import { useSelector } from "react-redux"
import { reducersType } from '../../store/index'
import ItemAva from "./item/item"
import Class from "./Catalog.module.css"


const Catalog: FC = () => {
    let Allitems = useSelector((state: reducersType) => { return (state.mainReducer) })

    let arr = Allitems.map((el) => { return (<ItemAva key={el.id} id={el.id} img={el.img} name={el.name}/>) })
    return (<div>
        <div className={Class.container}>
            <div className={Class.grid}>
                {arr}
            </div>
        </div>
    </div>)
}
export default Catalog