const express = require("express");
const mongoose = require("mongoose");
//cours
const courseRouter = require("./Routes/courseRoute/CourseRoutes");
const universityRouter = require("./Routes/courseRoute/UniversityRoutes");
const questionRoutes = require("./Routes/examRoute/question.routes");
const examRoutes = require("./Routes/examRoute/examRoutes");
const postRoutes = require("./Routes/universityRoute/route");
//workers
const UserRoutes=require('./Routes/workRoute/UserRoute');
const router = require("./Routes/visaRoute/visaRoute");

//visa

const app = express();
const cors = require("cors");

//cours
app.use(express.json());
app.use(cors());
app.use("/courses", courseRouter);
app.use("/universities", universityRouter);
app.use("/api/questions", questionRoutes);
app.use("/api", examRoutes);
app.use("/posts", postRoutes);
app.use('/UserUploads',express.static("UserUploads/"));

//workers
app.use('/auth',UserRoutes);

//visa
app.use("/Users",router);


mongoose.connect("mongodb+srv://ebuysl:ebuysl@cluster0.1awm1om.mongodb.net/curd-database")
.then(() => console.log("Connected to MongoDB"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log(err));
