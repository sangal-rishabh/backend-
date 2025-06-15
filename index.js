var express = require('express');
var app = express();

var port = process.env.PORT || 4000;  // Use environment port or default to 4000

const cookieParser = require('cookie-parser');
const cors = require('cors');

app.use(cors({
  origin: true,  // Removed trailing space
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());
require('./Connection/conn');

// MongoDB connection
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://sangalrishabh29:C5oPBlZ4hsGbSI6O@cluster0.l51tc4i.mongodb.net/myDatabaseName?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  tlsAllowInvalidCertificates: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB connection error:", err));

// Routes
const AuthRoutes = require('./Routes/user');
const VideoRoutes = require('./Routes/video');
const commentRoutes = require('./Routes/comment');

app.use('/auth', AuthRoutes);
app.use('/api', VideoRoutes);
app.use('/commentApi', commentRoutes);

// Root route to fix "Cannot GET /" error
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

app.listen(port, () => {
  console.log("our project is start on port " + port);
});
