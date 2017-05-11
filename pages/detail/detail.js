// detail.js
var app = getApp();
Page({
  data:{
    movie:{},
    loading:false,
    title:"",
    text:""

  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.loadMovie(options.id);
  },
  onReady:function(){
    this.setTitle(this.data.title)
  },
  //加载信息
  loadMovie:function(movieId){
     var that = this;
     wx.request({
      url: 'http://api.h6vr.com:20001/dyc',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        // success
        console.log(res.data)
        that.setData({text:res.data[0].title,isShow:!show})
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  setTitle:function(title){
    wx.setNavigationBarTitle({
      title:title
    })
  }
})