const express = require("express");
const router = express.Router();
const homehot = require("./data/home/homehot")
const url = require("url")//get类型数据传输需要引入一个url
// const searchData = require("./data/search")
const Mock = require("mockjs")//引入mock
const Random = Mock.Random;
const detailsData = require("./data/details")//导入server details数据
// const { resolveNaptr } = require("dns");
const commentData = require("./data/comment")
const orderCommentData = require("./data/order")
//首页热门数据1
router.get("/home/hot1", (req, res) => {
    const cityName = url.parse(req.url, true).query.cityName
    console.log(cityName)
    res.send({
        status: 200,
        result: homehot.hot1
    })
})
//首页热门数据2
router.get("/home/hot2", (req, res) => {
    const cityName = url.parse(req.url, true).query.cityName
    console.log(cityName)
    res.send({
        status: 200,
        result: homehot.hot2
    })
})
//搜索页面
router.get("/search", (req, res) => {
    const search = url.parse(req.url, true).query.search;
    console.log(search);
    let data = Mock.mock({
        hasMore: true,
        'data|5': [{
            "id|+1": Random.integer(),
            title: Random.csentence(5, 8),
            houseType: "17/19层| 4室1厅 - 273.97 ㎡",
            price: "<h3>130000</h3>",
            rentType: Random.cword(2),
            img: Random.image('800x600', Random.color(), '#FFF', 'png', Random.cword(5))
        }]
    })
    res.send({
        status: 200,
        result: data
    })
})

//详情页
router.get("/details", (req, res) => {
    const id = url.parse(req.url, true).query.id
    console.log(id);
    res.send(detailsData)
})
//登录页面
router.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        res.send({
            status: 200,
            token: "enjaskldfhadskljasfdasf",
            nick: username
        })
    } else {
        res.setDefaultEncoding({
            status: 400,
            msg: '用户名或密码错误'
        })
    }
})
//评价
router.get("/comment", (req, res) => {
    const id = url.parse(req.url).query.id;
    console.log(id);
    res.send({
        status: 200,
        result: commentData
    })
})
//订单评价
router.get("/order/comment", (req, res) => {
    const username = url.parse(req.url, true).query.username;
    console.log(username);
    res.send({
        status: 200,
        result: orderCommentData
    })
})
//评价
router.post("/order/submit/comment", (req, res) => {
    const { username, id, content } = req.body
    console.log(username, id, content);
    res.send({
        msg: "评价成功",
        status: 200
    })
})
module.exports = router;