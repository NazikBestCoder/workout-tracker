const express = require("express");
const mongoose = require("mongoose");
const apiRoutes = require("./controllers/routes/apiRoutes");
const htmlRoutes = require("./controllers/routes/htmlRoutes");

const PORT = process.env.PORT || 3005;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
    useNewUrlParser: true 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
 });
 

app.use(apiRoutes);
app.use(htmlRoutes);
 
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`)
});
