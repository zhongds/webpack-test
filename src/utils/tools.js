/**
 * 返回各级组织
 * @param node
 * @returns {}
 */
export const getOrganizationList = (rootNode) => {
  const organizationList = {
    // PROVINCE: [],
    // CITY: [],
    // AREA: [],
    // DETACHMENT: [],
    // BRIGADE: [],
    // SQUADRON: [],
  };
  function addToList(node) {
    if (!node) return null;
    const { type, children } = node;
    // 把此节点push进相应类型的list
    if (!Array.isArray(organizationList[type])) {
      organizationList[type] = [];
    }
    organizationList[type].push(node);
    // 为子节点执行相同操作
    if (Array.isArray(children)) {
      children.forEach(addToList);
    }
    return organizationList;
  }

  return addToList(rootNode);
};

/**
 * 根据返回的字典及组织信息和表格列配置（columns） 转化表格数据
 * @param {Array} dataSource
 * @param {Array} organizationInfo
 * @param {Object} dictMap
 * @param {Array} columns
 * @returns {Array}
 */
export const convertDataSource = (dataSource, organizationInfo, dictMap, columns) => {
  // TODO
  const converted = JSON.parse(JSON.stringify(dataSource));
  converted.forEach((item) => {
    // 转化组织机构id为组织机构名称
    if (Array.isArray(organizationInfo)) {
      organizationInfo.some((child) => {
        if (child.id === item.manageDepartment) {
          item.manageDepartment = child.name;
          return true;
        }
        return false;
      });
    } else if (typeof organizationInfo === 'object' && organizationInfo !== null) {
      Object.keys(organizationInfo)
        .some(key => organizationInfo[key].find((child) => {
          if (child.id === item.manageDepartment) {
            item.manageDepartment = child.name;
          }
          return child.id === item.manageDepartment;
        }) !== undefined);
    }

    columns.forEach((col) => {
      // 把字典code转化为对应字典值
      if (col.dictType && dictMap[col.dictType]) {
        const text = item[col.dataIndex];
        let newText;
        if (col.join) {
          newText = text.split('').map(str => convert(str, dictMap[col.dictType])).join(col.join);
        } else {
          newText = convert(text, dictMap[col.dictType]);
        }
        item[col.dataIndex] = newText;
      }
    });
  });
  return converted;
};

function convert(text, dict) {
  if (typeof dict === 'object') {
    // 数组和map采用不同方式查询
    if (Array.isArray(dict)) {
      const dictItem = dict.find(dItem => dItem.code === text);
      return dictItem !== undefined ? dictItem.value : text;
    }
    return dict[text] !== undefined ? dict[text] : text;
  }
  console.log('----------字典格式错误---------');
  return '';
}

/**
 * 根据shape参数自定义规则, 从复杂对象中提出字符串
 * 示例:
 * convertObjToStr(
 *  [
 *    { address: '深圳市盐田区东海道天利明园东209房', id: 'xxx' },
 *    { address: '深圳市南山区南海天道利明园西211房', id: 'xxx' },
 *  ],
 *  [{ type: 'array', join: ', ' }, { type: 'map', index: 'address' }]
 * )
 * 将返回: '深圳市盐田区东海道天利明园东209房, 深圳市南山区南海天道利明园西211房'
 * @param {Object} targetObj
 * @param {Array} shape
 * @returns {String}
 */
export const convertObjToStr = (targetObj, shape) => {
  // 以下情况不进行转化
  if (typeof targetObj !== 'object' || targetObj === null || !Array.isArray(shape) || shape.length <= 0) {
    return targetObj;
  }

  try {
    const getValue = (obj, shapeIndex) => {
      let value = obj;
      const shapeItem = shape[shapeIndex];
      if (shapeItem) {
        if (shapeItem.type === 'array') {
          value = obj.map(item => getValue(item, shapeIndex + 1)).join(shapeItem.join);
        } else if (shapeItem.type === 'map') {
          value = getValue(obj[shapeItem.index], shapeIndex + 1);
        }
      }
      return value;
    };
    const result = getValue(targetObj, 0);
    return result;
  } catch (err) {
    console.log(err);
    return '数据格式或配置异常';
  }
};

/**
 * 去掉url最后一个斜杠，如果存在的话
 * @param {String} url
 * @returns {String}
 */
export function removeURLLastSprit(url) {
  return url.replace(/(.*)\/$/, '$1');
}

/**
 * url拼接，传入任意多个url，去除多出的斜杠和添加遗漏的斜杠并拼接 输出格式 ‘/xxxx/xxxx/xxx’
 * @param {String} url
 * @returns {String}
 */
export function resolveUrl(...rest) {
  const urlArr = rest.map((url) => {
    if (typeof url === 'string' && url !== '' && url !== '/') {
      return url.replace(/(\/*)$/, '').replace(/^(\/*)/, '/');
    }
    return '';
  });
  return urlArr.join('');
}

/**
 * 去除分类，把分类的所有元素放入一个数组中
 * @param {String} url
 * @returns {String}
 */
export const removeCategory = (data) => {
  const list = [];
  Object.keys(data).forEach((key) => {
    list.concat(data[key]);
  });
  return list;
};
