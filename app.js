const express = require("express");
const mongoose = require("mongoose");
const Router = require("./Routers/routes")
const cors = require('cors')
const app = express();

app.use(express.json());


// khai báo cổng chạy dịch vụ
var PORT = process.env.PORT || 3000;

const db = process.env.MONGO
mongoose
  .connect(db, {
    useNewUrlParser: true,
   
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));
// "To do API Root" sẽ được trả về khi thực hiện get request trên trang home page của ứng dụng  
app.get('/', function (req, res) {
  res.send('Hello stack')
});
app.use(cors({origin:"*", credentials:true}))
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin","*")
  res.header("Access-Control-Allow-Methods","*")
  res.header("Access-Control-Allow-Headers","Content-Type")
  next();
});
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(Router);

app.listen(5000, () => {
  console.log("Server is running at port 5000");
});
