
import React, { useEffect, useState } from 'react'
import "./PersionalInfo.css"
import user_image from '../assets/images/hansohee.png'
import { NavLink } from 'react-router-dom'
import { history } from '../config/config'
import { getInfo } from '../redux/actions/UserAction'
const PersonalInfo = () => {
    const [userInfo,setUserinfo] = useState({name:'',email:'',address:'',phone:''})
    console.log("Inforpage");
    useEffect(async() => {
        console.log("here")
        let userInfo =await getInfo()
        setUserinfo(userInfo)
    }, [])

import React from 'react'
import "./PersionalInfo.css"
import user_image from '../assets/images/hansohee.png'

const PersonalInfo = () => {

    return (
        <div>
            <h2 className="page-header">
                Personal Information
            </h2>
            <div className="row personal-info">
                <div className="container content clear-fix">
                    <div className="row" style={{ height: '100%' }}>
                        <div className="col-md-3">
                            <div href="#" className="d-inline">
                                <div className="topnav__right-user__image" style={{ width: '200px', height: '200px', margin: 'auto' }}>
                                    <img src={user_image} alt="" />
                                </div>
                                <div className="text-center mt-4">
                                    <label htmlFor="uploadImg" className="btn btn-primary btn-block">
                                        <input type="upload" id="uploadImg" type="file" name="photo" style={{ display: 'none' }} />
                                        Upload Image
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="container">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="fullName">Full Name</label>

                                        <input defaultValue={userInfo.name} type="text" className="form-control" id="fullName" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input defaultValue={userInfo.email} type="email" className="form-control" id="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pass">Phone</label>
                                        <input defaultValue={userInfo.phone} type="number" className="form-control" id="pass" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fullName">Address</label>
                                        <input defaultValue={userInfo.address} type="text" className="form-control" id="fullName" />
                                    </div>

                                        <input type="text" className="form-control" id="fullName" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="pass">Phone</label>
                                        <input type="number" className="form-control" id="pass" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fullName">Address</label>
                                        <input type="text" className="form-control" id="fullName" />
                                    </div>
                                    <div className="form-group ">
                                        <label htmlFor="birthday">Birthday</label>
                                        <input type="date" className="form-control" id="birthday" />
                                    </div>


                                    <div className="row mt-5">
                                        <div className="col-4">
                                            <button type="button" className="btn btn-primary btn-block">Save Changes</button>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PersonalInfo

