const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connect = require("./config/database");
const env = require("./config/envConfig");
const userRoutes = require("./routes/userRoutes");
// const categoryRoutes = require("./routes/categoryRoutes");
// const productRoutes = require("./routes/productRoutes");
// const cartRoutes = require("./routes/cartRoutes");
// const bookingRoutes = require("./routes/bookingRoutes");
// const reviewRoutes = require("./routes/reviewRoutes");
const app = express();

//connect database
connect();

//add midleware
app.use(express.json())
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

//user routes
app.use("/api" , userRoutes);

// //category routes
// app.use("/api" , categoryRoutes);

// //product routes
// app.use("/api" , productRoutes);

// //cart routes
// app.use("/api" , cartRoutes);

// //booking routes
// app.use("/api" , bookingRoutes);

// //review routes
// app.use("/api", reviewRoutes);

const port = env.PORT || 5000;

app.get("/" , (req, res)=>{
    res.json({msg: "welcome to Daraz!!!"})
});


app.listen(port, ()=>{
    console.log(`server is running on localhost:${port}`)
});
