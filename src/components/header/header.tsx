import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Class from './header.module.css'
import { Layout, Menu } from 'antd';
import axios from 'axios'

const Header: React.FC = () => {
    let [activeBtn, setBtn] = useState(0)

    let arr = [<Menu.Item><NavLink className={Class.NavLink} to="/bascet">Корзина</NavLink></Menu.Item>,
    <Menu.Item><NavLink className={Class.NavLink} to="/catalog">Каталог</NavLink></Menu.Item>,
    <Menu.Item><NavLink className={Class.NavLink} to="/">Главная</NavLink></Menu.Item>]

    return(
        <Layout>
            <Layout.Header>
                <Menu mode="horizontal" theme="dark">
                    {arr}
                </Menu>
            </Layout.Header>
        </Layout>
    )
}

export default Header
