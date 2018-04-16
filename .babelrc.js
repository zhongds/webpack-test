module.exports = {
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": [
    "@babel/plugin-syntax-dynamic-import",
    // "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-class-properties",
    // "./babel-plugin-transform-vname",
    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": true }, "antd"],    
    ["import", 
      { "libraryName": "aa",
      "camel2DashComponentName": false,
      "libraryDirectory": "",
      },
      "aa"
    ],
  ]
}