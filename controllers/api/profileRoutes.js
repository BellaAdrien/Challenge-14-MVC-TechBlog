const router = require('express').Router();




router.get("/admin",(req, res)=>{

res.render('admin',{users:"IA", roles:"admin"})


})

router.get("/user",(req, res)=>{

    res.render('',{})
    
    
    })

module.exports=router;