import axios from "axios"

export const loginFeature = ({ usr, pass }) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                method: 'POST',
                url: 'http://localhost:7000/login',
                data: {
                    usr, pass
                }
            })
            console.log(result.data);
            const { token, phonelist, settings, name } = result.data;
            localStorage.setItem('accessToken', token)
            localStorage.setItem('name', name)
            localStorage.setItem('settings', JSON.stringify(settings))
            history.push('/')
        } catch (error) {
            // console.log(error?.response.data)   
        }
    }

}