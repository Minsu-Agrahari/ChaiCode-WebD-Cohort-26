import { createServer } from 'node:http'
import { createApplication } from './app'
async function main() {
    try {
        // const server = createServer(createApplication());

        const app = createApplication();
        const server = createServer(app);

        const PORT: number = 8080;

        server.listen(PORT, () => {
            console.log(`Http server is running on PORT ${PORT}`);
        })
    } catch (error) {
        console.log(`Error starting http server`);
        throw error;
    }
}

main();
