const { slice } = require('cheerio/lib/api/traversing');
var express = require('express');
var router = express.Router();
var cardb = require("../model/carDatabase")


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/car_info/:Slot",(req,res)=>{
  let slot = req.params.Slot
  cardb.find({ $or: [ { carNumber: slot} , { slotNumber: slot } ] } )
  .then((data) => {
   console.log(data); 
   res.send(data)
  }).catch((err) => {
    console.log(err);
    res.send(err)
  });
})

router.post("/parking_car/:car_number",async(req,res)=>{
  var car_number = req.params.car_number
  var slotSize = process.env.parkingLotSize
  if (slotSize>0){
    let slot_number = await cardb.find({},{slotNumber:1})
    var book_slot=[]
    for(let i of slot_number){
      book_slot.push(i.slotNumber);
    }
    for(var i=1;i<=slotSize;i++){
      if (!(book_slot.includes(String(i)))){
          cardb.insertMany({carNumber:car_number,slotNumber:String(i)}).then(date=>{  
          }).catch(err=>{i = err})
          break
      }

    }
    if (!(i<=slotSize)){
      console.log("No more Slot");
      res.send("No more Slot")
    }else{
      console.log(i);
      res.send(String(i))
    }
    
  }

  
});

router.delete("/unparking_car/:slot",(req,res)=>{
  var slot = req.params.slot
  console.log(typeof slot);
  cardb.deleteMany({ $or: [ { carNumber: slot} , { slotNumber: slot } ] })
  .then((result) => {
    console.log("deleted");
    res.send("Deleted");
  }).catch((err) => {
    console.log(err);
    res.send("err");
  });
});
module.exports = router;
