var express = require('express');
var router = express.Router();
const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");

/* GET users listing. */
router.get('/', function (req, resp, next) {

  const dataBaoVat = fs.readFileSync('./data/baovat.json');
  const dataFomat = JSON.parse(dataBaoVat);
  const { baoVatList } = dataFomat;
  if(baoVatList && baoVatList.length) { 
    resp.send(baoVatList);
    return;
  }
  // request("https://www.tamquoc1st.info/baovat.html", function (err, res, body) {
  //   var $ = cheerio.load(body);
  //   var ds = $(body).find(".piclist li a img");
  //   var baoVatList = [];
  //   ds.each(function (index, element) {
  //     let imageUrl = element.attribs.src;
  //     let Name = element.attribs.alt;
  //     let data = {
  //       imageUrl,
  //       Name
  //     };
  //     baoVatList = [...baoVatList, data];
  //   });
  //   const jsonData = {
  //     baoVatList
  //   }
  //   resp.send(baoVatList);
  // });
});

module.exports = router;
