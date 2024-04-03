require('dotenv').config(); // Load environment variables

const express = require('express');
const authRoutes = require('./authRoutes');
const mongoose = require('mongoose');
const classroomRoutes = require("./classroomRoutes")
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json())
app.use("", classroomRoutes)

// app.get('/', (req, res) => {
//     res.send('Hello from Express!');
// });

// Define a route to handle GET requests to "/classrooms"
// app.get('/classrooms', async(req, res) => {
//     // Replace this dummy data with the actual data you want to send to the client
//     const classrooms = [
//       { id: 1, name: 'Classroom 1', description: 'Description for Classroom 1' },
//       { id: 2, name: 'Classroom 2', description: 'Description for Classroom 2' },
//       // Add more classrooms as needed
//    . ];
  
//     // Send the classrooms data as a JSON response
//     res.json(classrooms);
//   });

// app.get("/hi",(req,res)=>{
//     return res.send("post req")
// })
// 

const PORT = process.env.PORT || 8000;
 
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB Atlas');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}) 
.catch((error) => {
    console.error('Error connecting to MongoDB Atlas:', error);
});
