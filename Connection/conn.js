const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://sangalrishabh29:youtube%40clone@cluster0.ftfsse5.mongodb.net/yourDBname?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log(" MongoDB connected successfully!");
})
.catch((err) => {
  console.error(" MongoDB connection failed:", err.message);
});
