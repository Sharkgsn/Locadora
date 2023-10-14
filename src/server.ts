import "dotenv/config";
import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
    .then((): void => {
        console.log("Database connected")

        const PORT: number = Number(process.env.PORT || 3000)
        app.listen(PORT, () => console.log(`Server is Running on port ${PORT}`))
    })
    .catch((error): void => console.log(error))