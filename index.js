const Express = require("express");
const BodyParser = require("body-parser");
const Speakeasy = require("speakeasy");
let qrcode = require('qrcode');

let app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

//PORT
app.listen(6000, () => {
    console.log("Listening at :6000...");
});


app.post("/totp-secret", (request, response, next) => {
    let secret = Speakeasy.generateSecret({ length: 20,
        name: "API for Authentication"
     }); 
     qrcode.toDataURL(secret.otpauth_url, function(err, image_data) {
        response.send({
           "message": 'Verify OTP',
           "Secret": secret.base32,
           "otpURL": secret.otpauth_url,
            "Qrcode":image_data }); 
});
});



app.post("/totp-validate", (request, response, next) => {
    response.send({
        "valid": Speakeasy.totp.verify({
            secret: request.body.secret,
            encoding: "base32",
            token: request.body.token
        })
    });
});


/* -- Separate code to check in console
let speakeasy = require('speakeasy');
let qrcode = require('qrcode');

let secret = speakeasy.generateSecret({
    name: "API for Authentication"
});
console.log(secret); // Save this value to your DB for the user

qrcode.toDataURL(secret.otpauth_url, function(err, image_data) {
   console.log(image_data); // A data URI for the QR code image
  });
  */
  
 