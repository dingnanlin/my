// pages/hellow/hellow.js
Page({
  data: {

  },
  onLoad: function (options) {

  },
  toHome: function (){
    tt.reLaunch({
        url: `/pages/index/index`,
        success (res) {
            console.log(`${res}`);
        },
        fail (res) {
            console.log(`reLaunch调用失败`);
        }
    });
  }
})