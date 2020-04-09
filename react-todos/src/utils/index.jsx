export const getRandomRbg = () => {
    const r = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    return `rgb(${r},${b},${g})`;
}
const baseURL = 'https://us-central1-todos-server.cloudfunctions.net/api'
export const login = (username, password) => {
    return new Promise((resolve, reject) => {
        const url = baseURL + '/user/login';
        fetch(url,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password })
            }).then(response => response.json())
            .then(res => {

                if (res.data.token) {
                    authControl.isAuthenticated = true;
                    console.log('log in successful')
                    resolve(res.data.token)
                }
                resolve(res.data);
            }).catch(err => reject(err));
    })
}

export const authControl = {
    isAuthenticated: false,
    authenticate: login,
}


const url = 'https://us-central1-todos-server.cloudfunctions.net/api/todos/'
let token;
export const getData = async (data) => {
    token = data
    const response = await fetch(url, {
        method: 'GET',
        withCredentials: true,
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
        }
    })
    return await response.json();
}

export const addData = async (value) => {
    const request = { 'todo': `${value}` }
    const response = await fetch(url, {
        method: 'POST',
        withCredentials: true,
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(request)
    })
    const res = await response.json()
    if (res.message==='add successful') {
        return res;
    }
}