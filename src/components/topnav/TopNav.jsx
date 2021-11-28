import React from 'react'

import './topnav.css'

import { Link } from 'react-router-dom'

import Dropdown from '../dropdown/Dropdown'


import user_image from '../../assets/images/hansohee.png'

import user_menu from '../../assets/JsonData/user_menus.json'
import { logout } from '../../redux/actions/UserAction'
import { history } from '../../config/config'

const curr_user = {
    display_name: 'Han So Hee',
    image: user_image
}


const renderUserToggle = (user) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span style={{cursor:'pointer'}}
            onClick={() => logout()}
        >{item.content}</span>
    </div>

)

const Topnav = () => {
    return (
        <div className='topnav' style={{ flexDirection: "row-reverse", height: '80px' }}>
            <div className="topnav__right">
                <div className="topnav__right-item">
                    {/* dropdown here */}
                    {console.log("Topnav")}
                    <Dropdown
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={user_menu}
                        renderItems={(item, index) => renderUserMenu(item, index)}
                    />
                </div>``
            </div>
        </div>
    )
}

export default Topnav
