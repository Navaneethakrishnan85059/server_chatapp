import express from "express"


const app=express()
const port=6001


app.listen(()=>{
    console.log('port :>> ', port);
})