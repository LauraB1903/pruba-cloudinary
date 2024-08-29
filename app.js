const express=require('express')
const app=express()
require('dotenv').config()
const multer=require('multer')
const cloudinary=require('cloudinary').v2

const upload=multer({dest:'uploads'})

const port =8000;

app.get('/',(req,res)=>{
    res.send('prueba')

});

app.post('/upload',upload.single('image'),async (req,res) =>{
    try {
        const result=await cloudinary.uploader.upload(req.file.path)    //lo carga de una vez a cloudinary
        res.status(200).json(result);
    } catch (error) {
        console.log('error',error)
        res.status( 400).send(error.message)
        
    }
})

app.listen(port,()=>{
    console.log ('Corriendo en el puerto 8000')
});