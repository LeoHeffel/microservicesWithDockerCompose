

module.exports=(req,res,next)=>{
    const {model}= req.params
    if(["Film","Planet","Character"].includes(model)){
        return next()
    }else{
        res.status(400).json({error:"modelo invalido"})
    }
}