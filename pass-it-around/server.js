const express = require("express")
const app = express ()
const port = 3003


app.get("/", (req,res) => {
    res.send(`<h1>99 Bottles of beer on the wall</h1>
   <a href="/98">take one down, pass it around</a>
    `)
})
app.get("/:number_of_bottles", (req,res) => {
  let numberOfBottles = req.params.number_of_bottles 
  if(numberOfBottles > 0 ) {
    res.send(`<h1>${numberOfBottles} Bottles on wall</h1>
    <a href= "/${numberOfBottles - 1}">take one down, pass it around</a>`);

  }else {
   res.send(`<h1>You are DRUNK! <a href = "/"> Start over</a> </h1>`);
  }

  

}
)

//Thanks to MATT and CODY for helping me on these lab!!





app.listen(3003)