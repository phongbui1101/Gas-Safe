import React, { useEffect, useRef } from 'react'

import { Link } from 'react-router-dom'


import { useDispatch, useSelector } from 'react-redux'

import GasSensor from '../components/status-card/GasSensor'

import Table from '../components/table/Table'

import Badge from '../components/badge/Badge'

import { ACTIVE_KEY, FEED_BUZZER, FEED_DRV, FEED_GAS, FEED_LED, history } from '../config/config'
import StepChart from '../components/chart/StepChart'
import LedFeed from '../components/status-card/LedFeed'
import DRVFeed from '../components/status-card/DRVFeed'
import BuzzerFeed from '../components/status-card/BuzzerFeed'
import axios from 'axios'
import moment from 'moment'
import { checkLogin } from '../redux/actions/Helper'
import AddNewPhone from '../components/form/AddNewPhone'
// import "../assets/css/index.css"

const topCustomers = {
    head: [
        'sensor',
        'status',
        'time'
    ],
    body: [
        {
            "username": "john doe",
            "order": "490",
            "price": "$15,870"
        },
        {
            "username": "frank iva",
            "order": "250",
            "price": "$12,251"
        },
        {
            "username": "anthony baker",
            "order": "120",
            "price": "$10,840"
        },
        {
            "username": "frank iva",
            "order": "110",
            "price": "$9,251"
        },
        {
            "username": "anthony baker",
            "order": "80",
            "price": "$8,840"
        }
    ]
}
let dataHistory = []
const renderCusomerHead = (item, index) => (
    <th key={index}>{item}</th>
)

const renderCusomerBody = (item, index) => (
    <tr key={index}>
        <td>{item.feed_key}</td>
        <td>{JSON.parse(item.value).data}</td>
        <td style={{ textTransform: "unset" }}>{moment(item.created_at).format('MMM Do YYYY, h:mm:ss a')}</td>
    </tr>
)







const Dashboard = (props) => {
    useEffect(() => {
        if (!checkLogin()) {
            history.push('/login')
        }

    }, [])
    const displayForm = useRef(null);
    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        <div className="col-6">
                            <GasSensor />
                            <LedFeed />
                        </div>
                        <div className="col-6">
                            <DRVFeed />
                            <BuzzerFeed />
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        <StepChart />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <div className="card__header">
                            <h3>History</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={topCustomers.head}
                                renderHead={(item, index) => renderCusomerHead(item, index)}
                                renderBody={(item, index) => renderCusomerBody(item, index)}
                                selectData={"dataHistory"}
                            />
                        </div>
                        {/* <div className="card__footer">
                            <Link to='/'>view all</Link>
                        </div> */}
                    </div>
                </div>
                <div className="col-8" style={{ position: 'relative' }}>
                    <AddNewPhone/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
