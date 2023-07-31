var um = require('./usermodel');
var key= 'qwertyasdf123456789'
var encryptor = require('simple-encryptor')(key);

module.exports.registeruserdbservice =  (userdata) => {

    return new Promise(function myfn(resolve,reject) {
            var user = new um();
            user.firstname = userdata.firstname;
            user.lastname = userdata.lastname;
            user.email = userdata.email;
            user.phonenumber = userdata.phonenumber;
            user.gender = userdata.gender;
            user.country = userdata.country;
            var encpwd = encryptor.encrypt(userdata.password);
            user.password = encpwd;
            var encconfirmpwd = encryptor.encrypt(userdata.confirmpassword);
            user.confirmpassword = encconfirmpwd;
            user.chekbox = userdata.chekbox;
            function resultHandle (err,result) {
                if(err)
                {
                    reject(false);
                }
                else
                {
                    resolve(true);
                }
            }
        
            user.save(resultHandle());
    });

}

module.exports.logindbservice = (userdata) => {

    return new Promise(function myfn(resolve,reject) {
        um.findOne({email:userdata.email},)
        .then((result) => {
            if(result!=null && result!=undefined && result!='')
                {
                    var decpwd = encryptor.decrypt(result.password);
                    if(decpwd == userdata.password)
                    {
                        resolve({"status":true,"msg":"User logged in successfully"});
                    }
                    else
                    {
                        reject({"status":false,"msg":"User not Logged in"});
                    }
                }
                else
                {

                    reject({"status":false,"msg":"User not found"});
                }
        
        })
        .catch((error) => {
            reject({"status":false,"msg":"User not found"});
        });

    });

}

module.exports.changepassworddbservice = (userdata) => {

    return new Promise(function myfn(resolve,reject) {
        console.log(userdata);
        um.findOne({email:userdata.email},)
        .then((result) => {
            console.log(result)
            if(result!=null && result!=undefined && result!='')
                {
                    var decpwd = encryptor.decrypt(result.password);
                    if(decpwd == userdata.previouspassword)
                    {
                        var encpwd = encryptor.encrypt(userdata.newpassword);
                        result.password = encpwd;
                        var encconfirmpwd = encryptor.encrypt(userdata.confirmpassword);
                        result.confirmpassword = encconfirmpwd;
                        result.save();
                        resolve({"status":true,"msg":"Password changed successfully"});
                    }
                    else
                    {
                        reject({"status":false,"msg":"Password not changed"});
                    }
                }
                else
                {

                    reject({"status":false,"msg":"User not found"});
                }
        
        })
        .catch((error) => {
            reject({"status":false,"msg":"User not found"});
        });

    });
         
    
    };

