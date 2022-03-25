// 参考：https://github.com/cuth/postcss-pxtorem
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 192, // 设计稿的十分之一
      unitPrecision: 7, // 保留7位小数位
      minPixelValue: 0, // 设置要转换的最小像素值
      propList: ['*'], // 可以从px更改为rem的属性
      selectorBlackList: ['html', '#app', '.ignore-rem-'], // 不会被转换的选择器
      mediaQuery: false, // 不允许在媒体查询中转换px
      exclude: [/node_modules/],
    },
  },
};
