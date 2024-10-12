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
app.use("/files", express.static("files"));

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

//visa doc upload
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null,"./files")
    },
    filename: function(req,file,cb){
        const uniqueSuffix = Date.now();
        cb(null, uniqueSuffix + file.originalname);
    },
});

require("./Model/visaModel/PdfModel");
const pdfSchema = mongoose.model("PdfDetails");
const uplode = multer({storage})

app.post("/uplodefile",uplode.single("file"),async(req,res)=>{
    console.log(res.file);
    const title = req.body.title;
    const pdf = req.file.filename;
    try{
        await pdfSchema.create({ title: title, pdf: pdf });
        console.log("pdf Uploaded successfully");
        res.send({ status: 200});
    }catch (err){
        console.log(err);
        res.status(500).send({ status: "error" });
    }
});

//next
app.get("/getFile", async (req, res) => {
    try{
        const data = await pdfSchema.find({});
        res.send({ status: 200, data: data });
    }catch (err) {
        console.log(err);
        res.status(500).send({ status: "error"});
    }
});