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
export const sendData = async (feedID, value) => {
    await axios({
        method: 'POST',
        url: `https://io.adafruit.com/api/v2/${USERNAME}/feeds/${feedID}/data`,
        data: {
            value: `{"id": "1","name":${feedID},"data": "${value}","unit": ""}`
        },
        headers: {
            "X-AIO-Key": `${ACTIVE_KEY}`,
            "Content-Type": 'application/json'
        }
    })
}
