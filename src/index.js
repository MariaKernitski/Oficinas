import e from "express";
import "dotenv/config";
import "./db.js";
import workshop_router from "./routes/Workshop_route.js"
import vehicle_router from "./routes/Vehicle_route.js"
import maintenance_router from "./routes/Maintenance_route.js"

const app = e();

app.use(e.json());

app.use("/workshop", workshop_router);
app.use("/vehicle", vehicle_router);
app.use("/maintenance", maintenance_router);

app.listen(process.env.API_PORT, () => console.log("Servidor rodando."));