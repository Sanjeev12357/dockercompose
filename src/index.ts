import { PrismaClient } from '@prisma/client';
import express from 'express';


const app=express();
const PORT=3000;

const prismaClient= new PrismaClient();

app.get('/',async (req, res) => {
   const data=await prismaClient.user.findMany();
   console.log(data);
    res.json(data);
}
);  
   

app.post('/api', async(req, res) => {
     await prismaClient.user.create({
        data:{
        username:Math.random().toString(36).substring(2, 15) ,
        password: Math.random().toString(36).substring(2, 15),
    }
        
})
});

app.listen(PORT);