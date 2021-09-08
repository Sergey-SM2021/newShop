import style from "./style.module.css"
import React from "react"

const Main: React.FC = () => {
    return(<div>
        <img className={style.img} src="https://i08.fotocdn.net/s126/e4cef17d057fab08/public_pin_l/2863287172.jpg"></img>
        <div>Moscow food - это новый сервис по доставке еды в приделах москвы</div>
    </div>)
}

export default Main