const express = require("express");
const mongoose = require("mongoose");
//coures
const courseRouter = require("./Routes/courseRoute/CourseRoutes");
const universityRouter = require("./Routes/courseRoute/UniversityRoutes");
const questionRoutes = require("./Routes/examRoute/question.routes");
const examRoutes = require("./Routes/examRoute/examRoutes");
const postRoutes = require("./Routes/universityRoute/route");
//workers
const UserRoutes=require('./Routes/workRoute/UserRoute');
const router = require("./Routes/visaRoute/visaRoute");
const Demorouter = require("./Routes/DemoRoutes/DemoRoutes");
const RouteStudent = require("./Routes/universityRoute/Stroute");

//visa
const app = express();
const cors = require("cors");

//course
app.use(express.json());
app.use(cors());
app.use("/courses", courseRouter);
app.use("/universities", universityRouter);
app.use("/api/questions", questionRoutes);
app.use("/api", examRoutes);
app.use("/posts", postRoutes);
app.use('/UserUploads',express.static("UserUploads/"));
app.use("/appstudents",RouteStudent);

//workers
app.use('/auth',UserRoutes);

//visa
app.use("/VisaApplication",router);
app.use("/DemoStu",Demorouter);

//financial mng 
const paymentRouter = require("./Routes/financeRoute/paymentRoute");
app.use("/payment", paymentRouter);

//mongoose.connect("mongodb+srv://ebuysl:ebuysl@cluster0.1awm1om.mongodb.net/curd-database")


mongoose.connect("mongodb+srv://kavindugunasena:Wys3oVeZJ2TanVc8@cluster1.0wgjcbr.mongodb.net/curd-database")
.then(() => console.log("Connected to MongoDB"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log(err));

