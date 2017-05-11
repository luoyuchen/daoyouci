//about.js
//获取应用实例
var app = getApp();
Page({
  data: {
    version: 'v1.0.5',
    showLog: false
  },
  
  toggleLog: function(){
    this.setData({
      showLog: !this.data.showLog
    });
  },
  onShareAppMessage: function () {
    return {
      title: '【导游词】语音解说',
      desc: '您身边的解说员',
      path: '/pages/mine/mine'
    }
  },
});