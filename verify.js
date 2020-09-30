let speakeasy=require('speakeasy');

let res = speakeasy.totp.verify({
    secret: 'F4WGWXJDF5ZXIQSJORNDQQSWKRGDSOTFKBWXCMCXHJMG6XJKNUQQ',
    encoding: "base32",
    token: '789451'
  });
  console.log(res); //true or false
