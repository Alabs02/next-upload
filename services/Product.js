

export const createProject = async (data) => {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://localhost:3000');

    const config = {
        method : "POST",
        headers: headers,
        body :JSON.stringify(data),
    }
    const response = await fetch('https://fakestoreapi.com/products', config)
    return response;
}
 
