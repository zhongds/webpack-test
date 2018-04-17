# webpack-test
webpack项目，主要目的是搭建一个基于webpack4的基础项目，用于分析webpack打包过程，以及打包性能的优化

# 优化点
目前的优化点有：
- 按需加载：本质是利用import()来异步加载，这里使用了dva/dynamic文件来实现。react-router也有实现的方式([点这里](https://reacttraining.com/react-router/web/guides/code-splitting))，原理一样
- 提取公共文件：splitChunks和mini-css-extract-plugin（dllplugins抽取公共module） ---还有优化的地方
- 多线程: happypack(没见快多少啊？？跟开启uglifyplugin的parall有没关系？)
- 压缩：UglifyJSPlugin
- tree-shaking（有问题）
- PWA（未实现）
- Scope Hoist？
- 缓存的处理？
- hash

# 想法
优化的方向：
1.优化首屏加载时间
  - index.js体积减少，抽取不必要的文件懒加载
  - 压缩图片
  
2.优化启动时间
  - 编译速度（需要编译文件的时间和大小）
  
3.路由切换时加载速度
  - 首次切换
    - 文件的大小和数量
  - 再次切换
    - 缓存
    
4.热更新的速度（**这很重要**）
  - 只重新编译修改的文件（怎么识别哪些文件做了修改？？参考umi和vue的实现）
    - 文件比较大，重新编译也需要时间。如果只编译修改的文件部分，有没有可能？没可能就要减少文件体积，但可能导致多个文件，多发请求。
  - 第三方库的都不重新编译
  
5.dllplugins的使用
  是把所有用到的第三方库都打包进一个文件缓存起来，还是只打包部分？
  - 所有的第三方库都打包（**不可取**）
    - 体积过大，首次加载需要时间太长
  - 部分打包（应该怎么选取）(splitChunks貌似实现了这个功能？)
    1.首屏渲染用到的第三方库打成一个文件
    2.chunk文件中用到的库
      需要分析chunk文件中的依赖
      - chunk文件中单独引用的库单独打成一个文件来引用
      - 多个chunk文件中共享的库打包成一个文件，通过id引用（这可能导致有多个共享文件)
      
 6.hash
  - 开发环境下不用hash,生产环境开启
 
 7.公共文件提取
  - 看情况，一般在生产环境上提取
