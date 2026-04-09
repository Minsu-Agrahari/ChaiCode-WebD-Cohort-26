const express = request('express')

function block_1_httpMethods() {
    return new Promise((resolve) => {
        const app = express(); // object of Express

        const logs = [];

        // use --> middleware 
        app.use(express.json()); // now will express understand ( json ) 

        // request logger:- koi be request aaye ki who isse go through hoo kar jhaye ka
        // Writting/BUILDING MY OWN MIDDLEWARE

        // BASIS Middleware (syntax)
        app.use((req, res, next) => {
            // Bussiness logic
            //   - add to database
            //   - console.log everything
            //   - write in some file
            next();
        });

        // middleware starts
        app.use((req, res, next) => {
            // Bussiness logic
            const logEntry = `${req.method} : ${req.url}`;
            logs.push(logEntry);
            console.log(`[LOG] -- ${logEntry}`);

            // if your request HANGS forever :- means you have created a MIDDLEWARE and forgot to add "<< next() >>"
            next();
        });

        app.use((req, res, next) => {
            req.startTime = Date.now();

            // EventLister is used using "on"
            res.on('finish', () => {
                const duration = Date.now() - req.startTime;
                console.log(`[TIMER] - ${req.method} - ${req.url} took ${duration}ms`)
            })

            next();
        })

        // CUSTOM MIDDLEWARE
        // AUTH MIDDLEWARE
        function authMe(req, res, next) {
            const token = req.headers['x-auth-token'];

            // if no headers
            if (!token) {
                return res.status(401).json({ "error": "No Token, please login" });
            }

            // if token not match secret code
            if (token !== "secret-chaicode") {
                return res.status(403).json({ error: "Invalid token" });
            }

            // token --> extract data from token --> userID, email, admin 

            req.user = { id: 1, name: "Minsu", role: "admin" }

            next();
        }

        // Role-base [middleware] check
        function getRole(role) {
            return (req, res, next) => {

                // 1. check user exists
                if (!req.user) {
                    return res.status(403).json({ error: `${role} unauthorized` });
                }

                // 2. normalize role ➡️ always array
                const roles = Array.isArray(role) ? role : [role];

                // 3. check using for loop
                let isAllowed = false;

                for (let i = 0; i < roles.length; i++) {
                    if (req.user.role === role[i]) {
                        isAllowed = true;
                        break;
                    }
                }

                // 4. deny if not matched
                if (!isAllowed) {
                    return res.status(403).json({
                        error: `Access denied. Allowed roles: ${roles.join(', ')}`
                    });
                }

                // 5. allow
                next();
            }
        }

        // use AUTH
        app.get('/profile', authMe, getRole('admin'), oneMore, () => { })
        app.get('/profile', authMe, getRole('student'), oneMore, () => { })
        app.get('/profile', authMe, getRole('teacher'), oneMore, () => { })

        app.get('/profile', authMe, getRole(['admin']), oneMore, () => { })
        app.get('/profile', authMe, getRole(['admin', 'teacher', 'student']), oneMore, () => { })

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
