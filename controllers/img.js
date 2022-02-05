const { errorHandler } = require("../utils");

exports.getLink1 = async (req, res, next) => {
  var data = require('fs-extra').readFileSync(__dirname + '/../data.txt', 'utf-8').split('\n');
  link = data[Math.floor(Math.random() * data.length)].trim();
  res.json({
    "\ndata":`${link}`,
    "Authors":"Bearz", "số ảnh":`${data.length}\n`
    });
};