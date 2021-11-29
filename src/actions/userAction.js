import axios from "axios"
import { ACTIVE_KEY, USERNAME } from "../config/config"

export const getLastest = async (feedName) => {
    let result = await axios({
        url: `https://io.adafruit.com/api/v2/${USERNAME}/feeds/${feedName}/data/last`,
        method: 'GET',
        headers: {
            "X-AIO-Key": `${ACTIVE_KEY}`,
            "Content-Type": 'application/json'
        }
    })
    // console.log("Result: ", result);
    return +JSON.parse(result.data.value).data;
}
export const sendData = async (id, feedName, feedID, value, active_key, userName) => {
    await axios({
        method: 'POST',
        url: `https://io.adafruit.com/api/v2/${userName}/feeds/${feedID}/data`,
        data: {
            value: `{"id": "${id}","name":"${feedName}","data": "${value}","unit": ""}`
            value: `{"id": "1","name":${feedID},"data": "${value}","unit": ""}`
        },
        headers: {
            "X-AIO-Key": `${active_key}`,
            "Content-Type": 'application/json'
        }
    })
}
export const changeSetting = (fanmode, fanspeed) => {
    let settings = JSON.parse(localStorage.getItem('settings'));
    settings = { ...settings, fanmode, fanspeed }
    console.log(fanmode,fanspeed);
    localStorage.setItem('settings', JSON.stringify(settings));

}

