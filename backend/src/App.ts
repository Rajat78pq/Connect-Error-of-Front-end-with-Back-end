import express from 'express';
import { Request, Response } from 'express';
import cors from 'cors';

const App = express();

App.use(express.json());
App.use(cors());

const PORT:number = 8001;

App.listen(PORT, ()=>{
    console.log("App listen 'http://localhost:8001' ");
})

App.get('/', ()=>{
    console.log("Hello Future");
});

App.get('/api/data', (req : Request, res: Response)=>{
    interface data  {
        message:String
    }
    const data = {message : "Hello from the backend!"};
    res.json(data);
    console.log(data);
});

const corsOptions = {
    origin: 'http://localhost:5173',
  };
  
  App.use(cors(corsOptions));