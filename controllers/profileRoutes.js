const router = require('express').Router();




router.get("/admin",(req, res)=>{

res.render('',{users:"IA", roles:"admin"})


})

router.get("/user",(req, res)=>{

    res.render('',{})
    
    
    }
    )

modile.exports=router