const express = request('express')

function block_1_httpMethods() {
    return new Promise((resolve) => {
        const app = express(); // object of Express

        // use --> middleware 
        app.use(express.json()); // now will express understand ( json ) 

        const routes = {
            1: {
                id: 1,
                name: "Dadar-Andhri Express",
                direction: "North"
            },
            2: {
                id: 2,
                name: "Bandra-Kurla Shuttle",
                direction: "East"
            }
        }

        let nextid = 3;

        // list all trains
        // Writing Route
        app.get("/routes", (req, res) => {
            res.json(Object.values(routes));
        })

        // single route by id
        app.get('/routes/:id', (req, res) => {

            // line 33 34 are same as line 36
            const { id } = req.params
            const route = routes[id]
            // const route = routes[req.params.id] // de-structure

            if (!route) return res.status(404).json({ error: "No train on this id" });
            res.json(route)

        })

        // entry: route in database
        // GET and POST name can be same
        app.post('/routes', (req, res) => {

            // no validation, no ZOD
            const newRoute = { id: nextid++, ...req.body };
            routes[newRoute.id] = newRoute;

            // respond send
            res.status(201).json(newRoute);
        })

        // PUT
        app.put('/routes/:id', (req, res) => {
            const id = req.params.id;

            // validation
            if (!routes[id]) return res.status(404).json({ error: "Something when Wrong, Yeha nhi send karna h" });

            routes[id] = {
                id: Number(id),
                ...req.body
            }
        })

        // ⚠️ PATCH:- partical data is updated
        app.patch('/routes/:id', (req, res) => {
            const id = req.params.id;

            // validation
            if (!routes[id]) return res.status(404).json({ error: "Something when Wrong, Yeha nhi send karna h" });

            // ⚠️ TODO complete this route
        })

        // DELETE
        app.delete('/routes/:id', (req, res) => {
            const id = req.params.id;

            // validation
            if (!routes[id]) return res.status(404).json({ error: "Something when Wrong, Yeha nhi send karna h" });

            delete routes[id];
            res.status(204).end();
        })

        // ⌨️ Building Server                     ⬇
        const server = app.listen(0, async () => {

            // ## ⚠️Console.log(server) -- karke dekho

            const port = server.address().port;
            const base = `http://127.0.0.1:${port}`; // 127.0.0.1 --> Local host

            // writing FRONTEND 🖥️
            try {
                // TODO
                const listRes = await fetch(`${base}/routes`);
                const listData = await listRes.json();

                // POST ROUTE
                const createRes = await fetch(`${base}/routes`, {
                    method: "POST",
                    headers: {
                        'Content-Type': "application/json",
                        body: JSON.stringify({
                            name: "Colaba-Worli",
                            direction: "South"
                        })
                    }
                })

                const create = await createRes.json();

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

function block_2_httpMethods() {
    return new Promise((resolve) => {
        const app = express(); // object of Express

        // use --> middleware 
        app.use(express.json()); // now will express understand ( json ) 

        // /files/latest/docs/readme.txt  ||  /files/assets/style.css
        app.get('/files/*filepath', (req, res) => {
            const filepath = req.params.filepath; // <T> -> String[]
            res.json({
                filepath: filepath,
                type: "WildCard"
            });
        })

        // ⚠️ New Way to write ROUTES 
        app
            .route("/schedule")
            .get((req, res) => { })
            .post((req, res) => { })
            .put((req, res) => { })
            .patch((req, res) => { })
            .delete((req, res) => { })

        
        // Prefetch match -> this will run first, before HTTP methods
        app.use("/api", (req, res) => {
            // its a prefetch match
        })

        // ⌨️ Building Server                     ⬇
        const server = app.listen(0, async () => {

            // ## ⚠️Console.log(server) -- karke dekho

            const port = server.address().port;
            const base = `http://127.0.0.1:${port}`; // 127.0.0.1 --> Local host

            // writing FRONTEND 🖥️
            try {
                // TODO
                const listRes = await fetch(`${base}/routes`);
                const listData = await listRes.json();

                // POST ROUTE
                const createRes = await fetch(`${base}/routes`, {
                    method: "POST",
                    headers: {
                        'Content-Type': "application/json",
                        body: JSON.stringify({
                            name: "Colaba-Worli",
                            direction: "South"
                        })
                    }
                })

                const create = await createRes.json();

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


async function main() {
    await block_1_httpMethods();

    process.exit(0);
}

main();
