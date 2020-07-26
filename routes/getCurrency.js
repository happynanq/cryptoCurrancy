const {Router} = require("express")
const rp = require("request-promise") 

const router = Router()

router.post("/", async(req,res)=>{
  try {

    const response = rp("https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?id=1 ",{
      // limit=2&sort=cmc_rank
      
      headers: {
        'X-CMC_PRO_API_KEY': '55401fb2-c8c9-4ec5-82f9-f483871e15da',
        'Content-Type': 'application/json'
      },
    }
    ).then(r=>JSON.parse(r).data["1"].logo)
    let data = await response
    console.log(data)
    res.json({message:"Крипта получена", data})
    // ).then(r=>console.log(JSON.parse(r).data["1"].logo)).catch(r=>console.log(JSON.parse(r)))
  } catch (e) {
    console.error(e.message)
  }
})


module.exports = router