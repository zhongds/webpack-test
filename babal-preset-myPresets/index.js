module.exports = function() {
  return {
    plugins: [
      [require("babel-plugin-import"), 
        // { "libraryName": "antd", "libraryDirectory": "es", "style": true },
        { "libraryName": "aa", "libraryDirectory": "", 
        "camel2DashComponentName": false, 
        "camel2UnderlineComponentName": false,
        // "customName": function(methodName) {
        //   console.log(methodName);
        //   return `src/aa/${methodName}`;
        // },
        "style": function(path) {
          console.log('style load===============');
          console.log(path);
          return `${path}/index.less`;
        }}
      ]
    ]
  }
};