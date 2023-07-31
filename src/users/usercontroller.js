const bodyParser = require('body-parser');
var us =require('./userservice');
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

var registerfn = async (req,res) => {
    try
    {
        console.log(req.body);
        var result = await us.registeruserdbservice(req.body);
        console.log(result);


        if(result)
        {
            res.send({"status":true,"message":"User registered successfully"});
        }
        else
        {
            res.send({"status":false,"message":"User not registered"});
        }
    }
    catch(error)
    {
        console.log(error);
    }
}


    var loginfn = async(req,res) => {
        var result=null;
        try
            {
                result = await us.logindbservice(req.body);
                if(result.status)
                {
                    res.send({"status":true,"message": result.msg});
                }
                else
                {
                    res.send({"status":false,"message": result.msg});
                }
            }
            catch(error)
            {
                console.log(error);
                res.send({"status":false,"message": error.msg});
            }
}
function generateToken(length = 32) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      token += characters.charAt(randomIndex);
    }
  
    return token;
  }
  
var resetpasswordfn = async(req,res) => {
   
    const { email } = req.body;
    console.log(email);
    
    const token = generateToken(); 
    const resetLink = `http://localhost:4200/rpwd?token=${token}`;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rlsrma10@gmail.com',
      pass: 'urdtyrinjreitxwy',
    },
  });

  const mailOptions = {
    from: 'rlsrma10@gmail.com',
    to: email,
    subject: 'Password Reset',
    html: `
      <p>Please click the following link to reset your password:</p>
      <a href="${resetLink}">${resetLink}</a>
      <br>
      <p>Ignore this email if you do remember your password,
        or you have not made the request.</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email', error);
      res.status(500).json({ error: 'An error occurred while sending the email' });
    } else {
      console.log('Password reset email sent');
      res.send({"status":true,"message": "Password reset email sent"});
    }
  });
};

 var changepasswordfn = async(req,res) => {
    try
    {
        var result = await us.changepassworddbservice(req.body);
        if(result)
        {
            res.send({"status":true,"message":"Password changed successfully"});
        }
        else
        {
            res.send({"status":false,"message":"Password not changed"});
        }
    }
    catch(error)
    {
        console.log(error);
    }
}



    
    
    
    
    
    
    
    module.exports ={registerfn,loginfn,resetpasswordfn,changepasswordfn};
