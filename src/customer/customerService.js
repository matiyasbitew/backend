var customerModel = require("./customerModel");

var key='123456789trytryrtyr';
var encryptor= require("simple-encryptor")(key);

module.exports.createCustomerDBService = (customerDetails) => {

    return new Promise( function myFn(resolve, reject) {

    var customerModelData = new customerModel();
    
    customerModelData.lastname = customerDetails.lastname;
    customerModelData.first_name = customerDetails.first_name;
    customerModelData.phone = customerDetails.phone;
    customerModelData.reason = customerDetails.reason;
    customerModelData.email = customerDetails.email;
    customerModelData.password = customerDetails.password;
    var encrypted = encryptor.encrypt(customerDetails.password);
    customerModelData.password = encrypted;


    customerModelData.save(function resultHandle(error, result){

    if(error){
    reject(false);
    }
    else{
    resolve(true);

    }
});
});
}
module.exports.loginCustomerDBService =(customerDetails) => {

    return new Promise(function myFn(resolve,reject)
    {
        customerModel.findOne({email: customerDetails.email},function getresult(errorvalue,result)
        {
            if(errorvalue){
                reject({status:false, msg:"invalid data"});

            }
            else{
                if(result!=undefined && result!=null){
                    var decrypt= encryptor.decrypt(result.password);
                    if(decrypt==customerDetails.password){
                        resolve({status: true, msg: "validated succesfully"});
                    }
                    else{
                        reject({status:false, msg:"validation failed"});
                    }
                }
                else{
                    reject({status:false, msg: "envalid employee details"});
                }
            }
        
            {

            }
        });
    }
    );

}