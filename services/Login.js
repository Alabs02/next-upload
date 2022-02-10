
const  login = async (credentials) => {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://localhost:3000');

    const config = {
        method : "POST",
        headers: headers,
        body :JSON.stringify(credentials),
    }
    const response = await fetch('https://treen-api.herokuapp.com/api/v1/users/login', config)
    return response;
}

export default login;