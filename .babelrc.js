module.exports = {
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": [
    "@babel/plugin-syntax-dynamic-import",
    // "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-class-properties",
    // "./babel-plugin-transform-vname",
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": true }, "antd"],    
    ["import", 
      { "libraryName": "aa", "libraryDirectory": "", 
      "camel2DashComponentName": false, 
      "style": function(path) {
        console.log('style load===============');
        console.log(path);
        return `${path}/index.less`;
      }},
      "aa"
    ],
  ]
}