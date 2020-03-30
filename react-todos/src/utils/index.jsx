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
                  authControl.isAuthenticated = true;
                  console.log('log in successful')
                  resolve(res.data);
            }).catch(err => reject(err));
    })
}

export const authControl = {
    isAuthenticated: false,
    authenticate: login,
}
