const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.port || 8000;
var corsOptions = {
    origin: 'http://localhost:3000'
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//app.use(express.static(path.resolve(__dirname, '../frontend/build')));

const db = require("./models");
db.mongoose
.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("Connected to the database");
})
.catch(err=>{
    console.log("Cannot connect to the database", err);
    process.exit();
});

app.get("/", (req,res)=>{
    res.json({message: "This is from backend"});
});

require("./routes/tutorial.routes")(app);
// app.get('*',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'../frontend/build', 'index.html'));
// })

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});