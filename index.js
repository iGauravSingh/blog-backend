const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const colors = require('colors')
const cloudinary = require("cloudinary").v2;
const cors = require('cors')
const Multer = require("multer");

const { errorHandler } = require('./middleware/errorMiddleware')

connectDB()

const app = express()

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

///
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
  });
  async function handleUpload(file) {
    const res = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
    });
    return res;
  }
  
  const storage = new Multer.memoryStorage();
const upload = Multer({
  storage,
});

///

app.get('/',(req,res)=>{
    res.send('hello')
})
// app.use('/',require('./routes/'))
app.use('/user',require('./routes/userRoutes'))
app.use('/post',require('./routes/postRoutes'))


////
app.post("/upload", upload.single("my_file"), async (req, res) => {
    try {
      const b64 = Buffer.from(req.file.buffer).toString("base64");
      let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
      const cldRes = await handleUpload(dataURI);
      res.json(cldRes.url);
    } catch (error) {
      console.log(error);
      res.send({
        message: error.message,
      });
    }
  });

////

app.use(errorHandler)

const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{console.log(`listening on port ${PORT}`)})



