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
    if (heros && heros.length) {
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


router.get('/:id', function (req, resp, next) {
    var id = req.params.id;
    const heroList = fs.readFileSync('./data/heroDetail.json');
    const herosFomat = JSON.parse(heroList);
    const { herosDetail } = herosFomat;
    const hero = herosDetail.find(heroDetail => heroDetail.heroId === id);
    resp.send(hero);
    // console.log(`https://tamquoc1st.info/talent/${id}.html `);

    // request(`https://tamquoc1st.info/talent/${id}.html`, function (err, res, body) {
    //     var $ = cheerio.load(body);
    //     var chiso = $(body).find(".sxlist li");
    //     var skill = $(body).find(".sklist li");
    //     var talent = $(body).find(".tc .tflist li");
    //     var imgChan = $(body).find(".tc .tflist .ienlarger a img");
    //     var anNgua = $(body).find(".wjlist li a img");
    //     var duyen = $(body).find(".ml30 .fz16");
    //     var heroImg = $(body).find(".w380 img")[0].attribs.src;
    //     let chiSoList = [];
    //     let skillList = [];
    //     let talentList = [];
    //     let imgTuong = [];
    //     let anNguaList = [];
    //     let duyenList = [];
    //     duyen.each(function (index, element) {
    //         let name = $(this).find('.jbname').text();
    //         let props = $(this).find('p').text();
    //         let propsFomat = props.split(':')[1];
    //         let size = props.split(':');
    //         if (size.length === 3) {
    //             propsFomat = props.split(':')[2];
    //         }
    //         let listHero = $(this).find('.jblist li a img');
    //         let heros = []
    //         listHero.each(function (index, element) {
    //             let imgUrl = element.attribs.src;
    //             let heroName = $(element).parent().text();
    //             let heroId = imgUrl.split('/')[3].split('.')[0];
    //             heros = [...heros, { imgUrl, heroName, heroId }];

    //         });
    //         duyenList = [...duyenList, { name, heros, props: propsFomat }]
    //     });
    //     imgChan.each(function (index, element) {
    //         console.log(element.attribs.src);
    //         let img = element.attribs.src;
    //         imgTuong = [...imgTuong, img];
    //     });
    //     anNgua.each(function (index, element) {
    //         console.log(element.attribs.src);
    //         let img = element.attribs.src;
    //         let name = $(element).parent().text();
    //         let dataAnNgua = {
    //             img,
    //             name,
    //         }
    //         anNguaList = [...anNguaList, dataAnNgua];
    //     });
    //     chiso.each(function (index, element) {
    //         let chiSoitem = $(this).text().split(/(\d+)/);
    //         let key = element;
    //         let data = {
    //             key: chiSoitem[0].trim(),
    //             value: chiSoitem[1]
    //         };
    //         chiSoList = [...chiSoList, data];
    //     });
    //     skill.each(function (index, element) {
    //         let skillItem = $(this).text();
    //         let skillData = {
    //             value: skillItem
    //         };
    //         skillList = [...skillList, skillData];
    //     });

    //     talent.each(function (index, element) {
    //         let key = $(this).find('.tfname').text();
    //         let value = $(this).find('.tfdesp').text();
    //         let tanlentData = {
    //             key,
    //             value
    //         };
    //         talentList = [...talentList, tanlentData];
    //     });

    //     let dataRes = {
    //         heroId: id,
    //         chiSoList,
    //         skillList,
    //         talentList: talentList.slice(0, 15),
    //         chanTuong: talentList.slice(15, 20),
    //         kimTuong: talentList.slice(20, 24),
    //         imgTuong: [imgTuong[0], imgTuong[2]],
    //         anNguaList,
    //         duyenList,
    //         heroImg
    //     }
    //     if (data.some(e => e.heroId === dataRes.heroId)) return;
    //     const dataTemp = [...data, dataRes];
    //     var obj = {
    //         data: dataTemp
    //     };
    //     var json = JSON.stringify(obj);
    //      fs.writeFileSync('detail.json', json);
    //     resp.send(dataRes)
    // });
});

module.exports = router;
