const http = require('http');
 
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.statusCode = 200;
 
    const { method,url } = request;

    if(url === '/signin'){
        if(method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>Halo! Ini adalah halaman Sign In</h1>');
        } else if(method === 'PUT') {
            response.statusCode = 200;
            response.end('<h1>Halo! Silahkan Masukkan ID dan Password Anda</h1>');
        }else {
            response.statusCode = 404;
            response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
        };

    } else if(url === '/signup'){
        if(method === 'GET'){
            response.statusCode = 200;
            response.end('<h1>Halo! Ini adalah halaman Sign Up</h1>');
        } else if(method === 'POST') {
            response.statusCode = 201;
            response.end('<h1>Halo! Silahkan Buat ID dan Password Anda</h1>');
        }else {
            response.statusCode = 404;
            response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
        };

    } else if(url === '/home' ){
        if(method === 'GET'){
            response.statusCode = 200;
            response.end('<h1>Halo! Ini adalah halaman Home</h1>');
        }else {
            response.statusCode = 404;
            response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
        }

    } else if(url === '/profile'){
        if(method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>Halo! Ini adalah halaman Profile</h1>');
        } else if(method === 'PUT') {
            response.statusCode = 200;
            response.end('<h1>Halo! Silahkan Edit Profile Anda</h1>');
        }else {
            response.statusCode = 404;
            response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
        };

    } else if(url === '/history'){
        if(method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>Halo! Ini adalah halaman Order part History</h1>');
        } else  {
            response.statusCode = 404;
            response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
        };

    } else if(url === '/ongoing'){
        if(method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>Halo! Ini adalah halaman Order part On going</h1>');
        } else  {
            response.statusCode = 404;
            response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
        };

    } else if(url === '/services'){
        if(method === 'GET') {
            response.statusCode = 200;
            response.end('<h1>Halo! Ini adalah halaman Service</h1>');
        } else  {
            response.statusCode = 404;
            response.end(`<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`);
        };

    };
};
 
const server = http.createServer(requestListener);
 
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});