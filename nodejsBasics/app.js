const http = require('http');
const { title } = require('process');

const port = 5050;

const server = http.createServer((req, res) => {

    switch (req.url) {
        case '/':
            res.end(`
        <html>
            <Head>
                <title>
                    first node app
                </title>
            </Head>
            <body>
                <h1>
                    Welcome to my node application
                </h1>
            </body>
        </html>
        `);
        break;
        case '/admin':
            res.end('Welcome to the admin page');
        break;
    };
});


server.listen(port, () => {
    console.log(`server is now listening on port ${port}`);
});