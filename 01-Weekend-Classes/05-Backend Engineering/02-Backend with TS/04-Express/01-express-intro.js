const express = require('express');

function block_1_basicServer() {
    return new Promise((resolve) => {
        const app = express(); // object of Express

        // use --> middleware 
        app.use(express.json()); // now will express understand ( json ) 

        // API EndPoint ['/menu', '/order', soon]-- building
        // HTTP Methods:-

        // GET :- humne create kiye hai ek handler ko GET which will register a END-POINT ('\menu') and the handler is line 8-21 [ from (req, res) => {} ]

        //     JS 101 :- req is remove as written as '-' as the value was not used so it is written as '-'
        //      PATH        ⬇
        //        ⬇         ⬇ 
        app.get('/menu', (_, res) => {

            // res.json():- 
            //      1. set Content-Type: 'application.json'
            //      2. object Serialized 
            res.json({
                items: [
                    'thali',
                    'biryani'
                ]
            })
        });

        app.get('/search', (req, res) => {
            //  Query:- chaicode.com/cart?q=biryan&limit=5
            const { q, limit } = req.query;
            res.json({
                query: q,
                limit: limit || '10',
            })
        });

        // Route Params/ path Params:-
        //                        Handler
        //                          ⬇ 
        app.get('/menu/:id', (req, res) => { // end-point = '/menu' and uske baad joh bhi hoo woha "id" me put kardo
            // de-struction
            //     ⬇
            const { id } = req.params;
            res.json({
                items: id,
                price: 149,
            })
        });

        // POST Route :- Rquest + Data
        app.post('/order', (req, res) => {
            const order = req.body
            res.status(201).json({
                status: 'created',
                order: order
            });
        });

        // ⌨️ Building Server

        // 0 -> koi be free PORT assign kardo 
        //                        ⬇
        const server = app.listen(0, async () => {

            // ## ⚠️Console.log(server) -- karke dekho

            const port = server.address().port;
            const base = `http://127.0.0.1:${port}`; // 127.0.0.1 --> Local host

            // writing FRONTEND 🖥️
            try {
                const menuRes = await fetch(`${base}/menu`); // line 17
                const menuData = await menuRes.json();
                console.log('GET /menu', JSON.stringify(menuData));

                console.log("++++++++++++++++++++++++++++++++");

                const searchRes = await fetch(`${base}/search?q=biryani&limit=5`);
                const searchData = await searchRes.json();
                console.log('GET /search', JSON.stringify(searchData));

                console.log("++++++++++++++++++++++++++++++++");

                const menuItemsRes = await fetch(`${base}/menu/42`);
                const menuItemData = await menuItemsRes.json()
                console.log('POST /menu', JSON.stringify(menuItemData));

                console.log("++++++++++++++++++++++++++++++++");

                const orderRes = await fetch(`${base}/order`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        dish: 'biryani',
                        quantity: 2
                    })
                })

                const orderData = await orderRes.json();
                console.log('POST /order', JSON.stringify(orderData))
                console.log("++++++++++++++++++++++++++++++++");


            } catch (error) {
                console.log(error);
            }

            // server open in line-65, is now closed
            server.close(() => {
                console.log("Block 1 served...");
                resolve()
            });
        });


    })
}

// block-2 Respond
function block_2_response() {
    return new Promise((resolve) => {
        const app = express();

        // send text
        app.get('/text', (req, res) => {
            res.send('Hello from Chaicode')
        })

        app.get('/json', (req, res) => {

            // res.json will serialised
            res.json({
                framwork: 'express',
                version: '6.1.1',
            });
        });

        app.get('/not-found', (req, res) => {
            res.status(404).json({
                error: "Page not found"
            })
        })

        // Health Route or heart beat
        app.get('/health', (req, res) => {
            res.sendStatus(200);
        })

        // redirecting the Web-URL
        app.get('/old-menu', (req, res) => {
            // add entry in DB to see how many users are still visiting old route
            res.redirect(301, '/new-menu');
        })

        // if want to send other than JSON file
        app.get('/xml', (req, res) => {
            res.type('application/xml').send('<dist> <name>Biryani</name> </dish>');
        })


        app.get('/custom-headers', (req, res) => {
            res.set('X-powered-By', 'ChaiCode');
            res.set('X-Request-ID', '123545');
        
            // X-powered-By => "X-" means it is custom header 
            // USE IN :- CORS, caching, tracing, rate limiting
        
            res.json({
                message: 'Custom headers set'
            })
        });

        app.get('/no-content', (req, res) => {
            res.status(204).end(); // ⚠️ end closes when Response without data
        })

        const server = app.listen(0, async () => {
            
            // find port
            const port = server.address().port;
            const base = `http://127.0.0.1:${port}`;


            try {
                // TODO: Complete my myself ... 
            } catch (error) {
                console.log(error);
            }
        })
    });
}


async function main() {
    await block_1_basicServer();
    await block_2_response();

    process.exit(0);
}

main();


// what is 
    // - body
    // - header