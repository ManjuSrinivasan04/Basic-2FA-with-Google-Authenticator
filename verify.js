const speakeasy=require('speakeasy');

let verified = speakeasy.totp.verify({
    secret: 'rHU>&rOB*2@QZkhfcxCo#*mE{G(1<2:p',
    encoding: 'ascii',
    token: '837836'
  });
  console.log(verified); //true or false
