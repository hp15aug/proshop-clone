import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";

connectDB();

const port=process.env.PORT;
const app=express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, ()=>{
    console.log("Server running at port "+port);
})