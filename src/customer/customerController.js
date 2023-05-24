var customerService= require('./customerService');

var createCustomerControllerFn = async(req, res) =>
    {
    try 
        {
            console.log(req.body);
        
            var status= await customerService.createCustomerDBService(req.body);
            console.log(status);

            if(status){
                res.send( {"status": true, "message": "customer created succssfully"} );
            }else{
                res.send({"status": false, "messagee": "error "});
            }
        }
        catch(err){
            console.log(err);
        }

    }
    var loginCustomerControllerFn = async(req, res)=>{
        var result=null;
        try{
            result= await customerService.loginCustomerDBService(req.body);
            if(result.status){
                res.send({"status": true, "message": result.msg});

            }
            else{
                res.send({"status": false, "message": result.msg});

            }
        }catch(err){
console.log(err)
res.send({"status": false, "message": err.msg});
        }

    }


module.exports = { createCustomerControllerFn, loginCustomerControllerFn };