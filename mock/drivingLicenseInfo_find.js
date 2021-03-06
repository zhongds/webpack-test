const Mock = require('mockjs');

const Random = Mock.Random;

/* eslint-disable */
let data = Mock.mock({
  'content|25-88': [{
    'id|+1': 1,
    'name': () => Random.cname(),
    'motorVehicleStatus': () => Random.pick(['在线', '离线']),
    'drivingLicenseNumber': () => '440303' + Random.integer(100000000000, 999999999999),
    'tel': () => '135' + Random.integer(10000000, 99999999),
    'personIndex': () => Random.integer(80, 100),
    'mockNumber1': () => Random.integer(0, 120),
    'mockNumber2': () => Random.integer(0, 50),
    'mockNumber3': () => Random.integer(0, 50),
    'mockNumber4': () => Random.integer(0, 100),
    'percentage1': () => Random.integer(80, 100) + '%',
    'percentage2': () => Random.integer(60, 100) + '%',
    'company': () => Random.pick(['深圳市大鹏海滨汽车运输有限公司', '深圳市鸿骏发运输有限公司', '深圳市平安正点旅游运输有限公司', '深圳市西湖运输有限公司', '深圳市恒誉光明运输集团有限公司', '深圳市易和达运输有限公司', '深圳市斯为美汽车运输有限公司', '深圳市共速达客运有限公司', '深圳市鹏运国旅运输有限公司', '深圳市并肩运输有限公司', '深圳市观澜湖客运有限公司', '深圳国旅旅游汽车有限公司', '深圳核电环通汽车服务有限公司', '深圳市深港鹏安汽车运营有限公司', '深圳市安浩实业有限公司运输分公司', '深圳市益华运输服务有限公司', '深圳市金华南巴士股份有限公司', '深圳市炬星运输实业有限公司', '深圳市明成达运输有限公司', '深圳市丽达旅运有限公司', '深圳市新宝通交通运输有限公司', '深圳市口岸中国旅行社有限公司', '深圳市中侨旅运服务有限公司', '深圳市银鹏亿运输有限公司', '深圳市鹏翔旅游运输有限公司', '深圳东部华侨城有限公司', '深圳市新纪元运输发展股份有限公司', '深圳市新通宝运输有限公司', '深圳双骏汽车客运有限公司', '深圳市华光达运输实业有限公司', '深圳市奥特尔小汽车出租有限公司', '深圳市友盟旅运有限公司', '深圳市康华通汽车运输有限公司', '绿巴新能源汽车运输服务（深圳）有限公司', '深圳市九洲国际旅行社有限公司', '深圳市深旅通巴士有限公司', '深圳市承盛汽车服务有限公司', '深圳宏旭新能源汽车运营有限公司', '深圳市顺泽实业有限公司', '深圳市京兰新能源汽车服务有限公司', '深圳市横岗汽车运输有限公司', '广东中汽租赁有限公司', '深圳市安道运输集团有限公司', '深圳市港中旅快线运输有限公司', '深圳市深港荣和客运有限公司', '深圳市中南服务巴士有限公司', '深圳粤港汽车运输有限公司', '深圳金湖汽车运输服务有限公司', '深圳市北地牛运输有限公司', '深圳市繁昌运输实业有限公司', '深圳市红土地客运有限公司', '深圳市友谊旅游汽车运输有限公司', '深圳市假日汽车客运有限公司', '深圳永恒运输实业有限公司', '新国线集团(广东)运输有限公司深圳分公司', '深圳市中旅通汽车服务有限公司', '深圳市综安运输有限公司', '深圳市宝路华宝龙运输有限公司', '深圳市海韵国际旅行社有限公司', '深圳市迅安通汽车运输有限公司', '深圳市思远盛大新能源汽车租售有限公司', '深圳市侨城旅游运输有限公司', '新国线集团（深圳）客运有限公司', '深圳市中沃绿源旅游投资发展有限公司', '深圳市龙巴运输有限公司', '深圳市路源通运输有限公司', '深圳市聚安汽车运输有限公司', '深圳市龙安运输有限公司', '深圳市宝中旅游巴士有限公司', '深圳市盛誉汽车运输有限公司']),
  }],
  // 'totalSizes': 0,
  // 'pageOffset': 0,
});

export default {
  [`POST /drivingLicenseInfo/find`](req, res) {
    const { pageOffset, pageSize } = req.body;
    const resData = {
      content: data.content.slice(pageOffset * pageSize, pageOffset * pageSize + pageSize),
      pageOffset: req.body.pageOffset,
      pageSize: req.body.pageOffset,
      totalSizes: data.content.length,
      body: req.body,
    }
    setTimeout(() => {
      res.status(200).json(resData);
    }, 500);
  }
}
/* eslint-enable */
