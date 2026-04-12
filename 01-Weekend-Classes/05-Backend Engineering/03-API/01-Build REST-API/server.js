import "dotenv/config" //this read the ".env" file 
import app from "./src/app.js"
import connectDB from "./src/common/config/db.js";

const PORT = process.env.PORT || 5000;

// starting listner
const start = async () => {
    // connect to database stablishing ...
    await connectDB()

    // listing the port
    app.listen(PORT, () => {
        console.log(`Server is running at ${PORT} in ${process.env.NODE_ENV} mode`);
    });
}

start().catch((err) => {
    console.error("Failed to start server", err);
    process.exit(1);
})
