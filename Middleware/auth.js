
const jwt=require("jsonwebtoken")
const auth=async(req,res,next)=>{

    const headers=req.headers.authorization


try {
    if(headers){

        jwt.verify(headers, 'mock6', async(err, decoded)=> {
            if(decoded){
                req.body.username=decoded.username
                req.body.userID=decoded.userID

                next()

            }else{
                res.send({err:"login again"})
            }
           
          });

    }else{
        res.send({err:"login again"})
    }

    
} catch (error) {
    res.send({"error":error})
}

}

module.exports={auth}