// called when the user attempts to log in
const login = (username:string) => {
    localStorage.setItem('username', username);
    // accept all username/password combinations
    return Promise.resolve();
};
// called when the user clicks on the logout button
const logout = () => {
    localStorage.removeItem('username');
    return Promise.resolve();
};
// called when the API returns an error
const checkError = ( status: number ) => {
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
    let output =  role ? Promise.resolve(role) : Promise.resolve('guest') // default 'guest'
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