import express from 'express';
import {getPool} from './src/Config/db.js'
const app = express();
app.use(express.json())

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//connecting to db
const pool=getPool()
pool.then(pool=>{
   if(pool){
    console.log("DB successfully connected")
   }
})
.catch(err=>{
    console.log("Failed to connect to db")
})
