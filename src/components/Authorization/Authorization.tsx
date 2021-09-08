import { Formik } from "formik"
import Class from "./Auth.module.css"
import { useDispatch, useSelector } from "react-redux"
import { reducersType } from "../../store"
import { addBuyer } from "../../store/buyersReducer"
import { useHistory } from "react-router-dom"
import { clearBasketAC } from "../../store/buscetReducer"

const Authorization = () => {
    let history = useHistory()
    let bascet = useSelector((state: reducersType) => { return (state.buscetReducer) })
    let dispatch = useDispatch()
    return (<div>
        <Formik onSubmit={(values) => {
            dispatch(addBuyer(values,bascet))
            dispatch(clearBasketAC())
            history.push("/")
        }} initialValues={{
            street: "",
            house: "",
            flat: "",
            firstNam: "",
            lastName: "",
            phone: "",
            mail: ""
        }} validate={() => { }}>
            {
                ({ handleSubmit, handleChange, values }) => (
                    <form onSubmit={handleSubmit} className={Class.grid}>
                        <div>введите улицу</div>
                        <input className={Class.field} value={values.street} name="street" onChange={handleChange}></input>
                        <div>введите дом</div>
                        <input className={Class.field} value={values.house} name="house" onChange={handleChange}></input>
                        <div>введите номер квартиры</div>
                        <input className={Class.field} value={values.flat} name="flat" onChange={handleChange}></input>
                        <div>введите имя</div>
                        <input className={Class.field} value={values.firstNam} name="firstNam" onChange={handleChange}></input>
                        <div>введите фамилию</div>
                        <input className={Class.field} value={values.lastName} name="lastName" onChange={handleChange}></input>
                        <div>введите номер телефона</div>
                        <input className={Class.field} value={values.phone} name="phone" onChange={handleChange}></input>
                        <div>введите aдрес эл. почты</div>
                        <input className={Class.field} value={values.mail} name="mail" onChange={handleChange}></input>
                        <button type="submit" className={Class.btn}>Завершить покупку</button>
                    </form>
                )
            }
        </Formik>
    </div>)
}
export default Authorization