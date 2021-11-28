import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ButtonFAN from '../electricComponent/ButtonFAN';
import Fan from '../electricComponent/Fan';
import Loader from '../loader/Loader';
import './statuscard.css'

const DRVFeed = props => {
    // const [valueSensor, setValueSensor] = useState(0);
    const { fan, serverFanGasConection } = useSelector((state) => state.ElectricStatusReducer)
    return (
        <div className='status-card'>
            <div className="status-card__icon">
                <Fan />
            </div>
            <div className="status-card__info">
                <h4 style={{ opacity: `${serverFanGasConection ? 1 : 0}` }}>{fan > 0 ? "ON" : "OFF"}</h4>
                <div style={{ display: `${!serverFanGasConection ? "block" : "none"}` }}>
                    <Loader topDis={"0px"} />
                </div>
                <ButtonFAN fan={fan} />
            </div>

        </div>
    )
}

export default DRVFeed
