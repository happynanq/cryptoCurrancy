const express =require("express")
const rp = require("request-promise") 
const app = express()

app.use(express.json({extended:true}))
app.use("/api", require("./routes/getCurrency"))

const start = ()=>{
  try {
    

    app.listen(5000, ()=>{
      console.log("[server was startder...]")
    })    
  } catch (e) {
    console.log(e)
  }
}
start()