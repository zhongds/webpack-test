const Mock = require('mockjs');

const Random = Mock.Random;

const carFunctionMap = {
  泥头车: '货运',
  散装物料车: '货运',
  教练车: '教练',
  出租车: '出租客运',
  公交车: '公交客运',
  旅游包车: '旅游客运',
  危险品运输车: '危化品运输',
  半挂车: '危化品运输',
  重载车: ['危化品运输', '货运', '租赁'],
  客运班车: '客运班车',
  校车: ['幼儿校车', '小学生校车'],
};
const getCarFunction = type => (
  typeof carFunctionMap[type] === 'string' ? carFunctionMap[type] : Random.pick(carFunctionMap[type])
);

/* eslint-disable */
let data = Mock.mock({
  'content|25-88': [{
    'id|+1': 1,
    'licensePlateNumber': () => '粤' + Random.string('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789012345678901234567890123456789', 6),
    'motorVehicleStatus': () => Random.pick(['在线', '离线']),
    'vehicleType': () => Random.pick(['泥头车', '旅游包车', '危险品运输车', '半挂车', '校车', '教练车', '重载车', '客运班车', '出租车', '公交车', '散装物料车']),
    'function': function() { return getCarFunction(this.vehicleType); },
    'mockNumber1': () => Random.integer(0, 120),
    'mockNumber2': () => Random.integer(0, 50),
    'mockNumber3': () => Random.integer(0, 50),
    'mockNumber4': () => Random.integer(0, 100),
    'mockDate1': () => Random.date('yyyy-MM-dd'),
  }],
  // 'totalSizes': 0,
  // 'pageOffset': 0,
});

export default {
  [`POST /motorVehicleInfo/find`](req, res) {
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
