const Jimp = require('jimp')

function remove_non_ascii(str) {

  if ((str===null) || (str===''))
       return false;
 else
   str = str.toString();

  return str.replace(/[^\x20-\x7E]/g, '');
}

module.exports = function(str, name, callback) {
  str = remove_non_ascii(str)
  str += "\0".repeat((2 - (str.length % 2)) % 2) //add null characters at the end of string
  let current = [];
  let list = []
  for (var i = 0; i<str.length; i++) {
    let numtoencode = str.charCodeAt(i)
    let a = (numtoencode)%16;
    let b = (numtoencode-(a))/16;
    current.push(b*16);
    current.push(a*16);
    if (i%2===1) {
      if (current[3]===0) current[3] = 255
      var bigint = Jimp.rgbaToInt.apply(null, current)
      list.push(bigint)
      current = []
    }
  }
  let image = new Jimp(list.length, 1, function(err, image){
    if (err) throw err;
    list.forEach((color, x) => {
        image.setPixelColor(color, x, 0);
    });
    image.write(name, err=>{
      if (err) throw err
      else callback(image)
    })
  })
}
