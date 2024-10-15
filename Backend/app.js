const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

// Initializing app
const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Allow requests from the frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization',
  credentials: true // Allow credentials (cookies) to be sent with requests
}));

app.options('*', cors()); // Handle preflight requests

app.use(express.json());
app.use(bodyParser.json()); // Parse incoming request bodies in JSON format

// MongoDB connection
const mongoURI = 'mongodb+srv://kavindugunasena:Wys3oVeZJ2TanVc8@cluster1.0wgjcbr.mongodb.net/curd-database'; // MongoDB URI
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes

// Course Routes
const courseRouter = require("./Routes/courseRoute/CourseRoutes");
const universityRouter = require("./Routes/courseRoute/UniversityRoutes");
app.use("/courses", courseRouter);
app.use("/universities", universityRouter);

// Exam Routes
const questionRoutes = require("./Routes/examRoute/question.routes");
const examRoutes = require("./Routes/examRoute/examRoutes");
app.use("/api/questions", questionRoutes);
app.use("/api", examRoutes);

// University Posts Routes
const postRoutes = require("./Routes/universityRoute/route");
app.use("/posts", postRoutes);

// User Uploads Static Folder
app.use('/UserUploads', express.static("UserUploads/"));

// Workers Routes
const UserRoutes = require('./Routes/workRoute/UserRoute');
app.use('/auth', UserRoutes);

// Visa Routes
const visaRouter = require("./Routes/visaRoute/visaRoute");
app.use("/VisaApplication", visaRouter); // Renamed to VisaApplication

// Financial Management Routes
const paymentRouter = require("./Routes/financeRoute/paymentRoute");
app.use("/payment", paymentRouter);

// Student Routes (from the second app)
const studentRoutes = require('./Routes/StudentRoutes');
app.use('/api', studentRoutes); // Using distinct path for students

// Basic Route for checking server status
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});