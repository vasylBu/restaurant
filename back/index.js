
import cors from "cors";
import express from "express";
import connectDB from "./db.js";
import user from "./routes/user.js";

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", user);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on("error", console.error);

export { app, server };