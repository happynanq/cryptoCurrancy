const {Router} = require("express")
const config = require("config")
const rp = require("request-promise") 

const router = Router()

router.post("/", async(req,res)=>{
  let headers = {
    'X-CMC_PRO_API_KEY': config.get("API-KEY"),
    'Content-Type': 'application/json'
  }
  try {
    // TODO: Подключить монгус, сделать модель даты, сделать в ней хедер отвечающий за кеширование


    const response = rp("https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?sort=cmc_rank&limit=2 ",{
      //https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=1
      //https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?sort=cmc_rank&limit=2
      headers
      
    }
    ).then(async (r)=>{
      //initial res from //!MAP
      let res = JSON.parse(r)
      let symbol = res.data.map(d=>d.symbol).join(",")
      //!INFO

      let info = rp("https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol="+symbol ,{headers})
      let dataInfo = await info
      dataInfo = JSON.parse(dataInfo).data

      //!QUOTES

      let quotes = rp("https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol="+symbol, {headers})
      let dataQuotes = await quotes
      dataQuotes  =JSON.parse(dataQuotes).data

      //!GO DATA FROM REQ TO ARRAY

      let newData =[]
      let quoteArray = []
      res.data.map(d=>{
        newData.push(dataInfo[d.symbol].logo)
        quoteArray.push(dataQuotes[d.symbol])
      })
      console.log("quote array: ",quoteArray)
      
      return {dataInfo:res.data, quoteInfo:dataQuotes, logo:newData}
    })
    
    let data = await response
    // console.log(data)
    res.json({message:"Крипта получена", data})
    // ).then(r=>console.log(JSON.parse(r).data["1"].logo)).catch(r=>console.log(JSON.parse(r)))
  } catch (e) {
    console.error(e.message)
  }
})


module.exports = router