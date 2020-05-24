var express = require('express');
var router = express.Router();
const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");

/* GET users listing. */
router.get('/', function (req, resp, next) {

  const data = fs.readFileSync('./data/chienhon.json');
  const dataFomat = JSON.parse(data);
  const { chienHonList } = dataFomat;
  if(chienHonList && chienHonList.length) { 
    resp.send(chienHonList);
    return;
  }
//   request("https://tamquoc1st.info/honngoc.html", function (err, res, body) {
//     var $ = cheerio.load(body);
//     var ds = $(body).find("ul li img");
//     var chienHonList = [];
//     ds.each(function (index, element) {
//       let imageUrl = `chan${element.attribs.src.split("/")[2]}`;
//       let Name = `Chân-${element.attribs.alt}`;
//       let data = {
//         imageUrl,
//         Name
//       };
//       chienHonList = [...chienHonList, data];
//     });
//     resp.send(chienHonList);
//   });
});

module.exports = router;
