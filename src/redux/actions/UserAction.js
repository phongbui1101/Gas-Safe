import axios from "axios"

export const loginFeature = async ({ usr, pass }) => {
    let result = await axios({
        method: 'POST',
        url: 'http://localhost:7000/login',
        data: {
            usr, pass
        }
    })
    console.log(usr, pass)
}