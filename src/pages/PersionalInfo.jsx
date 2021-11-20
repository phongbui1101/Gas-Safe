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
                                {/* <img src={user_image} width="100%" style={{ margin: 0 }} /><br /> */}
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
                                        {/* <div className="col-4">
                                            <button type="button" className="btn btn-primary btn-block">Change Password</button>
                                        </div> */}
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
