// called when the user attempts to log in
const login = (values: {email: string, password: string, id:string}) => {
    // localStorage.setItem('username', username);
    // accept all username/password combinations
    const request = new Request('http://localhost:3000/auth/login', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    return fetch(request)
        .then(response => {
            if (response.status < 200 || response.status >= 300) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(({ jwt }) => {
            localStorage.setItem('username', jwt);
            return Promise.resolve();
        }).
        catch(err => {
            console.log(values, "ERR")
            return Promise.reject();

        })
};
// called when the user clicks on the logout button
const logout = () => {
    localStorage.removeItem('username');
    return Promise.resolve();
};
// called when the API returns an error
const checkError = (status: number) => {
    if (status === 401 || status === 403) {
        localStorage.removeItem('username');
        return Promise.reject();
    }
    return Promise.resolve();
};
// called when the user navigates to a new location, to check for authentication
const checkAuth = () => {
    return localStorage.getItem('username')
        ? Promise.resolve()
        : Promise.reject();
};
// called when the user navigates to a new location, to check for permissions / roles
const getPermissions = () => {
    const role = localStorage.getItem('permissions')
    let output = role ? Promise.resolve(role) : Promise.resolve('guest') // default 'guest'
    return output;
}

const AuthProvider = {
    login,
    logout,
    checkError,
    checkAuth,
    getPermissions,
}

export default AuthProvider;