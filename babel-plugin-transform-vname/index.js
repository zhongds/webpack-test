"use strict";

exports.__esModule = true;

exports.default = function(path, state) {
  console.log('====================1')
  console.log(path)
  console.log(state)
  console.log('=====================2')
  const { types: t } = path;
  return {
    visitor: {
      BinaryExpression(path) {
        if (path.node.operator !== "===") {
          return;
        }
      
        path.node.left = t.identifier("sebmck");
        path.node.right = t.identifier("dork");
      }
    }
  };
}

module.exports = exports["default"];
