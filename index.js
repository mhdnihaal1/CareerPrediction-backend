import express from "express";
import cors from "cors";
import assessmentRoutes from "./routes/assessment.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", assessmentRoutes);

app.get("/get",(req,res)=>{
    res.send("Server is working")
})

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
