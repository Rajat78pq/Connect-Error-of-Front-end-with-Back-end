import express from 'express';
import { Request, Response } from 'express';

const App = express();

App.use(express.json());

const PORT:number = 8000;

App.listen(PORT, ()=>{
    console.log("App listen 'http://localhost:3000' ");
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
