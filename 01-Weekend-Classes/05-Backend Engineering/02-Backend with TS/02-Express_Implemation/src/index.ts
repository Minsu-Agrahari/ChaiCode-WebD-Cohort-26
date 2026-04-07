// 🎯 Creating a HTTP server and runing in on the rout

import http from 'node:http'
import { env } from './env.js'
import { createServerApplication } from './app/index.js';
import { regex } from 'zod';

async function main() {

    // creating raw HTTP server
    try {

        // i. server creation
        const server = http.createServer(createServerApplication());

        // ii. PORT allocation

        // 🥢 This is asking PORT from OS 
        // const PORT: number = process.env.PORT ? +process.env.PORT : 8080; // ask PORT from OS | (+) convert [PORT VAL] -> number or default PORT 8080

        // same as Line-14
        const PORT: number = env.PORT ? +env.PORT : 8080;

        server.listen(PORT, () => {
            console.log(`Server is running on PORT ${PORT}`);
        });
    } catch (error) {
        throw error;
    }
}

// runing main 
main();
