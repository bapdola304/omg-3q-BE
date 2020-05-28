var express = require('express');
var router = express.Router();
const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");

/* GET users listing. */
router.get('/', function (req, resp, next) {

    const data = fs.readFileSync('./data/anngua.json');
    const dataFomat = JSON.parse(data);
    const heroList = fs.readFileSync('./data/heros.json');
    const herosFomat = JSON.parse(heroList);
    const { heros } = herosFomat;
    const { anNguaList } = dataFomat;
    if (anNguaList && anNguaList.length) {
        const anNguaListQuery = anNguaList.map(item => {
            let { owners } = item;
            let ownersDetais = []
            owners.map(o => {
                heros.map(hero => {
                    if (o === hero.heroId) {
                        ownersDetais = [...ownersDetais, hero];
                    }
                })
            })
            item.ownersDetais = ownersDetais;
            return item;
        })
        resp.send(anNguaListQuery);
        return;
    }
    //   request("https://tamquoc1st.info/anngua.html", function (err, res, body) {
    //     var $ = cheerio.load(body);
    //     var ds = $(body).find("ul li img");
    //     var chienHonList = [];
    //     ds.each(function (index, element) {
    //       let imageUrl = `${element.attribs.src}`;
    //       let Name = `${element.attribs.alt}`;
    //       let data = {
    //         imageUrl,
    //         Name
    //       };
    //       chienHonList = [...chienHonList, data];
    //     });
    //     resp.send(chienHonList);
    //   });`
});

module.exports = router;
