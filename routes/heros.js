var express = require('express');
var router = express.Router();
const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");

/* GET users listing. */
router.get('/', function (req, resp, next) {
  const heroList = fs.readFileSync('./data/heros.json');
  const herosFomat = JSON.parse(heroList);
  const { heros } = herosFomat;
  if(heros && heros.length) {    
    resp.send(heros);
    return;
  }
  // request("https://tamquoc1st.info/index.html", function (err, res, body) {
  //   var $ = cheerio.load(body);
  //   var ds = $(body).find(".piclist li a");
  //   var heroList = [];
  //   ds.each(function (index, element) {
  //     let camp = element["attribs"]["country"];
  //     let heroType = element["attribs"]["hero_type"];
  //     let imgString = element.children[0].attribs.src;
  //     let heroName = element.children[0].attribs.alt;
  //     let aptitude = heroType === "Đỏ" ? 16 : heroType === "Cam" ? 12 : 10;
  //     let data = {
  //       camp,
  //       heroType,
  //       imgString,
  //       heroName,
  //       aptitude
  //     };
  //     heroList = [...heroList, data];
  //   });
  //   resp.send(heroList);
  // });
});

module.exports = router;
