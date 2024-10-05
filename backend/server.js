import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

connectDB();

const port=process.env.PORT;
const app=express();
app.use(cors());

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, ()=>{
    console.log("Server running at port "+port);
})