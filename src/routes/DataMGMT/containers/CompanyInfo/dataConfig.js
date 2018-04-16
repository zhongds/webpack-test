export default [
  { name: 'name', type: 'String', text: '企业名称', required: true },
  { name: 'type', type: 'String', text: '企业类型' },
  { name: 'number', type: 'String', text: '企业编号' },
  { name: 'operatingType', type: 'String', text: '运营类型' },
  { name: 'shortName', type: 'String', text: '企业简称' },
  { name: 'licenseNumber', type: 'String', text: '道路运输许可证号' },
  { name: 'licenseDate', type: 'String', text: '发证日期' },
  { name: 'code', type: 'String', text: '组织机构代码' },
  { name: 'division', type: 'String', text: '行政区划' },
  { name: 'scaleLevel', type: 'int', text: '规模等级', option: [
    { value: 0, text: '全部规模企业' },
    { value: 1, text: '车辆≥30' },
    { value: 2, text: '10≤车辆<30' },
    { value: 3, text: '5≤车辆<10' },
    { value: 4, text: '车辆<5' },
  ] },
  { name: 'telephone', type: 'String', text: '企业电话' },
  { name: 'email', type: 'String', text: '企业电子邮箱' },
  { name: 'contact', type: 'String', text: '联系人' },
  { name: 'contactPhone', type: 'String', text: '联系人手机号' },
  { name: 'contactTel', type: 'String', text: '联系人办公室电话' },
  { name: 'legalPerson', type: 'String', text: '法人代表' },
  { name: 'legalPersonCard', type: 'String', text: '法人身份证号码' },
  { name: 'legalPersonPhone', type: 'String', text: '法人电话号码' },
  { name: 'primaryManager', type: 'String', text: '主要负责人' },
  { name: 'primaryManagerCard', type: 'String', text: '主要负责人身份证号码' },
  { name: 'primaryManagerPhone', type: 'String', text: '主要负责人电话' },
  { name: 'departmentManager', type: 'String', text: '部门负责人' },
  { name: 'departmentManagerCard', type: 'String', text: '部门负责人身份证号码' },
  { name: 'departmentManagerPhone', type: 'String', text: '部门负责人电话' },
  { name: 'securityManager', type: 'String', text: '安全负责人' },
  { name: 'securityManagerCard', type: 'String', text: '安全负责人身份证号码' },
  { name: 'securityManagerPhone', type: 'String', text: '安全负责人电话' },
  { name: 'manageDepartment', type: 'String', text: '管理部门', isManageDepartment: true },
  { name: 'police', type: 'String', text: '责任民警' },
  { name: 'businessLicense', type: 'String', text: '营业执照' },
  { name: 'taxNumber', type: 'String', text: '税务登记号' },
  { name: 'registeDate', type: 'String', text: '公司成立日期' },
  { name: 'operatingStatus', type: 'String', text: '运营状况' },
  { name: 'remark', type: 'String', text: '备注' },
  { name: 'vindicator', type: 'String', text: '维护人' },
  { name: 'companyCredit', type: 'CompanyCredit', text: '企业征信', shape: [{ type: 'map', index: 'score' }] },
  { name: 'companyAddresses', type: 'List', text: '公司地址', shape: [{ type: 'array', join: ', ' }, { type: 'map', index: 'address' }] },
  { name: 'creator', type: 'String', text: '创建者' },
  { name: 'createTime', type: 'String', text: '创建时间' },
  { name: 'modifyTime', type: 'String', text: '最后维护时间' },
];
